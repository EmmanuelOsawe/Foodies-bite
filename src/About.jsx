import './App.css'

function About() {

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
                <a href="about.html#">Home</a>
                <ul className="sub-menu">
                  <li className="menu-item"><a href="index.html">Home 01</a></li>
                  <li className="menu-item "><a href="home_02.html">Home 02</a></li>
                  <li className="menu-item"><a href="home_03.html">Home 03</a></li>
                  <li className="menu-item"><a href="home_04.html">Home 04</a></li>
                </ul>
              </li>
              <li className="menu-item menu-item-has-children current-menu-item">
                <a href="about.html#">Pages</a>
                <ul className="sub-menu">
                  <li className="menu-item"><a href="404.html">Page 404</a></li>
                  <li className="menu-item current-item"><a href="about.html">About</a></li>
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
              <li className="menu-item menu-item-has-children">
                <a href="about.html#">Menu</a>
                <ul className="sub-menu">
                  <li className="menu-item"><a href="menu_list.html">Menu List</a></li>
                  <li className="menu-item"><a href="menu_zigzag.html">Menu Zingzag</a></li>
                </ul>
              </li>
              <li className="menu-item menu-item-has-children">
                <a href="about.html#">Portfolio</a>
                <ul className="sub-menu">
                  <li className="menu-item"><a href="colums_full_width.html">Portfolio Full Width</a></li>
                  <li className="menu-item"><a href="portfolio_carousel.html">Portfolio Carousel</a></li>
                  <li className="menu-item"><a href="portfolio_mansonry.html">Portfolio Mansonry</a></li>
                  <li className="menu-item"><a href="portfolio_three_colum.html">Portfolio Three Colum</a>
                  </li>
                  <li className="menu-item"><a href="portfolio_detail.html">Portfolio Details</a></li>
                </ul>
              </li>
              <li className="menu-item menu-item-has-children">
                <a href="about.html#">Blog</a>
                <ul className="sub-menu">
                  <li className="menu-item"><a href="blog_creative.html">Blog Creative</a></li>
                  <li className="menu-item"><a href="blog_full_width.html">Blog Full Width</a></li>
                  <li className="menu-item"><a href="blog_list.html">Blog List</a></li>
                  <li className="menu-item"><a href="blog_right_sidebar.html">Blog Right Sidebar</a></li>
                  <li className="menu-item"><a href="blog_single.html">Blog Detail</a></li>
                </ul>
              </li>
              <li className="menu-item menu-item-has-children">
                <a href="about.html#">Contact</a>
                <ul className="sub-menu">
                  <li className="menu-item"><a href="contact_01.html">Contact 01</a></li>
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
                <li><a href="about.html#"><i className="fa-brands fa-facebook-f" /></a></li>
                <li><a href="about.html#"><i className="fa-brands fa-twitter" /></a></li>
                <li><a href="about.html#"><i className="fa-solid fa-envelope" /></a></li>
                <li><a href="about.html#"><i className="fa-brands fa-instagram" /></a></li>
              </ul>
            </div>
          </div>
          <div className="mobile-button"><span /></div>{/* /.mobile-button */}
        </div>
      </div>
    </header>
    <section className="page-title">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="page-title-main">
              <h2 className="title">about us</h2>
              <ul className="breacrumd">
                <li><a href="index.html">home </a></li>
                <li>/</li>
                <li>about us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="chef-restaurant">
      <img className="item-right" src="assets/images/section/menu10.png" alt data-aos-duration={1000} data-aos="fade-left" />
      <img className="item-left" src="assets/images/section/menu11.png" alt data-aos-duration={1000} data-aos="fade-right" />
      <div className="container">
        <div className="row">
          <div className="col-12">
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
                  design, and it infuses many drinks. In fact, all our delicious fresh ingredients are
                  sustainably picked from our Jemima’s Kitchen Garden. Our flourishing range of
                  cocktails, spirits, beers and wines are all made with integrity and offer something
                  for every guest.</p>
                <a href="menu_list.html" className="tf-button style3">
                  book a table
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
      </div>
    </section>
    <secsion className="chef-img">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
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
        </div>
      </div>
    </secsion>
    <section className="s-services">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="services-box" data-aos-duration={1000} data-aos="fade-up">
              <div className="icon">
                <img src="assets/images/icon/services-01.png" alt />
              </div>
              <div className="content">
                <a href="about.html#" className="title h5">food is always fresh </a>
                <p>The food we choose is always fresh and carefully checked before processing, Mauris et
                  justo eros. </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="services-box" data-aos-duration={1000} data-aos="fade-up" data-aos-delay={100}>
              <div className="icon">
                <img src="assets/images/icon/services-02.png" alt />
              </div>
              <div className="content">
                <a href="about.html#" className="title h5">Luxury space &amp; music </a>
                <p>What's better than enjoying delicious food and music at the same time, Mauris et
                  justo eros. Quisque consequat.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="services-box" data-aos-duration={1000} data-aos="fade-up" data-aos-delay={200}>
              <div className="icon">
                <img src="assets/images/icon/services-03.png" alt />
              </div>
              <div className="content">
                <a href="about.html#" className="title h5">Diverse food menu </a>
                <p>The food at the restaurant is delicious and varied, Suspendisse dapibus velit sit
                  amet tortor aliquet accumsan. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
                <span className="count-number" data-to={5} data-speed={2000} data-inviewport="yes">05</span>
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
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="event-main">
              <div className="event-img">
                <img src="assets/images/section/event4.jpg" alt />
              </div>
              <div className="event-content">
                <div className="block-text center style-2">
                  <p className="subtitle" data-aos-duration={1000} data-aos="fade-up">private event</p>
                  <h3 className="title" data-aos-duration={1000} data-aos="fade-up">perfect place <br /> for private events </h3>
                  <div className="flat-tabs" data-aos-duration={1000} data-aos="fade-up">
                    <ul className="menu-tab">
                      <li className="active">
                        <h5>your private event</h5>
                      </li>
                      <li>
                        <h5>wedding</h5>
                      </li>
                      <li>
                        <h5>birthday</h5>
                      </li>
                    </ul>
                    <div className="content-tab">
                      <div className="content-inner">
                        <div className="container_inner">
                          <p>Whether you're hosting a corporate event, cocktail party,
                            luncheon, dinner, meeting, shower, wedding reception, bat/bar
                            mitzvah or rehearsal dinner, we know we can offer you and your
                            guests a truly memorable event. We have a variety of private
                            event spaces that can accommodate up to 180 guests.
                          </p>
                          <a href="about.html#" className="tf-button style1">Get started for your event </a>
                        </div>
                      </div>
                      <div className="content-inner">
                        <div className="container_inner">
                          <p>Whether you're hosting a corporate event, cocktail party,
                            luncheon, dinner, meeting, shower, wedding reception, bat/bar
                            mitzvah or rehearsal dinner, we know we can offer you and your
                            guests a truly memorable event. We have a variety of private
                            event spaces that can accommodate up to 180 guests.
                          </p>
                          <a href="about.html#" className="tf-button style1">Get started for your event </a>
                        </div>
                      </div>
                      <div className="content-inner">
                        <div className="container_inner">
                          <p>Whether you're hosting a corporate event, cocktail party,
                            luncheon, dinner, meeting, shower, wedding reception, bat/bar
                            mitzvah or rehearsal dinner, we know we can offer you and your
                            guests a truly memorable event. We have a variety of private
                            event spaces that can accommodate up to 180 guests.
                          </p>
                          <a href="about.html#" className="tf-button style1">Get started for your event </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                <a href="about.html#" className="tf-button style3">meet all chef</a>
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
    <section className="testimonials">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="swiper testimonialSwiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonials-content">
                    <img src="assets/images/icon/quote.png" alt />
                    <h4>Good restaurant, delicious food, classy atmosphere
                    </h4>
                    <p>Please thank your team for their professional, efficient and friendly service
                      on Sat night. The chefs smashed it <br /> and the drinks flowed freely!
                      Everyone was impressed and were quite taken with how cost effective it was
                      to <br /> have Ochre do what you did.</p>
                    <ul className="rating">
                      <li><i className="fa fa-star" /></li>
                      <li><i className="fa fa-star" /></li>
                      <li><i className="fa fa-star" /></li>
                      <li><i className="fa fa-star" /></li>
                      <li><i className="fa fa-star" /></li>
                    </ul>
                    <h5>Margaret - Food critic</h5>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonials-content">
                    <img src="assets/images/icon/quote.png" alt />
                    <h4>Good restaurant, delicious food, classy atmosphere
                    </h4>
                    <p>Please thank your team for their professional, efficient and friendly service
                      on Sat night. The chefs smashed it <br /> and the drinks flowed freely!
                      Everyone was impressed and were quite taken with how cost effective it was
                      to <br /> have Ochre do what you did.</p>
                    <ul className="rating">
                      <li><i className="fa fa-star" /></li>
                      <li><i className="fa fa-star" /></li>
                      <li><i className="fa fa-star" /></li>
                      <li><i className="fa fa-star" /></li>
                      <li><i className="fa fa-star" /></li>
                    </ul>
                    <h5>Margaret - Food critic</h5>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonials-content">
                    <img src="assets/images/icon/quote.png" alt />
                    <h4>Good restaurant, delicious food, classy atmosphere
                    </h4>
                    <p>Please thank your team for their professional, efficient and friendly service
                      on Sat night. The chefs smashed it <br /> and the drinks flowed freely!
                      Everyone was impressed and were quite taken with how cost effective it was
                      to <br /> have Ochre do what you did.</p>
                    <ul className="rating">
                      <li><i className="fa fa-star" /></li>
                      <li><i className="fa fa-star" /></li>
                      <li><i className="fa fa-star" /></li>
                      <li><i className="fa fa-star" /></li>
                      <li><i className="fa fa-star" /></li>
                    </ul>
                    <h5>Margaret - Food critic</h5>
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
                    <a href="about.html#" className="ig"><i className="fa-brands fa-instagram" /></a>
                  </div>
                </div>
              </div>
              <div className="col-img">
                <div className="top">
                  <div className="ig-box">
                    <img src="assets/images/section/ig-2.jpg" alt />
                    <div className="content">
                      <a href="about.html#" className="ig"><i className="fa-brands fa-instagram" /></a>
                    </div>
                  </div>
                  <div className="ig-box">
                    <img src="https://themesflat.co/html/restaurant/basilicohtml/assets/images/section/ig-3.jpg" alt />
                    <div className="content">
                      <a href="about.html#" className="ig"><i className="fa-brands fa-instagram" /></a>
                    </div>
                  </div>
                </div>
                <div className="bottom">
                  <div className="ig-box">
                    <img src="assets/images/section/ig-4.jpg" alt />
                    <div className="content">
                      <a href="about.html#" className="ig"><i className="fa-brands fa-instagram" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-img">
                <div className="ig-box">
                  <img src="assets/images/section/ig-5.jpg" alt />
                  <div className="content">
                    <a href="about.html#" className="ig"><i className="fa-brands fa-instagram" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="center mt-50">
              <a href="about.html#" className="tf-button style3">view all gallery &amp; video</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section className="partner">
      <div className="container">
        <div className="col-12">
          <div className="swiper partner-type-6">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <a className="logo-partner" href="about.html#">
                  <img src="assets/images/partner/partner-01.png" alt />
                </a>
              </div>
              <div className="swiper-slide">
                <a className="logo-partner" href="about.html#">
                  <img src="assets/images/partner/partner-02.png" alt />
                </a>
              </div>
              <div className="swiper-slide">
                <a className="logo-partner" href="about.html#">
                  <img src="assets/images/partner/partner-03.png" alt />
                </a>
              </div>
              <div className="swiper-slide">
                <a className="logo-partner" href="about.html#">
                  <img src="assets/images/partner/partner-04.png" alt />
                </a>
              </div>
              <div className="swiper-slide">
                <a className="logo-partner" href="about.html#">
                  <img src="assets/images/partner/partner-05.png" alt />
                </a>
              </div>
              <div className="swiper-slide">
                <a className="logo-partner" href="about.html#">
                  <img src="assets/images/partner/partner-06.png" alt />
                </a>
              </div>
              <div className="swiper-slide">
                <a className="logo-partner" href="about.html#">
                  <img src="assets/images/partner/partner-01.png" alt />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
                <div className="form-group">
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
                <li><a href="about.html#"><i className="fa-brands fa-facebook-f" /></a></li>
                <li><a href="about.html#"><i className="fa-brands fa-twitter" /></a></li>
                <li><a href="about.html#"><i className="fa-solid fa-envelope" /></a></li>
                <li><a href="about.html#"><i className="fa-brands fa-instagram" /></a></li>
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

export default About
