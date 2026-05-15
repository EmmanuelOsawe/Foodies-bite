import './App.css';

function Home() {

    return (

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
                                        <li className="menu-item menu-item-has-children  current-menu-item">
                                            <a href="home_02.html#">Home</a>
                                            <ul className="sub-menu">
                                                <li className="menu-item"><a href="index.html">Home 01</a></li>
                                                <li className="menu-item current-item"><a href="home_02.html">Home 02</a></li>
                                                <li className="menu-item"><a href="home_03.html">Home 03</a></li>
                                                <li className="menu-item"><a href="home_04.html">Home 04</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item menu-item-has-children">
                                            <a href="home_02.html#">Pages</a>
                                            <ul className="sub-menu">
                                                <li className="menu-item"><a href="404.html">Page 404</a></li>
                                                <li className="menu-item"><a href="/About">About</a></li>
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
                                            <a href="home_02.html#">Menu</a>
                                            <ul className="sub-menu">
                                                <li className="menu-item"><a href="menu_list.html">Menu List</a></li>
                                                <li className="menu-item"><a href="menu_zigzag.html">Menu Zingzag</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item menu-item-has-children">
                                            <a href="home_02.html#">Portfolio</a>
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
                                            <a href="home_02.html#">Blog</a>
                                            <ul className="sub-menu">
                                                <li className="menu-item"><a href="blog_creative.html">Blog Creative</a></li>
                                                <li className="menu-item"><a href="blog_full_width.html">Blog Full Width</a></li>
                                                <li className="menu-item"><a href="blog_list.html">Blog List</a></li>
                                                <li className="menu-item"><a href="blog_right_sidebar.html">Blog Right Sidebar</a></li>
                                                <li className="menu-item"><a href="blog_single.html">Blog Detail</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item menu-item-has-children">
                                            <a href="home_02.html#">Contact</a>
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
                                            <li><a href="home_02.html#"><i className="fa-brands fa-facebook-f" /></a></li>
                                            <li><a href="home_02.html#"><i className="fa-brands fa-twitter" /></a></li>
                                            <li><a href="home_02.html#"><i className="fa-solid fa-envelope" /></a></li>
                                            <li><a href="home_02.html#"><i className="fa-brands fa-instagram" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mobile-button"><span /></div>{/* /.mobile-button */}
                            </div>
                        </div>
                    </header>
                    {/* end Header */}
                    <div className="swiper mySwiper ">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="overlay">
                                    <img src="assets/images/slider/img_slider_2.jpg" alt />
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="box-slider">
                                                <div className="content-box center style-2">
                                                    <h2 className="title">It’s time to enjoy <br /> the finer things in life. </h2>
                                                    <p className="sub-title">Craving some delicious Paris food? Maybe you’re in the mood
                                                        for a juicy steak? No matter what <br /> kind of meal you have in mind.</p>
                                                    <div className="wrap-btn center st2">
                                                        <a href="menu_list.html" className="tf-button style2">
                                                            discovery menu
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="overlay">
                                    <img src="assets/images/slider/img_slider_22.jpg" alt />
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="box-slider">
                                                <div className="content-box center style-2">
                                                    <h2 className="title">Foodies welcome <br /> Taste the difference</h2>
                                                    <p className="sub-title">Craving some delicious Paris food? Maybe you’re in the mood
                                                        for a juicy steak? No matter what <br /> kind of meal you have in mind.</p>
                                                    <div className="wrap-btn center st2">
                                                        <a href="menu_list.html" className="tf-button style2">
                                                            discovery menu
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                                    <div className="opening-book" data-aos-duration={1000} data-aos="fade-left">
                                        <form>
                                            <h4 className="heading">book a table</h4>
                                            <p>After booking we will call the customer to confirm, so please enter your name and
                                                phone number is required, thank you!
                                            </p>
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="inputname4" placeholder="Name*" />
                                            </div>
                                            <div className="form-row">
                                                <div className="form-group col-md-6">
                                                    <input type="text" className="form-control" id="inputPhone" placeholder="Phone*" />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <select id="inputState" className="form-control">
                                                        <option selected>Arrival time
                                                        </option>
                                                        <option selected>Arrival time
                                                        </option>
                                                        <option selected>Arrival time
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-group col-md-6">
                                                    <select id="inputState" className="form-control">
                                                        <option selected>Amount of people
                                                        </option>
                                                        <option selected>Amount of people
                                                        </option>
                                                        <option selected>Amount of people
                                                        </option>
                                                    </select>
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <select id="inputState" className="form-control">
                                                        <option selected>18/6/2023
                                                        </option>
                                                        <option selected>18/6/2023
                                                        </option>
                                                        <option selected>18/6/2023
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <a type="submit" className="tf-button style3">book a table</a>
                                        </form>
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

     )        
}

export default Home
