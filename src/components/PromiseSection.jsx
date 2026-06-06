import "./PromiseSection.css";

export default function PromiseSection() {
  return (
    <section className="promise-section">
      <div className="promise-container">

        {/* Left Image */}
        <div className="promise-image">
          <img
            src="assets/images/section/promise-left.jpg"
            alt="Fresh Nigerian Food"
          />
        </div>

        {/* Content */}
        <div className="promise-content">
          <span className="promise-subtitle">
            OUR PROMISE
          </span>

          <h2 className="promise-title">
            Quality Food.
            <br />
            Exceptional Service.
          </h2>

          <p className="promise-text">
            At Foodies-Bite, we believe every meal should be memorable.
            Our team is committed to serving fresh, delicious Nigerian
            dishes while providing a welcoming experience for every guest.
          </p>

          <div className="promise-features">

            <div className="feature-item">
              <span>✓</span>
              <p>Freshly Prepared Daily</p>
            </div>

            <div className="feature-item">
              <span>✓</span>
              <p>Fast & Reliable Delivery</p>
            </div>

            <div className="feature-item">
              <span>✓</span>
              <p>Premium Ingredients</p>
            </div>

            <div className="feature-item">
              <span>✓</span>
              <p>Friendly Customer Service</p>
            </div>

          </div>

          <a href="/Menu" className="promise-btn">
            Explore Menu
          </a>
        </div>

        {/* Right Image */}
        <div className="promise-image">
          <img
            src="assets/images/section/promise-right.jpg"
            alt="Foodies-Bite Dining"
          />
        </div>

      </div>
    </section>
  );
}