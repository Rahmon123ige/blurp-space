// src/components/Gadgets.jsx
import React from "react";
import "./CSS/Categories.css";
import { FaAngleRight } from "react-icons/fa";

const fashion = [
  {
    id: 1,
    name: "Wireless Earbuds",
    image: "/src/Data/captain.webp",
    oldPrice: "₦15,000",
    newPrice: "₦10,000",
  },
  {
    id: 2,
    name: "Wireless Earbuds",
    image: "/src/Data/maxim.webp",
    oldPrice: "₦15,000",
    newPrice: "₦10,000",
  },
  {
    id: 3,
    name: "Wireless Earbuds",
    image: "/src/Data/captain.webp",
    oldPrice: "₦15,000",
    newPrice: "₦10,000",
  },
  {
    id: 4,
    name: "Wireless Earbuds",
    image: "/src/Data/captain.webp",
    oldPrice: "₦15,000",
    newPrice: "₦10,000",
  },
  {
    id: 5,
    name: "Wireless Earbuds",
    image: "/src/Data/captain.webp",
    oldPrice: "₦15,000",
    newPrice: "₦10,000",
  },
  {
    id: 6,
    name: "Wireless Earbuds",
    image: "/src/Data/captain.webp",
    oldPrice: "₦15,000",
    newPrice: "₦10,000",
  },
  {
    id: 7,
    name: "Wireless Earbuds",
    image: "/src/Data/maxim.webp",
    oldPrice: "₦15,000",
    newPrice: "₦10,000",
  },
  {
    id: 8,
    name: "Wireless Earbuds",
    image: "/src/Data/captain.webp",
    oldPrice: "₦15,000",
    newPrice: "₦10,000",
  },
  {
    id: 9,
    name: "Wireless Earbuds",
    image: "/src/Data/maxim.webp",
    oldPrice: "₦15,000",
    newPrice: "₦10,000",
  },
  {
    id: 10,
    name: "Wireless Earbuds",
    image: "/src/Data/maxim.webp",
    oldPrice: "₦15,000",
    newPrice: "₦10,000",
  },
  {
    id: 11,
    name: "Wireless Earbuds",
    image: "/src/Data/maxim.webp",
    oldPrice: "₦15,000",
    newPrice: "₦10,000",
  },
  {
    id: 12,
    name: "Wireless Earbuds",
    image: "/src/Data/maxim.webp",
    oldPrice: "₦15,000",
    newPrice: "₦10,000",
  },
  {
    id: 13,
    name: "Wireless Earbuds",
    image: "/src/Data/maxim.webp",
    oldPrice: "₦15,000",
    newPrice: "₦10,000",
  },
  {
    id: 14,
    name: "Wireless Earbuds",
    image: "/src/Data/maxim.webp",
    oldPrice: "₦15,000",
    newPrice: "₦10,000",
  },
  {
    id: 15,
    name: "Wireless Earbuds",
    image: "/src/Data/maxim.webp",
    oldPrice: "₦15,000",
    newPrice: "₦10,000",
  },
  // Add all 15 gadgets here like the example above
];

const Fashion = () => {
  return (
    <section className="gadget-section">
      <div className="gadget-header">
        <h2>Fashion</h2>
        <span className="see-more">See more <FaAngleRight /></span>
      </div>

      <div className="gadget-scroll">
        {fashion.map((item) => (
          <div className="gadget-card" key={item.id}>
            <div className="gadget-image">
              <img src={item.image} alt={item.name} />
            </div>
            <h4>{item.name}</h4>
            <div className="gadget-price">
              <span className="new">{item.newPrice}</span>
              <span className="old">{item.oldPrice}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Fashion;
