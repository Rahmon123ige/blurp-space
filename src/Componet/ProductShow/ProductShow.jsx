import React from 'react';
import './ProductShow.css';

const ProductShow = () => {
  return (
    <div className="product-show">
      {/* Gaming Section */}
      <div className="product-sectionn">
        <h2 className="section-title">Get your game on</h2>
        <div className="product-image-container">
          <img 
            src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&h=300&fit=crop" 
            alt="Gaming PC setup" 
            className="main-product-image"
          />
        </div>
        <a href="#" className="section-link">Shop gaming</a>
      </div>

      {/* Home Essentials Section */}
      <div className="product-sectionn">
        <h2 className="section-title">Shop for your home essentials</h2>
        <div className="product-grid">
          <div className="product-item">
            <img 
              src="https://images.unsplash.com/photo-1563453392212-326f5e854473?w=200&h=150&fit=crop" 
              alt="Cleaning supplies" 
              className="product-image"
            />
            <p className="product-label">Cleaning Tools</p>
          </div>
          <div className="product-item">
            <img 
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=150&fit=crop" 
              alt="Storage solutions" 
              className="product-image"
            />
            <p className="product-label">Home Storage</p>
          </div>
          <div className="product-item">
            <img 
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=150&fit=crop" 
              alt="Home decor" 
              className="product-image"
            />
            <p className="product-label">Home Decor</p>
          </div>
          <div className="product-item">
            <img 
              src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=200&h=150&fit=crop" 
              alt="Bedding" 
              className="product-image"
            />
            <p className="product-label">Bedding</p>
          </div>
        </div>
        <a href="#" className="section-link">Discover more in Home</a>
      </div>

      {/* Kitchen Appliances Section */}
      <div className="product-sectionn">
        <h2 className="section-title">Top categories in Kitchen appliances</h2>
        <div className="kitchen-grid">
          <div className="kitchen-main">
            <img 
              src="https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=300&h=200&fit=crop" 
              alt="Pressure cooker" 
              className="kitchen-main-image"
            />
            <p className="product-label">Cooker</p>
          </div>
          <div className="kitchen-items">
            <div className="kitchen-item">
              <img 
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=120&h=100&fit=crop" 
                alt="Coffee maker" 
                className="kitchen-small-image"
              />
              <p className="product-label-small">Coffee</p>
            </div>
            <div className="kitchen-item">
              <img 
                src="https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=120&h=100&fit=crop" 
                alt="Pots and pans" 
                className="kitchen-small-image"
              />
              <p className="product-label-small">Pots and...</p>
            </div>
            <div className="kitchen-item">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=120&h=100&fit=crop" 
                alt="Kettles" 
                className="kitchen-small-image"
              />
              <p className="product-label-small">Kettles</p>
            </div>
          </div>
        </div>
        <a href="#" className="section-link">Explore all products in Kitchen</a>
      </div>

      {/* Fashion Section */}
      <div className="product-sectionn">
        <h2 className="section-title">Shop Fashion for less</h2>
        <div className="fashion-grid">
          <div className="fashion-item">
            <img 
              src="https://images.unsplash.com/photo-1542272604-787c3835535d?w=150&h=120&fit=crop" 
              alt="Jeans" 
              className="fashion-image"
            />
            <p className="product-label-small">Jeans under $50</p>
          </div>
          <div className="fashion-item">
            <img 
              src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=150&h=120&fit=crop" 
              alt="Tops" 
              className="fashion-image"
            />
            <p className="product-label-small">Tops under $25</p>
          </div>
          <div className="fashion-item">
            <img 
              src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=150&h=120&fit=crop" 
              alt="Dresses" 
              className="fashion-image"
            />
            <p className="product-label-small">Dresses under $30</p>
          </div>
          <div className="fashion-item">
            <img 
              src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=150&h=120&fit=crop" 
              alt="Shoes" 
              className="fashion-image"
            />
            <p className="product-label-small">Shoes under $50</p>
          </div>
        </div>
        <a href="#" className="section-link">See all deals</a>
      </div>
    </div>
  );
};

export default ProductShow