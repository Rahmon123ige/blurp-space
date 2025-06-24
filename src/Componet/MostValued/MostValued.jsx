// src/components/TopValued.jsx
import React from "react";
import "./MostValued.css";

const topValuedProducts = [
  {
    id: 1,
    name: "Black round neck medium",
    image: "/src/Data/black shart.webp",
    oldPrice: "₦15,000.00",
    newPrice: "₦10,000.00",
  },
  {
    id: 2,
    name: "Dark Punk Black Cross Chain",
    image: "/src/Data/nacklace.webp",
    oldPrice: "₦8,500.00",
    newPrice: "₦7,500.00",
  },
  {
    id: 3,
    name: "CAPTAIN PERFUMES",
    image: "/src/Data/captain.webp",
    oldPrice: "₦43,000.00",
    newPrice: "₦33,000.00",
  },
  {
    id: 4,
    name: "K9 Dual Wireless Lavalier Microphone",
    image: "/src/Data/marco peff.webp",
    oldPrice: "₦25,000.00",
    newPrice: "₦22,000.00",
  },
  {
    id: 5,
    name: "LensGo L311 Multifunction Mini Tripod",
    image: "/src/Data/lenss.webp",
    oldPrice: "₦17,000.00",
    newPrice: "₦14,000.00",
  },
  {
    id: 6,
    name: "POEDAGAR Long Lasting / Non Fading Leather Wristwatch",
    image: "/src/Data/watch.webp",
    oldPrice: "₦40,000.00",
    newPrice: "₦38,000.00",
  },
  {
    id: 7,
    name: "MAXIM ROI PERFUMES(100ML) FOR MEN",
    image: "/src/Data/maxim.webp",
    oldPrice: "₦43,000.00",
    newPrice: "₦38,000.00",
  },
  {
    id: 8,
    name: "THRIVE DE PARFUM PERFUME",
    image: "/src/Data/thrive.webp",
    oldPrice: "₦38,000.00",
    newPrice: "₦33,000.00",
  },
];

const MostValued = () => {
  return (
    <div className="top-valued">
      <h2>Top Value Products</h2>
      <div className="product-grid">
        {topValuedProducts.map((item) => (
          <div className="product-card" key={item.id}>
            <div className="image-wrap">
              <img src={item.image} alt={item.name} />
              <button className="cart-btn">Add to Cart</button>
            </div>
            <h4>{item.name}</h4>
            <div className="price">
              <span className="old">{item.oldPrice}</span>
              <span className="new">{item.newPrice}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostValued;
