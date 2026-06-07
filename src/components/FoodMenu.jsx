import { useState, useEffect } from "react";
import "../styles/foodMenu.css";

const categories = [
  { id: "rice", name: "Rice Dishes" },
  { id: "soup", name: "Soups" },
  { id: "swallow", name: "Swallow" },
  { id: "grill", name: "Grills" },
];

const foods = [
  { id: 1, name: "Jollof Rice", category: "rice", price: "₦2500", img: "./public/images/jollri.png" },
  { id: 2, name: "Fried Rice", category: "rice", price: "₦2800", img: "./public/images/friedricermv.png" },

  { id: 3, name: "Egusi Soup", category: "soup", price: "₦3000", img: "./public/images/ebarmv.png" },
  { id: 4, name: "Okra Soup", category: "soup", price: "₦3000", img: "./public/images/okrobgrmv.png" },

  { id: 5, name: "Pounded Yam", category: "swallow", price: "₦2000", img: "./public/images/saermv.png" },
  { id: 6, name: "Eba", category: "swallow", price: "₦1500", img: "./public/images/ebarmv.png" },

  { id: 7, name: "Grilled Chicken", category: "grill", price: "₦4000", img: "./public/images/grilled.png" },
];

export default function FoodMenu() {
  const [activeCat, setActiveCat] = useState("rice");
  const [currentFood, setCurrentFood] = useState(0);

  // LIGHTBOX STATE (NEW)
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredFoods = foods.filter((food) => food.category === activeCat);

  // auto slider mobile
  useEffect(() => {
    if (window.innerWidth > 768) return;

    const interval = setInterval(() => {
      setCurrentFood((prev) =>
        prev === filteredFoods.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [filteredFoods]);

  useEffect(() => {
    setCurrentFood(0);
  }, [activeCat]);

  return (
    <div className="menu-section">

      {/* CATEGORY */}
      <div className="category-scroll">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`cat-btn ${activeCat === cat.id ? "active" : ""}`}
            onClick={() => setActiveCat(cat.id)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* DESKTOP */}
      <div className="food-grid desktop-foods">
        {filteredFoods.map((food) => (
          <div className="food-card" key={food.id}>
            <div className="img-box">
              <img
                src={food.img}
                alt={food.name}
                onClick={() => setSelectedImage(food.img)}
              />
            </div>

            <div className="food-info">
              <h3>{food.name}</h3>
              <p>{food.price}</p>
              <button>Order Now</button>
            </div>
          </div>
        ))}
      </div>

      {/* MOBILE */}
      <div className="mobile-food-slider">
        {filteredFoods.length > 0 && (
          <div className="food-card">
            <div className="img-box">
              <img
                src={filteredFoods[currentFood].img}
                alt={filteredFoods[currentFood].name}
                onClick={() =>
                  setSelectedImage(filteredFoods[currentFood].img)
                }
              />
            </div>

            <div className="food-info">
              <h3>{filteredFoods[currentFood].name}</h3>
              <p>{filteredFoods[currentFood].price}</p>
              <button>Order Now</button>
            </div>
          </div>
        )}
      </div>

      {/* LIGHTBOX MODAL (NEW FEATURE) */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="full view" />
          <span className="close">×</span>
        </div>
      )}

    </div>
  );
}