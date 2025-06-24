import React from "react";
import "./NewInStore.css";

const newProducts = Array.from({ length: 24 }).map((_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
  image: "/src/Data/watch.webp", // change to your actual image paths
  oldPrice: "₦20,000",
  newPrice: "₦15,000",
}));

const NewInStore = () => {
  return (
    <section className="new-in-section">
      <div className="new-in-header">
        <span>New In Store</span>
        <a href="#">See more &gt;</a>
      </div>

      <div className="new-in-grid">
        {newProducts.map((item) => (
          <div className="new-in-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <div className="new-in-price">
              <span className="old">{item.oldPrice}</span>
              <span className="new">{item.newPrice}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewInStore;
