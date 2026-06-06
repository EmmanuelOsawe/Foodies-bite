import { useState } from "react";
import "../styles/PromiseSection.css";

export default function PromiseSection() {
  const [zoomImage, setZoomImage] = useState(null);

  const leftImage = "assets/images/section/chef3.jpg";
  const rightImage = "assets/images/section/chef4.jpg";

  return (
    <section className="promise-section">
      <div className="promise-container">

        {/* LEFT IMAGE */}
        <div className="promise-image">
          <img
            src={leftImage}
            alt="Chef Cooking"
            onClick={() => setZoomImage(leftImage)}
          />
        </div>

        {/* CONTENT */}
        <div className="promise-content">
          <span className="promise-subtitle">OUR CHEF</span>

          <h2 className="promise-title">
            Our Culinary Philosophy
          </h2>

          <p className="promise-text">
            Simple and balanced. We bring together flavors and specialties
            from Nigeria and beyond to create a unique dining experience.
          </p>

          <div className="promise-features">
            <div className="feature-item">
              <span>1</span>
              <p>Fresh Ingredients</p>
            </div>

            <div className="feature-item">
              <span>2</span>
              <p>Authentic Taste</p>
            </div>

            <div className="feature-item">
              <span>3</span>
              <p>Expert Chefs</p>
            </div>

            <div className="feature-item">
              <span>4</span>
              <p>Fast Service</p>
            </div>
          </div>

          <a href="/menu" className="promise-btn">
            Explore Menu
          </a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="promise-image">
          <img
            src={rightImage}
            alt="Dining Experience"
            onClick={() => setZoomImage(rightImage)}
          />
        </div>
      </div>

      {/* LIGHTBOX */}
      {zoomImage && (
        <div className="image-lightbox" onClick={() => setZoomImage(null)}>
          <img src={zoomImage} alt="Zoomed view" />
        </div>
      )}
    </section>
  );
}