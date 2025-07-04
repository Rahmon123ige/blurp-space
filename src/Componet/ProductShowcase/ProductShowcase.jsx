
import React from 'react';
import Skin from '../../Data/skin.jpeg'
import Gimbal1 from '../../Data/1.jpg'
import Drone from '../../Data/Dji Air 3 Drone Fly More Combo with RC 2 - Aesthetic.webp'
import Lens from '../../Data/Canon EF-S 24mm f 2.8 STM Lens - Down.webp'
import Tripod from '../../Data/Cayer H6 Heavy Duty Tripod - Setup.jpg'
import phone from '../../Data/phones.avif'
import camera from '../../Data/camera.jpg'
import jwerries from '../../Data/jwerries.webp'
import Kicten from '../../Data/kitchen.webp'
import Perfume from '../../Data/perfumes.jpg'
import Shoe from '../../Data/Shoes-Men.jpg'
import jacket from '../../Data/jacket.jpeg'
import jew from '../../Data/jwew.jpg'
import './ProductShowcase.css'

const ProductShowcase = () => {
  return (
    <div className="product-showcase">
      <div className="showcase-container">
        
        {/* Fashion Section */}
        <div className="product-section">
          <h2 className="section-title">Fashion trends you like</h2>
          <div className="product-grid">
            <div className="product-item">
              <div className="product-image">
                <img src={Perfume} alt="Dresses" />
              </div>
              <p className="product-label">Perfumes</p>
            </div>
            <div className="product-item">
              <div className="product-image">
                <img src={jew} alt="Knits" />
              </div>
              <p className="product-label">Jewelry</p>
            </div>
            <div className="product-item">
              <div className="product-image">
                <img src={Shoe} alt="Jackets" />
              </div>
              <p className="product-label">Foot-wears</p>
            </div>
            <div className="product-item">
              <div className="product-image">
                <img src={jacket} alt="Jewelry" />
              </div>
              <p className="product-label">Wears</p>
            </div>
          </div>
          <a href="#" className="section-link">Explore more</a>
        </div>

        {/* Home Arrivals Section */}
        <div className="product-section">
          <h2 className="section-title">New Arrivals </h2>
          <div className="product-grid">
            <div className="product-item">
              <div className="product-image">
                <img src={Kicten} alt="Kitchen & Dining" />
              </div>
              <p className="product-label">Kitchen Accessories</p>
            </div>
            <div className="product-item">
              <div className="product-image">
                <img src={jwerries} alt="Home Improvement" />
              </div>
              <p className="product-label">Jwerries</p>
            </div>
            <div className="product-item">
              <div className="product-image">
                <img src={camera} alt="Décor" />
              </div>
              <p className="product-label">Digital Camera</p>
            </div>
            <div className="product-item">
              <div className="product-image">
                <img src={phone} alt="Bedding & Bath" />
              </div>
              <p className="product-label">Phone</p>
            </div>
          </div>
          <a href="#" className="section-link">Shop the latest</a>
        </div>

        {/* Home Updates Section */}
        <div className="product-section">
          <h2 className="section-title">Accessories</h2>
          <div className="product-grid">
            <div className="product-item">
              <div className="product-image">
                <img src={Gimbal1} alt="Baskets & hampers" />
              </div>
              <p className="product-label">Gimbals</p>
            </div>
            <div className="product-item">
              <div className="product-image">
                <img src={Drone} alt="Hardware" />
              </div>
              <p className="product-label">Drone</p>
            </div>
            <div className="product-item">
              <div className="product-image">
                <img src={Lens} alt="Accent furniture" />
              </div>
              <p className="product-label">Lens</p>
            </div>
            <div className="product-item">
              <div className="product-image">
                <img src={Tripod} alt="Wallpaper & paint" />
              </div>
              <p className="product-label">Tripods</p>
            </div>
          </div>
          <a href="#" className="section-link">Shop products</a>
        </div>

        {/* Toys Section */}
        <div className="product-section">
          <h2 className="section-title">Skin Care</h2>
          <div className="single-product">
            <div className="large-product-image">
              <img src={Skin} alt="skin care" />
            </div>
          </div>
          <a href="#" className="section-link">Shop now</a>
        </div>

      </div>
    </div>
  );
};

export default ProductShowcase;
