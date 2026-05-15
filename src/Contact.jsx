import './App.css'

function Contact() {

    return (

<div>
<div>
  {/* preloade */}
  <div className="preloader">
    <div className="clear-loading loading-effect-2">
      <span />
    </div>
  </div>
{/* /preload */}
<div id="wrapper">
  <div className="top-bar-2">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="top-header">
            <div className="contact-left">
              <div className="icon"><i className="fa fa-utensils" /></div>
              <div className="t">
                <p>Basilicofood123@gmail.com </p>
                <p>+(406) 555-0120</p>
              </div>
            </div>
            <div className="header__logo">
              <a href="index.html"><img src="assets/images/logo/logo-02.png" alt /></a>
            </div>
            <div className="contact-right">
              <div className="icon"><i className="fa-solid fa-location-dot" /></div>
              <div className="t">
                <p>4517 Washington Ave. Manchester,
                </p>
                <p>Kentucky 39495, USA</p>
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
            <li className="menu-item menu-item-has-children  ">
              <a href="contact_01.html#">Home</a>
              <ul className="sub-menu">
                <li className="menu-item"><a href="index.html">Home 01</a></li>
                <li className="menu-item "><a href="home_02.html">Home 02</a></li>
                <li className="menu-item"><a href="home_03.html">Home 03</a></li>
                <li className="menu-item"><a href="home_04.html">Home 04</a></li>
              </ul>
            </li>
            <li className="menu-item menu-item-has-children ">
              <a href="contact_01.html#">Pages</a>
              <ul className="sub-menu">
                <li className="menu-item"><a href="404.html">Page 404</a></li>
                <li className="menu-item"><a href="about.html">About</a></li>
                <li className="menu-item"><a href="careers.html">Careers</a></li>
                <li className="menu-item"><a href="coming_soon.html">Coming Soon</a></li>
                <li className="menu-item"><a href="faq.html">Faqs</a></li>
                <li className="menu-item"><a href="gallery.html">Gallery</a></li>
                <li className="menu-item"><a href="history.html">History</a></li>
                <li className="menu-item"><a href="location.html">Location</a></li>
                <li className="menu-item"><a href="gift_vouchers.html">Gift Vouchers</a></li>
                <li className="menu-item"><a href="gift_vouchers_detail.html">Gift Detail</a></li>
              </ul>
            </li>
            <li className="menu-item menu-item-has-children ">
              <a href="contact_01.html#">Menu</a>
              <ul className="sub-menu">
                <li className="menu-item "><a href="menu_list.html">Menu List</a></li>
                <li className="menu-item"><a href="menu_zigzag.html">Menu Zingzag</a></li>
              </ul>
            </li>
            <li className="menu-item menu-item-has-children ">
              <a href="contact_01.html#">Portfolio</a>
              <ul className="sub-menu">
                <li className="menu-item"><a href="colums_full_width.html">Portfolio Full Width</a></li>
                <li className="menu-item "><a href="portfolio_carousel.html">Portfolio Carousel</a></li>
                <li className="menu-item"><a href="portfolio_mansonry.html">Portfolio Mansonry</a></li>
                <li className="menu-item"><a href="portfolio_three_colum.html">Portfolio Three Colum</a>
                </li>
                <li className="menu-item"><a href="portfolio_detail.html">Portfolio Details</a></li>
              </ul>
            </li>
            <li className="menu-item menu-item-has-children ">
              <a href="contact_01.html#">Blog</a>
              <ul className="sub-menu">
                <li className="menu-item "><a href="blog_creative.html">Blog Creative</a></li>
                <li className="menu-item"><a href="blog_full_width.html">Blog Full Width</a></li>
                <li className="menu-item"><a href="blog_list.html">Blog List</a></li>
                <li className="menu-item"><a href="blog_right_sidebar.html">Blog Right Sidebar</a></li>
                <li className="menu-item"><a href="blog_single.html">Blog Detail</a></li>
              </ul>
            </li>
            <li className="menu-item menu-item-has-children current-menu-item">
              <a href="contact_01.html#">Contact</a>
              <ul className="sub-menu">
                <li className="menu-item current-item"><a href="contact_01.html">Contact 01</a></li>
                <li className="menu-item"><a href="contact_02.html">Contact 02</a></li>
              </ul>
            </li>
          </ul>
        </nav>{/* /#main-nav */}
        <div className="sidebar-btn">
          <a className="btn-side">
            <span />
          </a>
          <div className="sidebar-content">
            <img className="mb-50" src="assets/images/logo/logo-sidebar.png" alt />
            <p className="mb-46">
              Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
              dis parturient montes, nascetur ridiculus mus.
            </p>
            <h4 className="mb-11">+(406) 555-0120</h4>
            <p className="mb-5p">Andé Restaurant 767 5th Avenue, Paris 10021, France</p>
            <p className="mb-30">Brochetterestaurant@gmail.com</p>
            <div className="line" />
            <p>Opening Hour: <br />
              Mon - Fri : 9.00am - 22.00pm, Holidays : Close</p>
            <div className="line" />
            <ul className="list-social">
              <li><a href="contact_01.html#"><i className="fa-brands fa-facebook-f" /></a></li>
              <li><a href="contact_01.html#"><i className="fa-brands fa-twitter" /></a></li>
              <li><a href="contact_01.html#"><i className="fa-solid fa-envelope" /></a></li>
              <li><a href="contact_01.html#"><i className="fa-brands fa-instagram" /></a></li>
            </ul>
          </div>
        </div>
        <div className="mobile-button"><span /></div>{/* /.mobile-button */}
      </div>
    </div>
  </header>
  <section className="page-title p-contact">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="page-title-main">
            <h2 className="title">contact us 1</h2>
            <ul className="breacrumd">
              <li><a href="index.html">home </a></li>
              <li>/</li>
              <li>contact us</li>
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
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus" width="100%" height="533px" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
            <div className="contact-info">
              <div className="item" data-aos-duration={1000} data-aos="fade-up">
                <div className="icon"><i className="fa fa-phone-volume" /></div>
                <h5>Contact Us</h5>
                <p>+(406) 555-0120</p>
                <p>Basilicofood123@gmail.com</p>
              </div>
              <div className="item" data-aos-duration={1000} data-aos="fade-up" data-aos-delay={100}>
                <div className="icon"><i className="fa fa-map" /></div>
                <h5>Address here</h5>
                <p>4517 Washington Ave. Manchester, </p>
                <p>Kentucky 39495, USA</p>
              </div>
              <div className="item" data-aos-duration={1000} data-aos="fade-up" data-aos-delay={200}>
                <div className="icon"><i className="fa fa-phone-volume" /></div>
                <h5>open time</h5>
                <p>Mon - Fri : 9.00am - 22.00pm </p>
                <p>Saturday : 11.00 - 23.00 Sunday : close</p>
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
            <h3 className="title" data-aos-duration={1000} data-aos="fade-up">just drop a line!</h3>
            <p className="text" data-aos-duration={1000} data-aos="fade-up">Give us a call or drop by anytime, we endeavour to answer all enquiries
              within 24 hours on business <br /> days. We will be happy to answer your questions.
            </p>
          </div>
        </div>
        <div className="col-12">
          <div className="location-main">
            <div className="image left" data-aos-duration={1000} data-aos="zoom-in-right">
              <img src="assets/images/section/contact-01.jpg" alt />
            </div>
            <div className="content">
              <form id="contactform" method="post" action="https://themesflat.co/html/restaurant/basilicohtml/contact/contact-process.php" className="s2">
                <div className="form-group">
                  <input data-aos-duration={1000} data-aos="fade-up" type="text" className="form-control" id="name" name="name" placeholder="Name*" />
                  <input data-aos-duration={1000} data-aos="fade-up" type="text" className="form-control" id="phone" name="phone" placeholder="Phone*" />
                  <input data-aos-duration={1000} data-aos="fade-up" type="email" className="form-control" id="mail" name="mail" placeholder="Email*" />
                  <textarea data-aos-duration={1000} data-aos="fade-up" name="message" id="message" cols={30} rows={10} placeholder="Message" defaultValue={""} />
                </div>
                <div className="send-wrap">
                  <button type="submit" className="tf-button style3" data-aos-duration={1000} data-aos="fade-up">send message</button>
                </div>
              </form>
            </div>
            <div className="image right" data-aos-duration={1000} data-aos="zoom-in-left">
              <img src="assets/images/section/contact-02.jpg" alt />
            </div>
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
            <h5>we are here</h5>
            <ul>
              <li>
                <p>
                  <span>Location:</span> 4517 Washington Ave. Manchester, Kentucky 39495, USA
                </p>
              </li>
              <li>
                <p>
                  <span>book a table:
                  </span>
                  Basilicofood123@gmail.com
                </p>
                <p className="cl">978-212-8600</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <div className="widget logo">
            <img src="assets/images/logo/logofooter.png" alt />
            <p>Our buzzy food-hall style concept is inspired by international dining styles, especially
              in Asia. Explore the following fast-action food stations as busy chefs perform.
            </p>
            <ul className="list-social">
              <li><a href="contact_01.html#"><i className="fa-brands fa-facebook-f" /></a></li>
              <li><a href="contact_01.html#"><i className="fa-brands fa-twitter" /></a></li>
              <li><a href="contact_01.html#"><i className="fa-solid fa-envelope" /></a></li>
              <li><a href="contact_01.html#"><i className="fa-brands fa-instagram" /></a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <div className="widget time  pd-n">
            <h5>opening time</h5>
            <ul>
              <li>Mon - Fri : 9:00am - 22:00pm</li>
              <li>Sat: 10:00am - 23:00pm</li>
              <li>Sun: 5:00pm - 23:00pm</li>
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
            <li><a href="blog_right_sidebar.html">Blog</a></li>
            <li><a href="contact_01.html">CONTACT US</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</div>
  <a id="scroll-top" />
</div>


</div>

        

     )        
}

export default Contact
