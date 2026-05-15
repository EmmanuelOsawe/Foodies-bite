import "./App.css";

function Contact() {
  return (
    <div id="wrapper">

      {/* TOP BAR */}
      <div className="top-bar-2">
        <div className="container">
          <div className="row">
            <div className="col-12">

              <div className="top-header">

                <div className="contact-left">
                  <div className="icon">
                    <i className="fa fa-utensils"></i>
                  </div>

                  <div className="t">
                    <p>Basilicofood123@gmail.com</p>
                    <p>+(406) 555-0120</p>
                  </div>
                </div>

                <div className="header__logo">
                  <img
                    src="/assets/images/logo/logo-02.png"
                    alt="logo"
                  />
                </div>

                <div className="contact-right">
                  <div className="icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>

                  <div className="t">
                    <p>4517 Washington Ave. Manchester</p>
                    <p>Kentucky 39495, USA</p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header id="header_main" className="header style-2">
        <div className="container">
          <div id="site-header-inner" className="site-header-inner">

            <nav id="main-nav" className="main-nav">
              <ul id="menu-primary-menu" className="menu">

                <li className="menu-item">
                  <a href="/">Home</a>
                </li>

                <li className="menu-item current-menu-item">
                  <a href="/contact">Contact</a>
                </li>

              </ul>
            </nav>

          </div>
        </div>
      </header>

      {/* PAGE TITLE */}
      <section className="page-title p-contact">
        <div className="container">
          <div className="row">
            <div className="col-12">

              <div className="page-title-main">
                <h2 className="title">Contact Us</h2>

                <ul className="breacrumd">
                  <li>
                    <a href="/">Home</a>
                  </li>

                  <li>/</li>

                  <li>Contact Us</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="s-contact">
        <div className="container">
          <div className="row">

            <div className="col-12">

              <div className="contact-main">

                {/* MAP */}
                <div className="top-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus"
                    width="100%"
                    height="533"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="map"
                  ></iframe>
                </div>

                {/* CONTACT INFO */}
                <div className="contact-info">

                  <div className="item">
                    <div className="icon">
                      <i className="fa fa-phone-volume"></i>
                    </div>

                    <h5>Contact Us</h5>

                    <p>+(406) 555-0120</p>
                    <p>Basilicofood123@gmail.com</p>
                  </div>

                  <div className="item">
                    <div className="icon">
                      <i className="fa fa-map"></i>
                    </div>

                    <h5>Address Here</h5>

                    <p>4517 Washington Ave. Manchester</p>
                    <p>Kentucky 39495, USA</p>
                  </div>

                  <div className="item">
                    <div className="icon">
                      <i className="fa fa-clock"></i>
                    </div>

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

      {/* LOCATION SECTION */}
      <section className="location">
        <div className="container">

          <div className="row">

            <div className="col-12">

              <div className="block-text center">

                <h3 className="title">
                  Just Drop A Line!
                </h3>

                <p className="text">
                  Give us a call or drop by anytime.
                  We will be happy to answer your questions.
                </p>

              </div>

            </div>

            <div className="col-12">

              <div className="location-main">

                {/* LEFT IMAGE */}
                <div className="image left">
                  <img
                    src="/assets/images/section/contact-01.jpg"
                    alt="contact"
                  />
                </div>

                {/* FORM */}
                <div className="content">

                  <form className="s2">

                    <div className="form-group">

                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name*"
                      />

                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone*"
                      />

                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email*"
                      />

                      <textarea
                        cols="30"
                        rows="10"
                        placeholder="Message"
                      ></textarea>

                    </div>

                    <div className="send-wrap">
                      <button
                        type="submit"
                        className="tf-button style3"
                      >
                        Send Message
                      </button>
                    </div>

                  </form>

                </div>

                {/* RIGHT IMAGE */}
                <div className="image right">
                  <img
                    src="/assets/images/section/contact-02.jpg"
                    alt="contact"
                  />
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer style-2">

        <div className="container">

          <div className="row">

            <div className="col-md-4">

              <div className="widget locations">

                <h5>We Are Here</h5>

                <ul>

                  <li>
                    <p>
                      <span>Location:</span>
                      4517 Washington Ave. Manchester,
                      Kentucky 39495, USA
                    </p>
                  </li>

                  <li>
                    <p>
                      <span>Book A Table:</span>
                      Basilicofood123@gmail.com
                    </p>

                    <p className="cl">
                      978-212-8600
                    </p>
                  </li>

                </ul>

              </div>

            </div>

            <div className="col-md-4">

              <div className="widget logo">

                <img
                  src="/assets/images/logo/logofooter.png"
                  alt="footer-logo"
                />

                <p>
                  Our buzzy food-hall style concept is inspired
                  by international dining styles.
                </p>

              </div>

            </div>

            <div className="col-md-4">

              <div className="widget time pd-n">

                <h5>Opening Time</h5>

                <ul>
                  <li>Mon - Fri : 9:00am - 22:00pm</li>
                  <li>Sat: 10:00am - 23:00pm</li>
                  <li>Sun: 5:00pm - 23:00pm</li>
                </ul>

              </div>

            </div>

          </div>

        </div>

      </footer>

    </div>
  );
}

export default Contact;