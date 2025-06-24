import React, { useRef } from "react";
import "./CategoryShow.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Add this for icons

const products = [
  {
    id: 1,
    name: "Digital Camera",
    image: "/src/Data/7623fe63-b8b0-4455-9c39-255b5e607cd7.__CR409,136,4848,3636_PT0_SX800_V1___.jpg",
  },
  {
    id: 2,
    name: "Skin Care",
    image: "/src/Data/skincare.webp",
  },
  {
    id: 3,
    name: "Perfumes",
    image: "/src/Data/perfume.jpg",
  },
  {
    id: 4,
    name: "Tripod Stand",
    image: "/src/Data/stand.jpg",
  },
  {
    id: 5,
    name: "Microphone",
    image: "/src/Data/mic.jpg",
  },
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
        <h2>Category</h2>
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
          <div className="category-card" key={item.id}>
            <div className="image-box">
              <img src={item.image} alt={item.name} />
            </div>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryShow;
