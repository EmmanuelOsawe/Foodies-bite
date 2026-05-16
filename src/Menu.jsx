import { useState, useEffect } from 'react';
import './App.css';
import {
  getFoods,
  makeReservation,
  initializePayment,
  placeOrder,
  getStoredUser,
  isLoggedIn,
  saveAuth,
  clearAuth,
  loginUser,
  registerUser,
} from './api';

const CATEGORIES = ['all', 'breakfast', 'lunch', 'dinner', 'drinks', 'desserts', 'snacks', 'sides'];

function Menu() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [authTab, setAuthTab] = useState('login');
  const [user, setUser] = useState(getStoredUser());
  const [toast, setToast] = useState(null);
  const [orderLoading, setOrderLoading] = useState(false);
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [checkoutStep, setCheckoutStep] = useState('cart');
  const [resDate, setResDate] = useState('');
  const [resTime, setResTime] = useState('');
  const [resGuests, setResGuests] = useState(2);
  const [resLoading, setResLoading] = useState(false);
  const [authForm, setAuthForm] = useState({ name: '', email: '', password: '' });
  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState('');

  const showToast = (msg, type = 'success') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3500);
  };

  useEffect(() => {
    let cancelled = false;

    const loadFoods = async () => {
      setLoading(true);
      try {
        const params = { limit: 50 };
        if (search) params.search = search;
        if (category !== 'all') params.category = category;
        const data = await getFoods(params);
        if (!cancelled) setFoods(data.foods || []);
      } catch (err) {
        if (!cancelled) showToast(err.message, 'error');
      }
      if (!cancelled) setLoading(false);
    };

    loadFoods();
    return () => { cancelled = true; };
  }, [search, category]);

  const addToCart = (food) => {
    if (!food.isAvailable) return;
    setCart(prev => {
      const exists = prev.find(i => i._id === food._id);
      if (exists) return prev.map(i => i._id === food._id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...food, qty: 1 }];
    });
    showToast(`${food.name} added to cart!`);
  };

  const updateQty = (id, qty) => {
    if (qty < 1) setCart(prev => prev.filter(i => i._id !== id));
    else setCart(prev => prev.map(i => i._id === id ? { ...i, qty } : i));
  };

  const cartTotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  const formatPrice = (n) => `\u20A6${Number(n).toLocaleString()}`;

  const handleCheckout = async () => {
    if (!isLoggedIn()) { setAuthOpen(true); return; }
    if (checkoutStep === 'cart') { setCheckoutStep('address'); return; }
    if (!deliveryAddress.trim()) { showToast('Enter your delivery address', 'error'); return; }
    setOrderLoading(true);
    try {
      const items = cart.map(i => ({ foodId: i._id, quantity: i.qty }));
      const orderRes = await placeOrder({ items, deliveryAddress });
      const payRes = await initializePayment(orderRes.order._id);
      showToast('Redirecting to payment...');
      setCart([]);
      setCartOpen(false);
      setCheckoutStep('cart');
      window.open(payRes.authorization_url, '_blank');
    } catch (err) {
      showToast(err.message, 'error');
    }
    setOrderLoading(false);
  };

  const handleReservation = async (e) => {
    e.preventDefault();
    if (!isLoggedIn()) { setAuthOpen(true); showToast('Please sign in to book a table', 'error'); return; }
    setResLoading(true);
    try {
      await makeReservation({ date: resDate, time: resTime, guests: Number(resGuests) });
      showToast('Table booked! We will confirm shortly.');
      setResDate(''); setResTime(''); setResGuests(2);
    } catch (err) {
      showToast(err.message, 'error');
    }
    setResLoading(false);
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    setAuthError(''); setAuthLoading(true);
    try {
      let data;
      if (authTab === 'login') {
        data = await loginUser(authForm.email, authForm.password);
      } else {
        const fd = new FormData();
        fd.append('name', authForm.name);
        fd.append('email', authForm.email);
        fd.append('password', authForm.password);
        data = await registerUser(fd);
      }
      saveAuth(data.token, data.user);
      setUser(data.user);
      setAuthOpen(false);
      showToast(`Welcome${authTab === 'login' ? ' back' : ''}, ${data.user.name.split(' ')[0]}!`);
    } catch (err) {
      setAuthError(err.message);
    }
    setAuthLoading(false);
  };

  const handleLogout = () => {
    clearAuth();
    setUser(null);
    showToast('Signed out');
  };

  return (
    <div>
      {toast && (
        <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 9999, background: toast.type === 'error' ? '#c0392b' : '#2d6a4f', color: 'white', padding: '14px 20px', borderRadius: '8px', fontWeight: 600, fontSize: '0.9rem', boxShadow: '0 8px 24px rgba(0,0,0,0.2)', maxWidth: 320 }}>
          {toast.type === 'error' ? '⚠ ' : '✓ '}{toast.msg}
        </div>
      )}

      {authOpen && (
        <div onClick={(e) => e.target === e.currentTarget && setAuthOpen(false)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
          <div style={{ background: 'white', borderRadius: '16px', padding: '2rem', width: 'min(420px,100%)', maxHeight: '90vh', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1rem' }}>
                {['login', 'register'].map(t => (
                  <button key={t} onClick={() => { setAuthTab(t); setAuthError(''); }}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.1rem', fontWeight: 700, borderBottom: authTab === t ? '2px solid #D47C2F' : '2px solid transparent', paddingBottom: 4, color: authTab === t ? '#3B1F0A' : '#999' }}>
                    {t === 'login' ? 'Sign In' : 'Sign Up'}
                  </button>
                ))}
              </div>
              <button onClick={() => setAuthOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem' }}>✕</button>
            </div>
            {authError && <div style={{ background: '#FFF3F3', border: '1px solid #FFCDD2', color: '#c0392b', padding: '10px 14px', borderRadius: '8px', fontSize: '0.9rem', marginBottom: '1rem' }}>⚠ {authError}</div>}
            <form onSubmit={handleAuth}>
              {authTab === 'register' && (
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: 6, fontSize: '0.85rem', color: '#3B1F0A' }}>Full Name</label>
                  <input className="form-control" value={authForm.name} onChange={e => setAuthForm(p => ({ ...p, name: e.target.value }))} placeholder="John Doe" required
                    style={{ color: '#000', background: '#fff', border: '1.5px solid #ddd', borderRadius: 8, padding: '10px 14px', width: '100%', fontSize: '0.95rem' }} />
                </div>
              )}
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: 6, fontSize: '0.85rem', color: '#3B1F0A' }}>Email</label>
                <input className="form-control" type="email" value={authForm.email} onChange={e => setAuthForm(p => ({ ...p, email: e.target.value }))} placeholder="john@example.com" required
                  style={{ color: '#000', background: '#fff', border: '1.5px solid #ddd', borderRadius: 8, padding: '10px 14px', width: '100%', fontSize: '0.95rem' }} />
              </div>
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: 6, fontSize: '0.85rem', color: '#3B1F0A' }}>Password</label>
                <input className="form-control" type="password" value={authForm.password} onChange={e => setAuthForm(p => ({ ...p, password: e.target.value }))} placeholder="••••••••" required
                  style={{ color: '#000', background: '#fff', border: '1.5px solid #ddd', borderRadius: 8, padding: '10px 14px', width: '100%', fontSize: '0.95rem' }} />
              </div>
              <button type="submit" className="tf-button style3" disabled={authLoading} style={{ width: '100%', textAlign: 'center', opacity: authLoading ? 0.6 : 1 }}>
                {authLoading ? 'Please wait...' : authTab === 'login' ? 'Sign In' : 'Create Account'}
              </button>
            </form>
          </div>
        </div>
      )}

      {cartOpen && (
        <>
          <div onClick={() => { setCartOpen(false); setCheckoutStep('cart'); }} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', zIndex: 900 }} />
          <div style={{ position: 'fixed', right: 0, top: 0, bottom: 0, width: 'min(400px,100vw)', background: 'white', zIndex: 901, display: 'flex', flexDirection: 'column', boxShadow: '-4px 0 24px rgba(0,0,0,0.15)' }}>
            <div style={{ padding: '1.5rem', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h4 style={{ margin: 0 }}>{checkoutStep === 'address' ? 'Delivery Details' : `Your Cart (${cartCount})`}</h4>
              <button onClick={() => { setCartOpen(false); setCheckoutStep('cart'); }} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem' }}>✕</button>
            </div>
            <div style={{ flex: 1, overflowY: 'auto', padding: '1rem 1.5rem' }}>
              {checkoutStep === 'address' ? (
                <div>
                  <p style={{ color: '#555', fontSize: '0.95rem', marginBottom: '1rem', fontWeight: 600 }}>📍 Where should we deliver your order?</p>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: 6, fontSize: '0.85rem', color: '#3B1F0A' }}>Delivery Address *</label>
                  <textarea
                    placeholder="Enter your full delivery address e.g. 12 Adeola Street, Victoria Island, Lagos"
                    value={deliveryAddress}
                    onChange={e => setDeliveryAddress(e.target.value)}
                    rows={4}
                    style={{ width: '100%', padding: '12px 14px', borderRadius: 8, border: '2px solid #D47C2F', fontSize: '0.9rem', color: '#000', background: '#fff', resize: 'vertical', fontFamily: 'inherit', marginBottom: '1rem', outline: 'none' }}
                  />
                  <div style={{ background: '#f9f9f9', borderRadius: 8, padding: '1rem' }}>
                    <strong style={{ fontSize: '0.9rem' }}>Order Summary</strong>
                    {cart.map(i => (
                      <div key={i._id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', margin: '8px 0', color: '#555' }}>
                        <span>{i.name} × {i.qty}</span>
                        <span>{formatPrice(i.price * i.qty)}</span>
                      </div>
                    ))}
                    <div style={{ borderTop: '1px solid #eee', marginTop: 8, paddingTop: 8, display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
                      <span>Total</span><span>{formatPrice(cartTotal)}</span>
                    </div>
                  </div>
                  <button onClick={() => setCheckoutStep('cart')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#888', marginTop: '0.75rem', fontSize: '0.85rem' }}>← Back to cart</button>
                </div>
              ) : cart.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#888' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛒</div>
                  <p>Your cart is empty</p>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item._id} style={{ display: 'flex', gap: 12, padding: '12px 0', borderBottom: '1px solid #f0f0f0', alignItems: 'center' }}>
                    <div style={{ width: 52, height: 52, borderRadius: 8, background: '#f5f0e8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0, overflow: 'hidden' }}>
                      {item.image?.url ? <img src={item.image.url} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : '🍽'}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{item.name}</div>
                      <div style={{ color: '#D47C2F', fontWeight: 600, fontSize: '0.85rem' }}>{formatPrice(item.price)}</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 6 }}>
                        <button onClick={() => updateQty(item._id, item.qty - 1)}
                          style={{ width: 28, height: 28, borderRadius: '50%', border: '2px solid #D47C2F', background: 'white', cursor: 'pointer', fontWeight: 900, fontSize: '1.1rem', color: '#D47C2F', display: 'flex', alignItems: 'center', justifyContent: 'center', lineHeight: 1 }}>−</button>
                        <span style={{ fontWeight: 700, minWidth: 20, textAlign: 'center', color: '#000', fontSize: '0.95rem' }}>{item.qty}</span>
                        <button onClick={() => updateQty(item._id, item.qty + 1)}
                          style={{ width: 28, height: 28, borderRadius: '50%', border: '2px solid #D47C2F', background: '#D47C2F', cursor: 'pointer', fontWeight: 900, fontSize: '1.1rem', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', lineHeight: 1 }}>+</button>
                      </div>
                    </div>
                    <button onClick={() => updateQty(item._id, 0)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#ccc', fontSize: '1rem' }}>🗑</button>
                  </div>
                ))
              )}
            </div>
            {cart.length > 0 && (
              <div style={{ padding: '1.25rem 1.5rem', borderTop: '1px solid #eee' }}>
                {checkoutStep === 'cart' && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <span style={{ color: '#888' }}>Total</span>
                    <span style={{ fontWeight: 800, fontSize: '1.2rem' }}>{formatPrice(cartTotal)}</span>
                  </div>
                )}
                <button className="tf-button style3" onClick={handleCheckout} disabled={orderLoading} style={{ width: '100%', textAlign: 'center', opacity: orderLoading ? 0.6 : 1 }}>
                  {orderLoading ? 'Processing...' : checkoutStep === 'address' ? `Pay ${formatPrice(cartTotal)}` : 'Proceed to Checkout'}
                </button>
              </div>
            )}
          </div>
        </>
      )}

      <div className="preloader">
        <div className="clear-loading loading-effect-2"><span /></div>
      </div>

      <div id="wrapper">
        <div className="top-bar-2">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="top-header">
                  <div className="contact-left">
                    <div className="icon"><i className="fa fa-utensils" /></div>
                    <div className="t"><p>Basilicofood123@gmail.com</p><p>+(406) 555-0120</p></div>
                  </div>
                  <div className="header__logo">
                    <a href="/"><img src="assets/images/logo/logo-02.png" alt="logo" /></a>
                  </div>
                  <div className="contact-right">
                    <div className="icon"><i className="fa-solid fa-location-dot" /></div>
                    <div className="t"><p>4517 Washington Ave. Manchester,</p><p>Kentucky 39495, USA</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <header id="header_main" className="header style-2">
          <div className="container">
            <div id="site-header-inner" className="site-header-inner">
              <div className="search-form">
                <div className="input-box">
                  <input type="text" placeholder="Search menu..." value={search} onChange={e => setSearch(e.target.value)} />
                  <span className="search"><i className="fa fa-search" /></span>
                  {search && <i className="fa fa-x close-icon" onClick={() => setSearch('')} style={{ cursor: 'pointer' }} />}
                </div>
              </div>
              <nav id="main-nav" className="main-nav">
                <ul id="menu-primary-menu" className="menu">
                  <li className="menu-item"><a href="/">Home</a></li>
                  <li className="menu-item current-menu-item"><a href="/Menu">Menu</a></li>
                  <li className="menu-item"><a href="/Contact">Contact</a></li>
                </ul>
              </nav>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <button onClick={() => setCartOpen(true)} style={{ background: '#D47C2F', color: 'white', border: 'none', borderRadius: 50, padding: '8px 18px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.9rem' }}>
                  🛒 Cart {cartCount > 0 && <span style={{ background: '#c0392b', color: 'white', borderRadius: '50%', width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700 }}>{cartCount}</span>}
                </button>
                {user ? (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontWeight: 600, fontSize: '0.9rem', color: '#3B1F0A' }}>{user.name.split(' ')[0]}</span>
                    <button onClick={handleLogout} style={{ background: 'none', border: '1px solid #ddd', borderRadius: 50, padding: '6px 14px', cursor: 'pointer', fontSize: '0.8rem', color: '#3B1F0A' }}>Sign Out</button>
                  </div>
                ) : (
                  <button onClick={() => setAuthOpen(true)} style={{ background: 'none', border: '2px solid #3B1F0A', borderRadius: 50, padding: '7px 18px', fontWeight: 700, cursor: 'pointer', fontSize: '0.85rem', color: '#3B1F0A' }}>Sign In</button>
                )}
              </div>
              <div className="mobile-button"><span /></div>
            </div>
          </div>
        </header>

        <section className="page-title">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="page-title-main">
                  <h2 className="title">Menu List</h2>
                  <ul className="breacrumd">
                    <li><a href="/">Home</a></li>
                    <li>/</li>
                    <li>Menu List</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="s-menu-list">
          <div className="container">
            <div className="row">
              <div className="menu-content">
                <div className="block-text center style-2">
                  <p className="subtitle">Taste the Best that Surprise you</p>
                  <h3 className="title">Our Special Menu</h3>
                  <p className="text">Enjoy unique dishes crafted fresh daily. Filter by category or search for your favourite.</p>
                </div>

                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center', margin: '2rem 0 1.5rem' }}>
                  {CATEGORIES.map(c => (
                    <button key={c} onClick={() => setCategory(c)}
                      style={{ padding: '7px 20px', borderRadius: 50, border: '1.5px solid', borderColor: category === c ? '#D47C2F' : '#ddd', background: category === c ? '#D47C2F' : 'white', color: category === c ? 'white' : '#666', fontWeight: 600, cursor: 'pointer', fontSize: '0.85rem', textTransform: 'capitalize' }}>
                      {c}
                    </button>
                  ))}
                </div>

                {loading ? (
                  <div style={{ textAlign: 'center', padding: '3rem', color: '#888' }}>
                    <div style={{ width: 40, height: 40, border: '3px solid #eee', borderTopColor: '#D47C2F', borderRadius: '50%', animation: 'spin 0.8s linear infinite', margin: '0 auto' }} />
                    <p style={{ marginTop: 16 }}>Loading menu...</p>
                  </div>
                ) : foods.length === 0 ? (
                  <div style={{ textAlign: 'center', padding: '3rem', color: '#888' }}>
                    <p>No dishes found{search ? ` for "${search}"` : ''}. Try a different search or category.</p>
                  </div>
                ) : (
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {foods.map(food => (
                      <li key={food._id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0', borderBottom: '1px solid #f0f0f0', gap: 16, flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', gap: 16, alignItems: 'center', flex: 1 }}>
                          {food.image?.url && (
                            <img src={food.image.url} alt={food.name} style={{ width: 64, height: 64, borderRadius: 8, objectFit: 'cover', flexShrink: 0 }} />
                          )}
                          <div>
                            <h5 className="name" style={{ margin: 0, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                              <span className="txt">{food.name}</span>
                              <span className="price">{formatPrice(food.price)}</span>
                              <span style={{ fontSize: '0.75rem', padding: '2px 10px', borderRadius: 50, background: food.isAvailable ? '#d4edda' : '#f8d7da', color: food.isAvailable ? '#155724' : '#721c24', fontWeight: 700 }}>
                                {food.isAvailable ? 'Available' : 'Out of Stock'}
                              </span>
                            </h5>
                            <p style={{ margin: '4px 0 0', color: '#888', fontSize: '0.9rem' }}>{food.description}</p>
                            {food.averageRating > 0 && (
                              <p style={{ margin: '4px 0 0', fontSize: '0.8rem', color: '#F4A716' }}>
                                {'★'.repeat(Math.round(food.averageRating))} {food.averageRating}/5 ({food.totalRatings} reviews)
                              </p>
                            )}
                          </div>
                        </div>
                        <button onClick={() => addToCart(food)} disabled={!food.isAvailable} className="tf-button style3"
                          style={{ opacity: food.isAvailable ? 1 : 0.4, cursor: food.isAvailable ? 'pointer' : 'not-allowed', whiteSpace: 'nowrap', padding: '8px 20px', fontSize: '0.85rem' }}>
                          {food.isAvailable ? '+ Add to Cart' : 'Out of Stock'}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="location s2">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="block-text center">
                  <p className="subtitle">your special moment</p>
                  <h3 className="title">Book a Table</h3>
                  <p className="text">Reserve your table online and enjoy an unforgettable dining experience!</p>
                </div>
              </div>
              <div className="col-12">
                <div className="location-main">
                  <div className="image left"><img src="assets/images/section/img-ellipse1.jpg" alt="reservation" /></div>
                  <div className="content">
                    <form onSubmit={handleReservation}>
                      <div className="form-group">
                        <input type="date" className="form-control" value={resDate} onChange={e => setResDate(e.target.value)} min={new Date().toISOString().split('T')[0]} required />
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: 4, color: '#555' }}>Preferred Time</label>
                          <input type="time" className="form-control" value={resTime} onChange={e => setResTime(e.target.value)} required style={{ color: '#000', background: '#fff' }} />
                        </div>
                        <div className="form-group col-md-6">
                          <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: 4, color: '#555' }}>Number of Guests</label>
                          <select className="form-control" value={resGuests} onChange={e => setResGuests(e.target.value)} style={{ color: '#000', background: '#fff' }}>
                            {[1,2,3,4,5,6,7,8,9,10].map(n => (
                              <option key={n} value={n}>{n} Guest{n > 1 ? 's' : ''}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <button type="submit" className="tf-button style3" disabled={resLoading} style={{ opacity: resLoading ? 0.6 : 1 }}>
                        {resLoading ? 'Booking...' : 'Book Your Table'}
                      </button>
                    </form>
                  </div>
                  <div className="image right"><img src="assets/images/section/img-ellipse2.jpg" alt="reservation" /></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer style-2">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="widget locations">
                  <h5>We Are Here</h5>
                  <ul>
                    <li><p><span>Location:</span> 4517 Washington Ave. Manchester, Kentucky 39495, USA</p></li>
                    <li><p><span>Book A Table:</span> Basilicofood123@gmail.com</p><p className="cl">978-212-8600</p></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="widget logo">
                  <img src="assets/images/logo/logofooter.png" alt="footer-logo" />
                  <p>Our buzzy food-hall style concept is inspired by international dining styles.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="widget time pd-n">
                  <h5>Opening Time</h5>
                  <ul>
                    <li>Mon - Fri : 9:00am - 22:00pm</li>
                    <li>Sat: 10:00am - 23:00pm</li>
                    <li>Sun: 5:00pm - 23:00pm</li>
                    <li>Holidays: Closed</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row bottom-footer">
              <div className="bottom-main">
                <p>© Copyright Food Bite Restaurant</p>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/Menu">Menu</a></li>
                  <li><a href="/Contact">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <a id="scroll-top" />
    </div>
  );
}

export default Menu;