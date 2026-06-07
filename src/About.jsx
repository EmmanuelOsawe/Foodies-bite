import './App.css';
import "./styles/aboutUs.css";

function About() {
 
  return (

    
    <section className="about-foodies">

      
      <div className="about-container">

        {/* LEFT IMAGE */}
        <div className="about-image">
          <img
            src="assets/images/section/original.jfif"
            alt="Foodies Bites Nigerian Food"
          />
        </div>

        {/* CONTENT */}
        <div className="about-content">

          <p className="subtitle">About Foodies-Bites</p>

          <h2 className="title">
            Bringing the Taste of Nigeria <br />
            to Your Table
          </h2>

          <p className="text">
            Foodies-Bites is more than just a restaurant — it is a celebration of Nigerian
            cuisine, culture, and comfort. We blend traditional recipes with modern culinary
            creativity to deliver unforgettable dining experiences.
          </p>

          <p className="text">
            From smoky Jollof rice to rich soups, grilled delights, and local favorites,
            every meal is prepared with passion, freshness, and authentic Nigerian flavor.
            We believe food should not just satisfy hunger — it should tell a story.
          </p>

          <div className="stats">
            <div>
              <h3>50+</h3>
              <p>Dishes</p>
            </div>

            <div>
              <h3>10k+</h3>
              <p>Customers</p>
            </div>

            <div>
              <h3>5★</h3>
              <p>Reviews</p>
            </div>
          </div>

          <a href="/menu" className="btn-about">
            Explore Menu
          </a>

        </div>
      </div>
    </section>
  );
}  

export default About;