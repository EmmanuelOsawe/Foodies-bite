import { useState, useEffect } from 'react';
import './App.css';
import {
  getRestaurantReviews,
  submitRestaurantReview,
  getStoredUser,
  isLoggedIn,
} from './api';

function Contact() {
  const [reviews, setReviews] = useState([]);
  const [avgRating, setAvgRating] = useState(0);
  const [reviewForm, setReviewForm] = useState({ rating: 5, title: '', comment: '' });
  const [reviewLoading, setReviewLoading] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [contactSent, setContactSent] = useState(false);
  const [toast, setToast] = useState(null);
  const user = getStoredUser();

  const showToast = (msg, type = 'success') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3500);
  };

  const fetchReviews = async () => {
    try {
      const data = await getRestaurantReviews();
      setReviews(data.reviews || []);
      setAvgRating(data.averageRating || 0);
    } catch (err) {
      console.error('Failed to load reviews:', err.message);
    }
  };

  useEffect(() => {
    let mounted = true;

    const load = async () => {
      try {
        const data = await getRestaurantReviews();
        if (mounted) {
          setReviews(data.reviews || []);
          setAvgRating(data.averageRating || 0);
        }
      } catch (err) {
        console.error('Failed to load reviews:', err.message);
      }
    };

    load();
    return () => { mounted = false; };
  }, []); // runs once on mount — no dependencies needed

  const handleContact = (e) => {
    e.preventDefault();
    setContactSent(true);
    showToast('Message sent! We will get back to you shortly.');
    setContactForm({ name: '', phone: '', email: '', message: '' });
  };

  const handleReview = async (e) => {
    e.preventDefault();
    if (!isLoggedIn()) { showToast('Please sign in to leave a review', 'error'); return; }
    setReviewLoading(true);
    try {
      await submitRestaurantReview({ ...reviewForm, rating: Number(reviewForm.rating) });
      showToast('Review submitted! Thank you.');
      setReviewForm({ rating: 5, title: '', comment: '' });
      fetchReviews();
    } catch (err) {
      showToast(err.message, 'error');
    }
    setReviewLoading(false);
  };

  const stars = (n) => '★'.repeat(Math.round(n)) + '☆'.repeat(5 - Math.round(n));
  const formatDate = (d) => new Date(d).toLocaleDateString('en-NG', { day: 'numeric', month: 'short', year: 'numeric' });

  return (
    <div id="wrapper">
      {toast && (
        <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 9999, background: toast.type === 'error' ? '#c0392b' : '#2d6a4f', color: 'white', padding: '14px 20px', borderRadius: '8px', fontWeight: 600, fontSize: '0.9rem', boxShadow: '0 8px 24px rgba(0,0,0,0.2)' }}>
          {toast.type === 'error' ? '⚠ ' : '✓ '}{toast.msg}
        </div>
      )}

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
                  <img src="/assets/images/logo/logo-02.png" alt="logo" />
                </div>
                <div className="contact-right">
                  <div className="icon"><i className="fa-solid fa-location-dot" /></div>
                  <div className="t"><p>4517 Washington Ave. Manchester</p><p>Kentucky 39495, USA</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header id="header_main" className="header style-2">
        <div className="container">
          <div id="site-header-inner" className="site-header-inner">
            <nav id="main-nav" className="main-nav">
              <ul id="menu-primary-menu" className="menu">
                <li className="menu-item"><a href="/">Home</a></li>
                <li className="menu-item"><a href="/Menu">Menu</a></li>
                <li className="menu-item current-menu-item"><a href="/contact">Contact</a></li>
              </ul>
            </nav>
            {user && (
              <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#D47C2F' }}>
                👋 {user.name.split(' ')[0]}
              </span>
            )}
          </div>
        </div>
      </header>

      <section className="page-title p-contact">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="page-title-main">
                <h2 className="title">Contact Us</h2>
                <ul className="breacrumd">
                  <li><a href="/">Home</a></li>
                  <li>/</li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="s-contact">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="contact-main">
                <div className="top-map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus"
                    width="100%" height="533" style={{ border: 0 }} allowFullScreen loading="lazy" title="map" />
                </div>
                <div className="contact-info">
                  <div className="item">
                    <div className="icon"><i className="fa fa-phone-volume" /></div>
                    <h5>Contact Us</h5>
                    <p>+(406) 555-0120</p>
                    <p>Basilicofood123@gmail.com</p>
                  </div>
                  <div className="item">
                    <div className="icon"><i className="fa fa-map" /></div>
                    <h5>Address</h5>
                    <p>4517 Washington Ave. Manchester</p>
                    <p>Kentucky 39495, USA</p>
                  </div>
                  <div className="item">
                    <div className="icon"><i className="fa fa-clock" /></div>
                    <h5>Open Time</h5>
                    <p>Mon - Fri : 9.00am - 22.00pm</p>
                    <p>Saturday : 11.00 - 23.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="location">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="block-text center">
                <h3 className="title">Just Drop A Line!</h3>
                <p className="text">Give us a call or drop by anytime. We will be happy to answer your questions.</p>
              </div>
            </div>
            <div className="col-12">
              <div className="location-main">
                <div className="image left">
                  <img src="/assets/images/section/contact-01.jpg" alt="contact" />
                </div>
                <div className="content">
                  {contactSent ? (
                    <div style={{ textAlign: 'center', padding: '2rem' }}>
                      <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                      <h4>Message Sent!</h4>
                      <p style={{ color: '#888' }}>We will get back to you as soon as possible.</p>
                      <button className="tf-button style3" style={{ marginTop: '1rem' }} onClick={() => setContactSent(false)}>Send Another</button>
                    </div>
                  ) : (
                    <form className="s2" onSubmit={handleContact}>
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Name*" value={contactForm.name} onChange={e => setContactForm(p => ({ ...p, name: e.target.value }))} required />
                        <input type="text" className="form-control" placeholder="Phone*" value={contactForm.phone} onChange={e => setContactForm(p => ({ ...p, phone: e.target.value }))} required />
                        <input type="email" className="form-control" placeholder="Email*" value={contactForm.email} onChange={e => setContactForm(p => ({ ...p, email: e.target.value }))} required />
                        <textarea cols="30" rows="10" placeholder="Message" value={contactForm.message} onChange={e => setContactForm(p => ({ ...p, message: e.target.value }))} />
                      </div>
                      <div className="send-wrap">
                        <button type="submit" className="tf-button style3">Send Message</button>
                      </div>
                    </form>
                  )}
                </div>
                <div className="image right">
                  <img src="/assets/images/section/contact-02.jpg" alt="contact" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 0', background: '#fdf6ec' }}>
        <div className="container">
          <div className="block-text center" style={{ marginBottom: '3rem' }}>
            <p className="subtitle">What Our Guests Say</p>
            <h3 className="title">Customer Reviews</h3>
            {avgRating > 0 && (
              <p style={{ color: '#D47C2F', fontWeight: 700, fontSize: '1.1rem' }}>
                ⭐ {avgRating}/5 average from {reviews.length} review{reviews.length !== 1 ? 's' : ''}
              </p>
            )}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {reviews.length === 0 ? (
              <p style={{ color: '#888', gridColumn: '1/-1', textAlign: 'center' }}>No reviews yet. Be the first!</p>
            ) : reviews.map(r => (
              <div key={r._id} style={{ background: 'white', borderRadius: 16, padding: '1.5rem', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: '0.75rem' }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#FFF0D6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#D47C2F', flexShrink: 0 }}>
                    {r.customer?.name?.charAt(0).toUpperCase() || 'U'}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{r.customer?.name || 'Anonymous'}</div>
                    <div style={{ color: '#888', fontSize: '0.8rem' }}>{formatDate(r.createdAt)}</div>
                  </div>
                  <div style={{ marginLeft: 'auto', color: '#F4A716' }}>{stars(r.rating)}</div>
                </div>
                {r.title && <div style={{ fontWeight: 700, marginBottom: 4 }}>{r.title}</div>}
                <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>{r.comment}</p>
                {r.reply?.message && (
                  <div style={{ background: '#FDF6EC', borderRadius: 8, padding: '10px 14px', marginTop: 12, borderLeft: '3px solid #D47C2F', fontSize: '0.85rem' }}>
                    <strong>🍽 Restaurant replied:</strong> {r.reply.message}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div style={{ maxWidth: 600, margin: '0 auto', background: 'white', borderRadius: 20, padding: '2rem', boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}>
            <h4 style={{ marginBottom: '1.25rem', fontWeight: 800 }}>
              {isLoggedIn() ? 'Share Your Experience' : 'Sign In to Leave a Review'}
            </h4>
            {!isLoggedIn() ? (
              <p style={{ color: '#888' }}>
                <a href="/Menu" style={{ color: '#D47C2F', fontWeight: 600 }}>Sign in from the Menu page</a> to leave a review.
              </p>
            ) : (
              <form onSubmit={handleReview}>
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: 6, fontSize: '0.85rem' }}>Rating</label>
                  <select className="form-control" value={reviewForm.rating} onChange={e => setReviewForm(p => ({ ...p, rating: Number(e.target.value) }))}>
                    {[5, 4, 3, 2, 1].map(n => <option key={n} value={n}>{n} ★ — {['', 'Poor', 'Fair', 'Good', 'Great', 'Excellent'][n]}</option>)}
                  </select>
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: 6, fontSize: '0.85rem' }}>Title (optional)</label>
                  <input className="form-control" value={reviewForm.title} onChange={e => setReviewForm(p => ({ ...p, title: e.target.value }))} placeholder="Summarize your experience" />
                </div>
                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: 6, fontSize: '0.85rem' }}>Your Review</label>
                  <textarea className="form-control" rows={4} value={reviewForm.comment} onChange={e => setReviewForm(p => ({ ...p, comment: e.target.value }))} placeholder="Tell us about your visit..." required style={{ resize: 'vertical' }} />
                </div>
                <button type="submit" className="tf-button style3" disabled={reviewLoading} style={{ opacity: reviewLoading ? 0.6 : 1 }}>
                  {reviewLoading ? 'Submitting...' : 'Submit Review ✓'}
                </button>
              </form>
            )}
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
                <img src="/assets/images/logo/logofooter.png" alt="footer-logo" />
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
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Contact;