import { useState } from 'react';
import './App.css';
import { makeReservation, loginUser, registerUser, saveAuth, clearAuth, getStoredUser, isLoggedIn } from './api';
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
function Home() {
  const [user, setUser] = useState(getStoredUser());
  const [authOpen, setAuthOpen] = useState(false);
  const [authTab, setAuthTab] = useState('login');
  const [authForm, setAuthForm] = useState({ name: '', email: '', password: '' });
  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState('');

  // Reservation state
  const [resForm, setResForm] = useState({ name: '', phone: '', time: '', guests: '2', date: '' });
  const [resLoading, setResLoading] = useState(false);
  const [resSuccess, setResSuccess] = useState(false);
  const [resError, setResError] = useState('');

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
    } catch (err) { setAuthError(err.message); }
    setAuthLoading(false);
  };

  const handleLogout = () => { clearAuth(); setUser(null); };

  const handleReservation = async (e) => {
    e.preventDefault();
    setResError(''); setResLoading(true);
    if (!isLoggedIn()) {
      setResError('Please sign in first to book a table.');
      setResLoading(false);
      setAuthOpen(true);
      return;
    }
    try {
      await makeReservation({
        date: resForm.date,
        time: resForm.time,
        guests: Number(resForm.guests),
        phone: resForm.phone || null,   // pass form phone for SMS
        name: resForm.name,             // pass form name for notification
      });
      setResSuccess(true);
      setResForm({ name: '', phone: '', time: '', guests: '2', date: '' });
    } catch (err) { setResError(err.message); }
    setResLoading(false);
  };

  const inputStyle = {
    color: '#000',
    background: '#ffffff',
    border: '2px solid #999',
    borderRadius: 6,
    padding: '10px 14px',
    width: '100%',
    fontSize: '0.9rem',
    fontFamily: 'inherit',
    outline: 'none',
    boxSizing: 'border-box',
    WebkitTextFillColor: '#000',
    opacity: 1,
  };
  const labelStyle = { display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: 4, color: '#fff' };

    return (
      <>
            <div>
                {/* preloader */}
                <div className="preloader">
                    <div className="clear-loading loading-effect-2">
                        <span />
                    </div>
                </div>
                <div>
                    <div id="wrapper">
                    </div>
                    <div className="top-bar-2">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="top-header">
                                        <div className="contact-left">
                                            <div className="icon"><i className="fa fa-utensils" /></div>
                                            <div className="t">
                                                <p>Foodies-bites123@gmail.com </p>
                                                <p>+234 803 456 7890</p>
                                            </div>
                                        </div>
                                        <div className="header__logo">
                                            <a href="index.html"><img src="assets/images/logo/logobgrm" alt /></a>
                                        </div>
                                        <div className="contact-right">
                                            <div className="icon"><i className="fa-solid fa-location-dot" /></div>
                                            <div className="t">
                                                <p>Behind Berith Square, 1st Avenue, Gwarinpa
                                                </p>
                                                <p>Abuja, Nigeria</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end Top bar */}
                    {/* Header */}
                    <header id="header_main" className="header style-2">
                        <div className="container">
                            <div id="site-header-inner" className="site-header-inner">
                                <div className="search-form">
                                    <div className="input-box">
                                        <input type="text" placeholder="Search..." />
                                        <span className="search">
                                            <i className="fa fa-search" />
                                        </span>
                                        <i className="fa fa-x close-icon" />
                                    </div>
                                </div>
                                <nav id="main-nav" className="main-nav">
                                    <ul id="menu-primary-menu" className="menu">
                                        <li className="menu-item menu-item-has-children  current-menu-item">
                                            <a href="home_02.html#">Home</a>
                                        </li>
                                        <li className="menu-item menu-item-has-children">
                                            <a href="home_02.html#">Pages</a>
                                            <ul className="sub-menu">
                                                <li className="menu-item"><a href="/About">About</a></li>
                                                <li className="menu-item"><a href="/Faqs">Faqs</a></li>
                                                <li className="menu-item"><a href="/admin/">Admin</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item menu-item-has-children">
                                            <a href="/Menu">Menu</a>
                                        </li>
                                        <li className="menu-item menu-item-has-children">
                                            <a href="/Contact">Contact</a>
                                        </li>
                                    </ul>
                                </nav>{/* /#main-nav */}
                                {/* Auth buttons */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                  {user ? (
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                      <span style={{ fontWeight: 600, fontSize: '0.9rem', color: '#3B1F0A' }}>
                                        👋 {user.name.split(' ')[0]}
                                      </span>
                                      <button onClick={handleLogout}
                                        style={{ background: 'none', border: '1.5px solid #D47C2F', color: '#D47C2F', borderRadius: 50, padding: '6px 16px', fontWeight: 600, cursor: 'pointer', fontSize: '0.85rem' }}>
                                        Sign Out
                                      </button>
                                    </div>
                                  ) : (
                                    <button onClick={() => setAuthOpen(true)}
                                      style={{ background: '#D47C2F', color: 'white', border: 'none', borderRadius: 50, padding: '8px 20px', fontWeight: 700, cursor: 'pointer', fontSize: '0.9rem' }}>
                                      Sign In
                                    </button>
                                  )}
                                </div>
                                <div className="mobile-button"><span /></div>
                            </div>
                        </div>
                    </header>
                    {/* end Header */}

<Swiper
  modules={[Autoplay, Pagination, EffectFade]}
  effect="fade"
  loop={true}
  speed={1000}
  autoplay={{
    delay: 4000,
    disableOnInteraction: false,
  }}
  pagination={{
    clickable: true,
  }}
  className="mySwiper"
>
  <SwiperSlide>
    <div className="overlay">
      <img
        src="assets/images/slider/img_slider_2.jpg"
        alt="Foodies Bite"
      />
    </div>

    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="box-slider">
            <div className="content-box center style-2">
              <h2 className="title">
                Authentic Nigerian <br />
                Flavours Await
              </h2>

              <p className="sub-title">
                Enjoy freshly prepared Jollof Rice, Suya,
                Pounded Yam, Egusi Soup and more from
                the comfort of your home.
              </p>

              <div className="wrap-btn center st2">
                <a href="/menu" className="tf-button style2">
                  Discover Menu
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SwiperSlide>

  <SwiperSlide>
    <div className="overlay">
      <img
        src="assets/images/slider/img_slider_22.jpg"
        alt="Foodies Bite"
      />
    </div>

    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="box-slider">
            <div className="content-box center style-2">
              <h2 className="title">
                Taste Nigeria <br />
                One Plate At A Time
              </h2>

              <p className="sub-title">
                Bringing families and friends together
                through delicious Nigerian cuisine made
                with fresh ingredients and rich traditions.
              </p>

              <div className="wrap-btn center st2">
                <a href="/menu" className="tf-button style2">
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SwiperSlide>
</Swiper>
<section className="opening">
                        <div className="img"><img src="assets/images/section/opening.png" alt /></div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 col-md-12">
                                    <div className="opening-content">
                                        <div className="block-text">
                                            <h3 className="title" data-aos-duration={1000} data-aos="fade-up">Opening time Hours</h3>
                                            <ul>
                                                <li data-aos-duration={1000} data-aos="fade-up"><span>Monday - Friday :</span> 7:00 am - 22:00 pm</li>
                                                <li data-aos-duration={1000} data-aos="fade-up"><span>Saturday:</span> 8:00 am - 23:00 pm</li>
                                                <li data-aos-duration={1000} data-aos="fade-up"><span>Sunday:</span> 6:30 pm - 23:00 pm</li>
                                                <li data-aos-duration={1000} data-aos="fade-up"><span>Holidays:</span> Closed</li>
                                            </ul>
                                            <div className="d-flex">
                                                <ul>
                                                    <h5 data-aos-duration={1000} data-aos="fade-up">Breakfast</h5>
                                                    <li data-aos-duration={1000} data-aos="fade-up"><span>Monday - Friday :</span> 7:00 am - 11:30 am</li>
                                                    <li data-aos-duration={1000} data-aos="fade-up"><span>Saturday:</span> 8:00 am - 11:30 am</li>
                                                    <li data-aos-duration={1000} data-aos="fade-up"><span>Sunday:</span> 6:30 am - 11:30 am</li>
                                                    <li data-aos-duration={1000} data-aos="fade-up"><span>Holidays:</span> Closed</li>
                                                </ul>
                                                <ul>
                                                    <h5 data-aos-duration={1000} data-aos="fade-up">Lunch and Dinner</h5>
                                                    <li data-aos-duration={1000} data-aos="fade-up"><span>Monday - Friday :</span> 11:30 am - 22:00 pm</li>
                                                    <li data-aos-duration={1000} data-aos="fade-up"><span>Saturday:</span> 10:30 am - 23:00 pm</li>
                                                    <li data-aos-duration={1000} data-aos="fade-up"><span>Sunday:</span> 10:00 am - 23:00 am</li>
                                                    <li data-aos-duration={1000} data-aos="fade-up"><span>Holidays:</span> Closed</li>
                                                </ul>
                                            </div>
                                            <p data-aos-duration={1000} data-aos="fade-up">“ On holidays is a special day, we will open and with special offer,
                                                we will announce ”</p>
                                        </div>
                                    </div>
                                </div>
<div className="col-lg-5 col-md-12">
  <div className="opening-book">
    {resSuccess ? (
      <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
        <h4 style={{ color: '#2D6A4F', marginBottom: '0.5rem' }}>Table Booked!</h4>
        <p style={{ color: '#555', marginBottom: '1.25rem' }}>We will contact you shortly to confirm your reservation.</p>
        <button className="tf-button style3" onClick={() => setResSuccess(false)}>Book Another Table</button>
      </div>
    ) : (
      <form onSubmit={handleReservation}>
        <h4 className="heading">book a table</h4>
        <p>After booking we will call you to confirm. Please sign in first.</p>

        {resError && (
          <div style={{ background: '#FFF3F3', border: '1px solid #FFCDD2', color: '#c0392b', padding: '10px 14px', borderRadius: 8, fontSize: '0.85rem', marginBottom: '1rem' }}>
            ⚠ {resError}
            {resError.includes('sign in') && (
              <button type="button" onClick={() => setAuthOpen(true)}
                style={{ background: 'none', border: 'none', color: '#D47C2F', fontWeight: 700, cursor: 'pointer', textDecoration: 'underline', marginLeft: 6 }}>
                Sign In Now
              </button>
            )}
          </div>
        )}

        <div className="form-group">
          <label style={labelStyle}>Your Name *</label>
          <input type="text" className="form-control" placeholder="e.g. John Doe"
            value={resForm.name} onChange={e => setResForm(p => ({ ...p, name: e.target.value }))}
            style={inputStyle} required />
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label style={labelStyle}>Phone Number *</label>
            <input type="text" className="form-control" placeholder="e.g. +234 801 234 5678"
              value={resForm.phone} onChange={e => setResForm(p => ({ ...p, phone: e.target.value }))}
              style={inputStyle} required />
          </div>
          <div className="form-group col-md-6">
            <label style={labelStyle}>🕐 Preferred Arrival Time *</label>
            <input type="text" className="form-control" placeholder="e.g. 7:30 PM or 19:30"
              value={resForm.time} onChange={e => setResForm(p => ({ ...p, time: e.target.value }))}
              style={inputStyle} required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label style={labelStyle}>👥 Number of Guests *</label>
            <select className="form-control" value={resForm.guests}
              onChange={e => setResForm(p => ({ ...p, guests: e.target.value }))}
              style={inputStyle}>
              {[1,2,3,4,5,6,7,8,9,10].map(n => (
                <option key={n} value={n}>{n} Guest{n > 1 ? 's' : ''}</option>
              ))}
            </select>
          </div>
          <div className="form-group col-md-6">
            <label style={labelStyle}>📅 Date *</label>
            <input type="date" className="form-control"
              value={resForm.date} onChange={e => setResForm(p => ({ ...p, date: e.target.value }))}
              min={new Date().toISOString().split('T')[0]}
              style={inputStyle} required />
          </div>
        </div>

        {!isLoggedIn() && (
          <p style={{ fontSize: '0.82rem', color: '#c0392b', marginBottom: '0.75rem' }}>
            ⚠ You must{' '}
            <button type="button" onClick={() => setAuthOpen(true)}
              style={{ background: 'none', border: 'none', color: '#D47C2F', fontWeight: 700, cursor: 'pointer', textDecoration: 'underline', fontSize: '0.82rem' }}>
              sign in
            </button>{' '}
            to complete this booking.
          </p>
        )}

        <button type="submit" className="tf-button style3" disabled={resLoading}
          style={{ opacity: resLoading ? 0.6 : 1 }}>
          {resLoading ? 'Booking...' : 'Book a Table'}
        </button>
      </form>
    )}
  </div>
</div>                            </div>
                        </div>
                    </section>
                    <section className="chef-restaurant">
                        <img className="item-right" src="assets/images/section/menu10.png" alt data-aos-duration={1000} data-aos="fade-left" />
                        <img className="item-left" src="assets/images/section/menu11.png" alt data-aos-duration={1000} data-aos="fade-right" />
                        <div className="container">
                            <div className="row">
                                <div className="menu-content">
                                    <div className="block-text center">
                                        <p className="subtitle" data-aos-duration={1000} data-aos="fade-up">About Restaurant</p>
                                        <h3 className="title" data-aos-duration={1000} data-aos="fade-up">Enjoy An Exceptional <br />
                                            Journey of Taste</h3>
                                        <p className="text" data-aos-duration={1000} data-aos="fade-up">Our buzzy food-hall style concept is inspired by international dining
                                            styles, especially in Asia. Explore the following fast-action food stations as busy
                                            chefs perform.
                                        </p>
                                        <p data-aos-duration={1000} data-aos="fade-up">Enjoy a verdant Garden to Glass experience. It’s in the view, it’s reflected in the
                                            design, and it infuses many drinks. In fact, all our deli-cious fresh ingredients are
                                            sustainably picked from our Jemima’s Kitchen Garden. Our flourishing range of cocktails,
                                            spirits, beers and wines are all made with integrity and offer something for every
                                            guest.</p>
                                        <a href="about.html" className="tf-button style3">
                                            read more about us
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid">
                            <div className="list-img">
                                <div className="swiper imagesSwiper">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <img src="assets/images/section/res02.jpg" alt />
                                        </div>
                                        <div className="swiper-slide">
                                            <img src="assets/images/section/res03.jpg" alt />
                                        </div>
                                        <div className="swiper-slide">
                                            <img src="assets/images/section/res01.jpg" alt />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="s-menu s1">
                        <div className="container">
                            <div className="row">
                                <div className="menu-content">
                                    <div className="flat-tabs" data-aos-duration={1000} data-aos="fade-up">
                                        <ul className="menu-tab" data-aos-duration={1000} data-aos="fade-right">
                                            <p className="heading">special menu</p>
                                            <li className="active">
                                                <h5>main menu</h5>
                                            </li>
                                            <li>
                                                <h5>drinks</h5>
                                            </li>
                                            <li>
                                                <h5>seafood</h5>
                                            </li>
                                            <li>
                                                <h5>dessers</h5>
                                            </li>
                                            <li>
                                                <h5>salad</h5>
                                            </li>
                                            <a href="menu_list.html" className="tf-button style1">view all menu</a>
                                        </ul>
                                        <div className="content-tab">
                                            <div className="content-inner">
                                                <div className="container_inner">
                                                    <ul className="menu-list">
                                                        <li data-aos-duration={1000} data-aos="fade-up">
                                                            <h5 className="name"> <span className="txt">Tender Octopus and
                                                                Fennel</span><span className="price">$25</span></h5>
                                                            <p>Citrus, wild rocket condiment.</p>
                                                        </li>
                                                        <li data-aos-duration={1000} data-aos="fade-up">
                                                            <h5 className="name"><span className="txt">Purple Corn Tostada</span><span className="price">$36</span></h5>
                                                            <p>Ricotta, goat cheese, beetroot and datterini.</p>
                                                        </li>
                                                        <li data-aos-duration={1000} data-aos="fade-up">
                                                            <h5 className="name"><span className="txt">Bruno's Scribble</span><span className="price">$59</span></h5>
                                                            <p>Culatello, Spalla Cotta, Mortadella, Culacciona.</p>
                                                        </li>
                                                        <li data-aos-duration={1000} data-aos="fade-up">
                                                            <h5 className="name"><span className="txt">Wild Mushroom Arancini</span><span className="price">$18</span></h5>
                                                            <p>Porcini purée, parmesan, basil.</p>
                                                        </li>
                                                        <li data-aos-duration={1000} data-aos="fade-up">
                                                            <h5 className="name"><span className="txt">Crispy Skin Chicken </span><span className="price">$25</span></h5>
                                                            <p>Ricotta, radicchio, prosciutto salad, cabernet.</p>
                                                        </li>
                                                        <li data-aos-duration={1000} data-aos="fade-up">
                                                            <h5 className="name"><span className="txt">Tender Octopus and Fennel</span><span className="price">$25</span></h5>
                                                            <p>Citrus, wild rocket condiment.</p>
                                                        </li>
                                                    </ul>
                                                    <div className="right-img" data-aos-duration={1000} data-aos="fade-left">
                                                        <img src="assets/images/section/menu1.jpg" alt />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="content-inner">
                                                <div className="container_inner">
                                                    <ul className="menu-list">
                                                        <li>
                                                            <h5 className="name"> <span className="txt">Tender Octopus and
                                                                Fennel</span><span className="price">$25</span></h5>
                                                            <p>Citrus, wild rocket condiment.</p>
                                                        </li>
                                                        <li>
                                                            <h5 className="name"><span className="txt">Purple Corn Tostada</span><span className="price">$36</span></h5>
                                                            <p>Ricotta, goat cheese, beetroot and datterini.</p>
                                                        </li>
                                                        <li>
                                                            <h5 className="name"><span className="txt">Bruno's Scribble</span><span className="price">$59</span></h5>
                                                            <p>Culatello, Spalla Cotta, Mortadella, Culacciona.</p>
                                                        </li>
                                                        <li>
                                                            <h5 className="name"><span className="txt">Wild Mushroom Arancini</span><span className="price">$18</span></h5>
                                                            <p>Porcini purée, parmesan, basil.</p>
                                                        </li>
                                                        <li>
                                                            <h5 className="name"><span className="txt">Crispy Skin Chicken </span><span className="price">$25</span></h5>
                                                            <p>Ricotta, radicchio, prosciutto salad, cabernet.</p>
                                                        </li>
                                                        <li>
                                                            <h5 className="name"><span className="txt">Tender Octopus and Fennel</span><span className="price">$25</span></h5>
                                                            <p>Citrus, wild rocket condiment.</p>
                                                        </li>
                                                    </ul>
                                                    <div className="right-img">
                                                        <img src="assets/images/section/menu2.jpg" alt />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="content-inner">
                                                <div className="container_inner">
                                                    <ul className="menu-list">
                                                        <li>
                                                            <h5 className="name"> <span className="txt">Tender Octopus and
                                                                Fennel</span><span className="price">$25</span></h5>
                                                            <p>Citrus, wild rocket condiment.</p>
                                                        </li>
                                                        <li>
                                                            <h5 className="name"><span className="txt">Purple Corn Tostada</span><span className="price">$36</span></h5>
                                                            <p>Ricotta, goat cheese, beetroot and datterini.</p>
                                                        </li>
                                                        <li>
                                                            <h5 className="name"><span className="txt">Bruno's Scribble</span><span className="price">$59</span></h5>
                                                            <p>Culatello, Spalla Cotta, Mortadella, Culacciona.</p>
                                                        </li>
                                                        <li>
                                                            <h5 className="name"><span className="txt">Wild Mushroom Arancini</span><span className="price">$18</span></h5>
                                                            <p>Porcini purée, parmesan, basil.</p>
                                                        </li>
                                                        <li>
                                                            <h5 className="name"><span className="txt">Crispy Skin Chicken </span><span className="price">$25</span></h5>
                                                            <p>Ricotta, radicchio, prosciutto salad, cabernet.</p>
                                                        </li>
                                                        <li>
                                                            <h5 className="name"><span className="txt">Tender Octopus and Fennel</span><span className="price">$25</span></h5>
                                                            <p>Citrus, wild rocket condiment.</p>
                                                        </li>
                                                    </ul>
                                                    <div className="right-img">
                                                        <img src="assets/images/section/menu3.jpg" alt />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="content-inner">
                                                <div className="container_inner">
                                                    <ul className="menu-list">
                                                        <li>
                                                            <h5 className="name"> <span className="txt">Tender Octopus and
                                                                Fennel</span><span className="price">$25</span></h5>
                                                            <p>Citrus, wild rocket condiment.</p>
                                                        </li>
                                                        <li>
                                                            <h5 className="name"><span className="txt">Purple Corn Tostada</span><span className="price">$36</span></h5>
                                                            <p>Ricotta, goat cheese, beetroot and datterini.</p>
                                                        </li>
                                                        <li>
                                                            <h5 className="name"><span className="txt">Bruno's Scribble</span><span className="price">$59</span></h5>
                                                            <p>Culatello, Spalla Cotta, Mortadella, Culacciona.</p>
                                                        </li>
                                                        <li>
                                                            <h5 className="name"><span className="txt">Wild Mushroom Arancini</span><span className="price">$18</span></h5>
                                                            <p>Porcini purée, parmesan, basil.</p>
                                                        </li>
                                                        <li>
                                                            <h5 className="name"><span className="txt">Crispy Skin Chicken </span><span className="price">$25</span></h5>
                                                            <p>Ricotta, radicchio, prosciutto salad, cabernet.</p>
                                                        </li>
                                                        <li>
                                                            <h5 className="name"><span className="txt">Tender Octopus and Fennel</span><span className="price">$25</span></h5>
                                                            <p>Citrus, wild rocket condiment.</p>
                                                        </li>
                                                    </ul>
                                                    <div className="right-img">
                                                        <img src="assets/images/section/menu1.jpg" alt />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="content-inner">
                                                <div className="container_inner">
                                                    <ul className="menu-list">
                                                        <li>
                                                            <h5 className="name"> <span className="txt">Tender Octopus and
                                                                Fennel</span><span className="price">$25</span></h5>
                                                            <p>Citrus, wild rocket condiment.</p>
                                                        </li>
                                                        <li>
                                                            <h5 className="name"><span className="txt">Purple Corn Tostada</span><span className="price">$36</span></h5>
                                                            <p>Ricotta, goat cheese, beetroot and datterini.</p>
                                                        </li>
                                                        <li>
                                                            <h5 className="name"><span className="txt">Bruno's Scribble</span><span className="price">$59</span></h5>
                                                            <p>Culatello, Spalla Cotta, Mortadella, Culacciona.</p>
                                                        </li>
                                                        <li>
                                                            <h5 className="name"><span className="txt">Wild Mushroom Arancini</span><span className="price">$18</span></h5>
                                                            <p>Porcini purée, parmesan, basil.</p>
                                                        </li>
                                                        <li>
                                                            <h5 className="name"><span className="txt">Crispy Skin Chicken </span><span className="price">$25</span></h5>
                                                            <p>Ricotta, radicchio, prosciutto salad, cabernet.</p>
                                                        </li>
                                                        <li>
                                                            <h5 className="name"><span className="txt">Tender Octopus and Fennel</span><span className="price">$25</span></h5>
                                                            <p>Citrus, wild rocket condiment.</p>
                                                        </li>
                                                    </ul>
                                                    <div className="right-img">
                                                        <img src="assets/images/section/menu2.jpg" alt />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="content-inner">
                                                <div className="container_inner">
                                                    <ul className="menu-list">
                                                        <li>
                                                            <h5 className="name"> <span className="txt">Tender Octopus and
                                                                Fennel</span><span className="price">$25</span></h5>
                                                            <p>Citrus, wild rocket condiment.</p>
                                                        </li>
                                                        <li>
                                                            <h5 className="name"><span className="txt">Purple Corn Tostada</span><span className="price">$36</span></h5>
                                                            <p>Ricotta, goat cheese, beetroot and datterini.</p>
                                                        </li>
                                                        <li>
                                                            <h5 className="name"><span className="txt">Bruno's Scribble</span><span className="price">$59</span></h5>
                                                            <p>Culatello, Spalla Cotta, Mortadella, Culacciona.</p>
                                                        </li>
                                                        <li>
                                                            <h5 className="name"><span className="txt">Wild Mushroom Arancini</span><span className="price">$18</span></h5>
                                                            <p>Porcini purée, parmesan, basil.</p>
                                                        </li>
                                                        <li>
                                                            <h5 className="name"><span className="txt">Crispy Skin Chicken </span><span className="price">$25</span></h5>
                                                            <p>Ricotta, radicchio, prosciutto salad, cabernet.</p>
                                                        </li>
                                                        <li>
                                                            <h5 className="name"><span className="txt">Tender Octopus and Fennel</span><span className="price">$25</span></h5>
                                                            <p>Citrus, wild rocket condiment.</p>
                                                        </li>
                                                    </ul>
                                                    <div className="right-img">
                                                        <img src="assets/images/section/menu3.jpg" alt />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="s-video">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="video-main">
                                        <a href="https://www.youtube.com/watch?v=eI_LjETc_Ak" className="popup-youtube wrap-video">
                                            <i className="fa fa-play" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="s-chef">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="chef-main">
                                        <div className="chef-box">
                                            <div className="img" data-aos-duration={1000} data-aos="fade-right">
                                                <img src="assets/images/section/chef3.jpg" alt />
                                            </div>
                                            <div className="info">
                                                <h5 data-aos-duration={1000} data-aos="fade-up">RAY SCHOENBAUM</h5>
                                                <p data-aos-duration={1000} data-aos="fade-up">master chef</p>
                                            </div>
                                        </div>
                                        <div className="block-text center style-2">
                                            <img src="assets/images/icon/chef.png" alt data-aos-duration={1000} data-aos="fade-up" />
                                            <p className="subtitle" data-aos-duration={1000} data-aos="fade-up">our chef</p>
                                            <h3 className="title" data-aos-duration={1000} data-aos="fade-up">Our culinary philosophy </h3>
                                            <p className="text" data-aos-duration={1000} data-aos="fade-up">Simple and balanced. Alexander Petillo brings together flavors and
                                                specialties from Italy and beyond to create his own culinary world, full of
                                                surprising artistry. <br />
                                            </p>
                                            <p data-aos-duration={1000} data-aos="fade-up">We see our customers as invited guests to a party, and we are the hosts. It’s our job
                                                every day to make every important aspect of the customer experience a little bit
                                                better.</p>
                                            <a href="home_02.html#" className="tf-button style1">meet all chef</a>
                                        </div>
                                        <div className="chef-box">
                                            <div className="img" data-aos-duration={1000} data-aos="fade-left">
                                                <img src="assets/images/section/chef4.jpg" alt />
                                            </div>
                                            <div className="info">
                                                <h5 data-aos-duration={1000} data-aos="fade-up">ALEX BEBIAK</h5>
                                                <p data-aos-duration={1000} data-aos="fade-up">Assistant chef</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="s-couter">
                        <div className="container">
                            <div className="row">
                                <div className="couter-content">
                                    <div className="couter-box counter">
                                        <div className="number-content">
                                            <span className="count-number" data-to={240} data-speed={2000} data-inviewport="yes">240</span>
                                        </div>
                                        <p className="text">Clients Every Day</p>
                                    </div>
                                    <div className="couter-box counter">
                                        <div className="number-content">
                                            <span className="count-number" data-to={180} data-speed={2000} data-inviewport="yes">180</span>
                                        </div>
                                        <p className="text">Great Moments</p>
                                    </div>
                                    <div className="couter-box counter">
                                        <div className="number-content">
                                            <span className="count-number" data-to={50} data-speed={2000} data-inviewport="yes">50</span>
                                        </div>
                                        <p className="text"> prestigious award </p>
                                    </div>
                                    <div className="couter-box counter">
                                        <div className="number-content">
                                            <span className="count-number" data-to={23} data-speed={2000} data-inviewport="yes">23</span>
                                        </div>
                                        <p className="text">year of operation </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="event">
                        <div className="shape" />
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-5 col-md-12">
                                    <div className="event-image" data-aos-duration={1000} data-aos="fade-right">
                                        <img src="assets/images/section/event.jpg" alt />
                                    </div>
                                </div>
                                <div className="col-xl-7 col-md-12">
                                    <div className="event-content">
                                        <div className="block-text">
                                            <h3 className="title" data-aos-duration={1000} data-aos="fade-up">perfect place <br />
                                                for private events
                                            </h3>
                                            <p data-aos-duration={1000} data-aos="fade-up">Whether you're hosting a corporate event, cocktail party, luncheon, dinner, meeting,
                                                shower, wedding reception, bat/bar mitzvah or rehearsal dinner, we know we can offer
                                                you and your guests a truly memorable event. We have a variety of private event
                                                spaces that can accommodate up to 180 guests.
                                            </p>
                                            <ul className="list">
                                                <li data-aos-duration={1000} data-aos="fade-up">organize a wedding
                                                </li>
                                                <li data-aos-duration={1000} data-aos="fade-up">custom decoration
                                                </li>
                                                <li data-aos-duration={1000} data-aos="fade-up">your special event
                                                </li>
                                                <li data-aos-duration={1000} data-aos="fade-up">Private dining room
                                                </li>
                                            </ul>
                                            <a href="home_02.html#" className="tf-button style3">Get started for your event
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-74">
                                <div className="col-xl-7 col-md-12">
                                    <div className="event-content style-2">
                                        <div className="block-text">
                                            <h3 className="title" data-aos-duration={1000} data-aos="fade-up">Space determines <br />
                                                feelings about food
                                            </h3>
                                            <p data-aos-duration={1000} data-aos="fade-up">For starters, it now lives up to its name… extended to feature a vast triple-height
                                                glass conservatory framing beautiful garden views, it brings the outside in – true
                                                to The Grove’s style.
                                            </p>
                                            <p data-aos-duration={1000} data-aos="fade-up">There’s plenty to delight and surprise. Super-sized bronze and glass kinetic hanging
                                                sculptures are designed to echo your flow as you drift and hover around the live
                                                food stations and enjoy.</p>
                                            <a href="home_02.html#" className="tf-button style3">read more
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-md-12">
                                    <div className="event-image style-2" data-aos-duration={1000} data-aos="fade-left">
                                        <img src="assets/images/section/event1.jpg" alt />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="testimonials">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <div className="testimonials-main">
                                        <div className="testimonials-img">
                                            <img src="assets/images/section/testimonial.jpg" alt />
                                        </div>
                                        <div className="swiper testimonialSwiper">
                                            <div className="swiper-wrapper">
                                                <div className="swiper-slide">
                                                    <div className="testimonials-content">
                                                        <img src="assets/images/icon/quote.png" alt />
                                                        <h4>Good restaurant, delicious food, classy atmosphere
                                                        </h4>
                                                        <p>Please thank your team for their professional, efficient and friendly
                                                            service on Sat night. The chefs smashed it and the drinks flowed freely!
                                                            Everyone was impressed and were quite taken with how cost effective it
                                                            was to have Ochre do what you did.</p>
                                                        <div className="d-flex">
                                                            <h5>Margaret - Food critic</h5>
                                                            <ul className="rating">
                                                                <li><i className="fa fa-star" /></li>
                                                                <li><i className="fa fa-star" /></li>
                                                                <li><i className="fa fa-star" /></li>
                                                                <li><i className="fa fa-star" /></li>
                                                                <li><i className="fa fa-star" /></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div className="testimonials-content">
                                                        <img src="assets/images/icon/quote.png" alt />
                                                        <h4>Good restaurant, delicious food, classy atmosphere
                                                        </h4>
                                                        <p>Please thank your team for their professional, efficient and friendly
                                                            service on Sat night. The chefs smashed it and the drinks flowed freely!
                                                            Everyone was impressed and were quite taken with how cost effective it
                                                            was to have Ochre do what you did.</p>
                                                        <div className="d-flex">
                                                            <h5>Margaret - Food critic</h5>
                                                            <ul className="rating">
                                                                <li><i className="fa fa-star" /></li>
                                                                <li><i className="fa fa-star" /></li>
                                                                <li><i className="fa fa-star" /></li>
                                                                <li><i className="fa fa-star" /></li>
                                                                <li><i className="fa fa-star" /></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div className="testimonials-content">
                                                        <img src="assets/images/icon/quote.png" alt />
                                                        <h4>Good restaurant, delicious food, classy atmosphere
                                                        </h4>
                                                        <p>Please thank your team for their professional, efficient and friendly
                                                            service on Sat night. The chefs smashed it and the drinks flowed freely!
                                                            Everyone was impressed and were quite taken with how cost effective it
                                                            was to have Ochre do what you did.</p>
                                                        <div className="d-flex">
                                                            <h5>Margaret - Food critic</h5>
                                                            <ul className="rating">
                                                                <li><i className="fa fa-star" /></li>
                                                                <li><i className="fa fa-star" /></li>
                                                                <li><i className="fa fa-star" /></li>
                                                                <li><i className="fa fa-star" /></li>
                                                                <li><i className="fa fa-star" /></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-pagination testimonials-pagination" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="vouchers">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="vouchers-main">
                                        <div className="left">
                                            <div className="icon" data-aos-duration={1000} data-aos="fade-right"><img src="assets/images/icon/gift-card.png" alt /></div>
                                            <div className="content">
                                                <h4 data-aos-duration={1000} data-aos="fade-up">Gift vouchers</h4>
                                                <p data-aos-duration={1000} data-aos="fade-up">Offer an unforgettable experience at our restaurant to your dear ones.
                                                    Suspendisse mattis tincidunt ornare.Phasellus at est bibendum ante.
                                                </p>
                                            </div>
                                        </div>
                                        <a href="home_02.html#" className="tf-button style3">buy gift card now </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="s-blog">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="block-text center">
                                        <p className="subtitle" data-aos-duration={1000} data-aos="fade-up">latest new</p>
                                        <h3 className="title" data-aos-duration={1000} data-aos="fade-up">What's new in our blog? </h3>
                                        <p className="text" data-aos-duration={1000} data-aos="fade-up">Read the latest news from our restaurant. Mauris condimentum ultrices arcu
                                            in condimentum. <br />
                                            Sed ante nunc, sodales quis laoreet eget
                                        </p>
                                    </div>
                                    <div className="swiper blogSwiper">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide">
                                                <div className="blog-box">
                                                    <div className="top-content">
                                                        <div className="image">
                                                            <img src="assets/images/section/blog-01.jpg" alt />
                                                        </div>
                                                        <div className="meta">
                                                            <h4>25</h4>
                                                            <p>Jun 23</p>
                                                        </div>
                                                        <a href="blog_single.html" className="h5 title">How to Design a Small
                                                            Restaurant</a>
                                                    </div>
                                                    <div className="bottom-content">
                                                        <ul>
                                                            <li className="author"><a href="home_02.html#">by Jhon Matter</a></li>
                                                            <li className="category"><a href="home_02.html#">Restaurant, Food</a></li>
                                                        </ul>
                                                        <div className="line" />
                                                        <p className="text">Bigger certainly doesn’t mean better when giving your guests
                                                            a memorable dining experience and a tasty meal...</p>
                                                        <a href="blog_single.html" className="btn-read">read more <i className="fa fa-arrow-right" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="blog-box">
                                                    <div className="top-content">
                                                        <div className="image">
                                                            <img src="assets/images/section/blog-02.jpg" alt />
                                                        </div>
                                                        <div className="meta">
                                                            <h4>25</h4>
                                                            <p>Jun 23</p>
                                                        </div>
                                                        <a href="blog_single.html" className="h5 title">How Real Restaurants Approach
                                                            Benefits</a>
                                                    </div>
                                                    <div className="bottom-content">
                                                        <ul>
                                                            <li className="author"><a href="home_02.html#">by Jhon Matter</a></li>
                                                            <li className="category"><a href="home_02.html#">Restaurant, Food</a></li>
                                                        </ul>
                                                        <div className="line" />
                                                        <p className="text">Bigger certainly doesn’t mean better when giving your guests
                                                            a memorable dining experience and a tasty meal...</p>
                                                        <a href="blog_single.html" className="btn-read">read more <i className="fa fa-arrow-right" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="blog-box">
                                                    <div className="top-content">
                                                        <div className="image">
                                                            <img src="assets/images/section/blog-03.jpg" alt />
                                                        </div>
                                                        <div className="meta">
                                                            <h4>25</h4>
                                                            <p>Jun 23</p>
                                                        </div>
                                                        <a href="blog_single.html" className="h5 title">The Impact of The New Steps of
                                                            Service</a>
                                                    </div>
                                                    <div className="bottom-content">
                                                        <ul>
                                                            <li className="author"><a href="home_02.html#">by Jhon Matter</a></li>
                                                            <li className="category"><a href="home_02.html#">Restaurant, Food</a></li>
                                                        </ul>
                                                        <div className="line" />
                                                        <p className="text">Bigger certainly doesn’t mean better when giving your guests
                                                            a memorable dining experience and a tasty meal...</p>
                                                        <a href="blog_single.html" className="btn-read">read more <i className="fa fa-arrow-right" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="blog-box">
                                                    <div className="top-content">
                                                        <div className="image">
                                                            <img src="assets/images/section/blog-01.jpg" alt />
                                                        </div>
                                                        <div className="meta">
                                                            <h4>25</h4>
                                                            <p>Jun 23</p>
                                                        </div>
                                                        <a href="blog_single.html" className="h5 title">How to Design a Small
                                                            Restaurant</a>
                                                    </div>
                                                    <div className="bottom-content">
                                                        <ul>
                                                            <li className="author"><a href="home_02.html#">by Jhon Matter</a></li>
                                                            <li className="category"><a href="home_02.html#">Restaurant, Food</a></li>
                                                        </ul>
                                                        <div className="line" />
                                                        <p className="text">Bigger certainly doesn’t mean better when giving your guests
                                                            a memorable dining experience and a tasty meal...</p>
                                                        <a href="blog_single.html" className="btn-read">read more <i className="fa fa-arrow-right" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="blog-box">
                                                    <div className="top-content">
                                                        <div className="image">
                                                            <img src="assets/images/section/blog-02.jpg" alt />
                                                        </div>
                                                        <div className="meta">
                                                            <h4>25</h4>
                                                            <p>Jun 23</p>
                                                        </div>
                                                        <a href="blog_single.html" className="h5 title">How Real Restaurants Approach
                                                            Benefits</a>
                                                    </div>
                                                    <div className="bottom-content">
                                                        <ul>
                                                            <li className="author"><a href="home_02.html#">by Jhon Matter</a></li>
                                                            <li className="category"><a href="home_02.html#">Restaurant, Food</a></li>
                                                        </ul>
                                                        <div className="line" />
                                                        <p className="text">Bigger certainly doesn’t mean better when giving your guests
                                                            a memorable dining experience and a tasty meal...</p>
                                                        <a href="blog_single.html" className="btn-read">read more <i className="fa fa-arrow-right" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="blog-box">
                                                    <div className="top-content">
                                                        <div className="image">
                                                            <img src="assets/images/section/blog-03.jpg" alt />
                                                        </div>
                                                        <div className="meta">
                                                            <h4>25</h4>
                                                            <p>Jun 23</p>
                                                        </div>
                                                        <a href="blog_single.html" className="h5 title">The Impact of The New Steps of
                                                            Service</a>
                                                    </div>
                                                    <div className="bottom-content">
                                                        <ul>
                                                            <li className="author"><a href="home_02.html#">by Jhon Matter</a></li>
                                                            <li className="category"><a href="home_02.html#">Restaurant, Food</a></li>
                                                        </ul>
                                                        <div className="line" />
                                                        <p className="text">Bigger certainly doesn’t mean better when giving your guests
                                                            a memorable dining experience and a tasty meal...</p>
                                                        <a href="blog_single.html" className="btn-read">read more <i className="fa fa-arrow-right" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="gallery-ig">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="gallery-ig-main">
                                        <div className="col-img">
                                            <div className="ig-box">
                                                <img src="assets/images/section/ig-1.jpg" alt />
                                                <div className="content">
                                                    <a href="home_02.html#" className="ig"><i className="fa-brands fa-instagram" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-img">
                                            <div className="top">
                                                <div className="ig-box">
                                                    <img src="assets/images/section/ig-2.jpg" alt />
                                                    <div className="content">
                                                        <a href="home_02.html#" className="ig"><i className="fa-brands fa-instagram" /></a>
                                                    </div>
                                                </div>
                                                <div className="ig-box">
                                                    <img src="https://themesflat.co/html/restaurant/basilicohtml/assets/images/section/ig-3.jpg" alt />
                                                    <div className="content">
                                                        <a href="home_02.html#" className="ig"><i className="fa-brands fa-instagram" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bottom">
                                                <div className="ig-box">
                                                    <img src="assets/images/section/ig-4.jpg" alt />
                                                    <div className="content">
                                                        <a href="home_02.html#" className="ig"><i className="fa-brands fa-instagram" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-img">
                                            <div className="ig-box">
                                                <img src="assets/images/section/ig-5.jpg" alt />
                                                <div className="content">
                                                    <a href="home_02.html#" className="ig"><i className="fa-brands fa-instagram" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="center mt-50">
                                        <a href="home_02.html#" className="tf-button style3">follow us instafram</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="s-formmail">
                        <div className="container">
                            <div className="row">
                                <div className="formmail-content">
                                    <div className="block-text center style-2">
                                        <p className="subtitle" data-aos-duration={1000} data-aos="fade-up">Choose us your meal to be special</p>
                                        <h3 className="title" data-aos-duration={1000} data-aos="fade-up">Waiting For You Every Day </h3>
                                        <p className="text" data-aos-duration={1000} data-aos="fade-up">If you would like to stay connected and be the first to know about our news,
                                            events, and exclusive offers, please <br />
                                            sign up for our newsletter. You can opt out at any time by clicking unsubscribe on the
                                            newsletter.
                                        </p>
                                        <form className="s1" data-aos-duration={1000} data-aos="fade-up">
                                            <div className="form-group ">
                                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email *" />
                                            </div>
                                            <button type="submit" className="btn btn-primary"><i className="fa fa-paper-plane" /></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <footer className="footer style-2">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-4 col-md-12">
                                    <div className="widget locations">
                                        <h5>we are here</h5>
                                        <ul>
                                            <li>
                                                <p>
                                                    <span>Location:</span> Behind Berith Square, 1st Avenue, Gwarinpa Kentucky 39495, USA
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    <span>book a table:
                                                    </span>
                                                    Foodies-bites123@gmail.com
                                                </p>
                                                <p className="cl">978-212-8600</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-12">
                                    <div className="widget logo">
                                        <img src="assets/images/logo/logofooter.png" alt />
                                        <p>Our buzzy food-hall style concept is inspired by international dining styles, especially
                                            in Asia. Explore the following fast-action food stations as busy chefs perform.
                                        </p>
                                        <ul className="list-social style-2">
                                            <li><a href="home_02.html#"><i className="fa-brands fa-facebook-f" /></a></li>
                                            <li><a href="home_02.html#"><i className="fa-brands fa-twitter" /></a></li>
                                            <li><a href="home_02.html#"><i className="fa-solid fa-envelope" /></a></li>
                                            <li><a href="home_02.html#"><i className="fa-brands fa-instagram" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-12">
                                    <div className="widget time  pd-n">
                                        <h5>opening time</h5>
                                        <ul>
                                            <li>Monday - Friday : 9:00 am - 22:00 pm</li>
                                            <li>Saturday: 10:00am - 23:00pm</li>
                                            <li>Sunday: 5:00pm - 23:00pm</li>
                                            <li>Holidays: Closed</li>
                                            <li>Happy Hours: 18:00pm - 20:00pm</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="row bottom-footer">
                                <div className="bottom-main">
                                    <p>© Copyright Themesflat for Restaurant &amp; Bistro</p>
                                    <ul>
                                        <li><a href="about.html">ABOUT US</a></li>
                                        <li><a href="menu_list.html">MENU</a></li>
                                        <li><a href="blog_right_sidebar.html">RESERVATION</a></li>
                                        <li><a href="contact_01.html">CONTACT US</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </footer>
                    <a id="scroll-top" />
                </div>
            </div>

      {/* ─── AUTH MODAL ─────────────────────────────────────────────────── */}
      {authOpen && (
        <div onClick={e => e.target === e.currentTarget && setAuthOpen(false)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.55)', zIndex: 99999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
          <div style={{ background: 'white', borderRadius: 16, padding: '2rem', width: 'min(420px,95vw)', maxHeight: '90vh', overflowY: 'auto', boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1rem' }}>
                {['login', 'register'].map(t => (
                  <button key={t} onClick={() => { setAuthTab(t); setAuthError(''); }}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.1rem', fontWeight: 700, borderBottom: authTab === t ? '2px solid #D47C2F' : '2px solid transparent', paddingBottom: 4, color: authTab === t ? '#3B1F0A' : '#999', fontFamily: 'inherit' }}>
                    {t === 'login' ? 'Sign In' : 'Sign Up'}
                  </button>
                ))}
              </div>
              <button onClick={() => setAuthOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.3rem', lineHeight: 1 }}>✕</button>
            </div>

            {authError && (
              <div style={{ background: '#FFF3F3', border: '1px solid #FFCDD2', color: '#c0392b', padding: '10px 14px', borderRadius: 8, fontSize: '0.9rem', marginBottom: '1rem' }}>
                ⚠ {authError}
              </div>
            )}

            <form onSubmit={handleAuth}>
              {authTab === 'register' && (
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: 6, fontSize: '0.85rem', color: '#3B1F0A' }}>Full Name</label>
                  <input type="text" value={authForm.name} onChange={e => setAuthForm(p => ({ ...p, name: e.target.value }))} placeholder="John Doe" required
                    style={{ width: '100%', padding: '10px 14px', border: '1.5px solid #bbb', borderRadius: 8, fontSize: '0.95rem', color: '#000', background: '#fff', outline: 'none', fontFamily: 'inherit' }} />
                </div>
              )}
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: 6, fontSize: '0.85rem', color: '#3B1F0A' }}>Email Address</label>
                <input type="email" value={authForm.email} onChange={e => setAuthForm(p => ({ ...p, email: e.target.value }))} placeholder="john@example.com" required
                  style={{ width: '100%', padding: '10px 14px', border: '1.5px solid #bbb', borderRadius: 8, fontSize: '0.95rem', color: '#000', background: '#fff', outline: 'none', fontFamily: 'inherit' }} />
              </div>
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: 6, fontSize: '0.85rem', color: '#3B1F0A' }}>Password</label>
                <input type="password" value={authForm.password} onChange={e => setAuthForm(p => ({ ...p, password: e.target.value }))} placeholder="••••••••" required
                  style={{ width: '100%', padding: '10px 14px', border: '1.5px solid #bbb', borderRadius: 8, fontSize: '0.95rem', color: '#000', background: '#fff', outline: 'none', fontFamily: 'inherit' }} />
              </div>
              <button type="submit" className="tf-button style3" disabled={authLoading}
                style={{ width: '100%', textAlign: 'center', opacity: authLoading ? 0.6 : 1 }}>
                {authLoading ? 'Please wait...' : authTab === 'login' ? 'Sign In' : 'Create Account'}
              </button>
            </form>

            <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.85rem', color: '#888' }}>
              {authTab === 'login' ? "Don't have an account?" : 'Already have an account?'}
              <button onClick={() => { setAuthTab(authTab === 'login' ? 'register' : 'login'); setAuthError(''); }}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#D47C2F', fontWeight: 700, marginLeft: 4, fontFamily: 'inherit' }}>
                {authTab === 'login' ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </div>
        </div>
      )}
      </>
     )        
}

export default Home