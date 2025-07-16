import React, { useRef } from "react";
import "./CategoryShow.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom"; // ✅ add this for routing

const products = [
  { id: 1, name: "Camera", image: "/src/Data/camera.jpg" },
  { id: 2, name: "Skin Care", image: "/src/Data/skincare.webp" },
  { id: 3, name: "Perfumes", image: "/src/Data/perfume.jpg" },
  { id: 4, name: "Tripods", image: "/src/Data/stand.jpg" },
  { id: 5, name: "Microphone", image: "/src/Data/mic.jpg" },
  { id: 6, name: "Fashion Accessories", image: "/src/Data/jacket.jpeg" },
  { id: 7, name: "Headphones", image: "/src/Data/headset.webp" },
  { id: 8, name: "Lens", image: "/src/Data/Canon EF-S 24mm f 2.8 STM Lens - Down.webp" },
  { id: 9, name: "Watches", image: "/src/Data/watch.webp" },
  { id: 10, name: "Shoes", image: "/src/Data/Shoes-Men.jpg" },
  { id: 11, name: "Perfumes", image: "/src/Data/perfumes.jpg" },
  { id: 12, name: "Phones", image: "/src/Data/phones.avif" },
];

const CategoryShow = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -250, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 250, behavior: "smooth" });
  };

  return (
    <section className="category-section">
      <div className="category-header">
        <h2>Shop by Category</h2>
        <div className="nav-icons">
          <button onClick={scrollLeft} className="scroll-btn">
            <FaChevronLeft />
          </button>
          <button onClick={scrollRight} className="scroll-btn">
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div className="category-scroll" ref={scrollRef}>
        {products.map((item) => (
          <Link
            to={`/category/${encodeURIComponent(item.name)}`} // ✅ navigate to category
            key={item.id}
            className="category-card link-reset"
          >
            <div className="image-box">
              <img src={item.image} alt={item.name} />
            </div>
            <p>{item.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryShow;
