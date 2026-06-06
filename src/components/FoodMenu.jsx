import { useState } from "react";
import "../styles/foodMenu.css";

const categories = [
  { id: "rice", name: "Rice Dishes" },
  { id: "soup", name: "Soups" },
  { id: "swallow", name: "Swallow" },
  { id: "grill", name: "Grills" },
];

const foods = [
  { id: 1, name: "Jollof Rice", category: "rice", price: "₦2500", img: "../images/food/jollof.jpg" },
  { id: 2, name: "Fried Rice", category: "rice", price: "₦2800", img: "../images/food/friedrice.jpg" },

  { id: 3, name: "Egusi Soup", category: "soup", price: "₦3000", img: "../images/food/ebarmv.png" },
  { id: 4, name: "Okra Soup", category: "soup", price: "₦3000", img: "../images/food/okrobgrmv.png" },

  { id: 5, name: "Pounded Yam", category: "swallow", price: "₦2000", img: "../images/food/saermv.png" },
  { id: 6, name: "Eba", category: "swallow", price: "₦1500", img: "../images/food/ebarmv.png" },

  { id: 7, name: "Grilled Chicken", category: "grill", price: "₦4000", img: "../images/food/chicken.jpg" },
];

export default function FoodMenu() {
  const [activeCat, setActiveCat] = useState("rice");

  const filteredFoods = foods.filter((f) => f.category === activeCat);

  return (
    <div className="menu-section">

      {/* CATEGORY SCROLL */}
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

      {/* FOOD CARDS */}
      <div className="food-grid">
        {filteredFoods.map((food) => (
          <div className="food-card" key={food.id}>
            <div className="img-box">
              <img src={food.img} alt={food.name} />
            </div>

            <div className="food-info">
              <h3>{food.name}</h3>
              <p>{food.price}</p>
              <button>Order Now</button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}