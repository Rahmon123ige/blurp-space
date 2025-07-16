
import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import { FaHeart, FaRegHeart, FaStar, FaStarHalfAlt, FaRegStar, FaShoppingCart, FaTruck, FaUndo, FaShieldAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { Link } from "react-router-dom";
import { BsShare } from "react-icons/bs";
import "./CSS/Productdetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ShopContext);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedColor, setSelectedColor] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [showSpecs, setShowSpecs] = useState(false);

  // Find the product by ID
const product = products.find((item) => item.id.toString() === id);


  if (!product) return <p>Product not found</p>;

  const productImages = [product.image, product.image, product.image, product.image];
  const colors = ['Black', 'White', 'Gray'];
  
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="star filled" />);
    }
    
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="star half" />);

    }
    
    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="star empty" />);
    }
    
    return stars;
  };

  const calculateDiscount = (oldPrice, newPrice) => {
    return Math.round(((oldPrice - newPrice) / oldPrice) * 100);
  };

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="product-details">
      <div className="breadcrumb">
        <span>Home</span> / <span>{product.category}</span> / <span>{product.name}</span>
      </div>

      <div className="product-main">
        {/* Product Images */}
        <div className="product-images">
          <div className="image-thumbnails">
            {productImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${product.name} ${index + 1}`}
                className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
          <div className="main-image">
            <img src={productImages[selectedImage]} alt={product.name} />
            <button 
              className={`favorite-btn ${isFavorite ? 'active' : ''}`}
              onClick={() => setIsFavorite(!isFavorite)}
            >
              {isFavorite ? <FaHeart /> : <FaRegHeart />}
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="product-info">
          <h1>{product.name}</h1>
          <div className="brand">Brand: <span>JUMIA</span> | Similar products from JUMIA</div>
          
          <div className="rating-section">
            <div className="stars">
              {renderStars(4.2)}
            </div>
            <span className="rating-text">(91 verified ratings)</span>
          </div>

          <div className="price-section">
            <div className="current-price">₦ {product.newPrice?.toLocaleString()}</div>
            {product.oldPrice && (
              <>
                <div className="original-price">₦ {product.oldPrice.toLocaleString()}</div>
                <div className="discount">-{calculateDiscount(product.oldPrice, product.newPrice)}%</div>
              </>
            )}
          </div>

          <div className="few-units">Few units left</div>

          <div className="quantity-section">
            <label>QUANTITY</label>
            <div className="quantity-controls">
              <button onClick={() => quantity > 1 && setQuantity(quantity - 1)}>-</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>

          <div className="color-section">
            <label>COLOR</label>
            <div className="color-options">
              {colors.map((color, index) => (
                <button
                  key={index}
                  className={`color-option ${selectedColor === index ? 'active' : ''}`}
                  onClick={() => setSelectedColor(index)}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          <button className="add-to-cart-main">
            <FaShoppingCart /> ADD TO CART
          </button>

          <div className="promotions">
            <h3>PROMOTIONS</h3>
            <div className="promo-item">
              📦 Call 0708JUMA(5862) to place your order
            </div>
            <div className="promo-item">
              🎁 Good news! Enjoy 6 up to 10% instant off on this qualifying Android...
            </div>
            <div className="promo-item">
              ⚡ Super savings! Mega Deal starts when you collect 3 Manga Stones or Start...
            </div>
          </div>
        </div>

        {/* Delivery & Returns */}
        <div className="delivery-info">
          <h3>DELIVERY & RETURNS</h3>
          
          <div className="delivery-option">
            <div className="delivery-header">
              <FaMapMarkerAlt />
              <span>Door Delivery</span>
            </div>
            <div className="delivery-details">
              <div>Delivery ₦ 700</div>
              <div>Ready for delivery between 19 December & 20 December when you order within next 17hrs 32mins</div>
            </div>
          </div>

          <div className="delivery-option">
            <div className="delivery-header">
              <FaTruck />
              <span>Pickup Station</span>
            </div>
            <div className="delivery-details">
              <div>Delivery ₦ 300</div>
              <div>Ready for pickup between 19 December & 20 December when you order within next 17hrs 32mins</div>
            </div>
          </div>

          <div className="return-policy">
            <div className="return-item">
              <FaUndo />
              <span>Easy Return, Quick Refund.</span>
            </div>
            <div className="return-item">
              <FaShieldAlt />
              <span>Warranty Available</span>
            </div>
          </div>

          <div className="seller-info">
            <h4>Seller information</h4>
            <div className="seller-details">
              <div className="seller-name">🏪 Jumia</div>
              <div className="seller-rating">
                <div className="stars">
                  {renderStars(4.5)}
                </div>
                <span>(90% positive ratings)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="details-section">
        <div className="details-header" onClick={() => setShowDetails(!showDetails)}>
          <h3>Product details</h3>
          {showDetails ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </div>
        {showDetails && (
          <div className="details-content">
            <p>{product.des || "High-quality product with excellent features and specifications designed for modern use."}</p>
            <div className="key-features">
              <h4>KEY FEATURES</h4>
              <ul>
                <li>Long all day</li>
                <li>SmartPhone</li>
                <li>Good quality</li>
                <li>Latest</li>
                <li>8g g Megapixel</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Specifications */}
      <div className="specifications-section">
        <div className="specs-header" onClick={() => setShowSpecs(!showSpecs)}>
          <h3>Specifications</h3>
          {showSpecs ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </div>
        {showSpecs && (
          <div className="specs-content">
            <div className="spec-row">
              <span className="spec-label">Product Line</span>
              <span className="spec-value">Generic</span>
            </div>
            <div className="spec-row">
              <span className="spec-label">Model</span>
              <span className="spec-value">Chef Long Lasting Designer Perfume 50ml</span>
            </div>
            <div className="spec-row">
              <span className="spec-label">Weight (kg)</span>
              <span className="spec-value">0.5</span>
            </div>
          </div>
        )}
      </div>

      {/* Customer Reviews */}
      <div className="reviews-section">
        <h3>Verified Customer Feedback</h3>
        <div className="reviews-summary">
          <div className="overall-rating">
            <div className="rating-number">4.7/5</div>
            <div className="stars">
              {renderStars(4.7)}
            </div>
            <div className="total-reviews">91 verified ratings</div>
          </div>
          
          <div className="rating-breakdown">
            {[5, 4, 3, 2, 1].map(rating => (
              <div key={rating} className="rating-bar">
                <span>{rating}</span>
                <div className="bar">
                  <div className="fill" style={{width: rating === 5 ? '70%' : rating === 4 ? '20%' : '5%'}}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reviews-list">
          <div className="review-item">
            <div className="review-header">
              <span className="reviewer">VERIFIED RATINGS (91)</span>
              <div className="stars">{renderStars(5)}</div>
            </div>
            <div className="review-text">very good</div>
            <div className="review-date">a day ago</div>
          </div>
          
          <div className="review-item">
            <div className="review-header">
              <span className="reviewer">I love it</span>
              <div className="stars">{renderStars(5)}</div>
            </div>
            <div className="review-text">it smells perfectly good</div>
            <div className="review-date">2 months ago</div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="related-products">
          <h3>Product details</h3>
          <div className="related-grid">
            {relatedProducts.map((item) => (
              <div className="related-item" key={item.id}>
                <Link to={`/product/${item.id}`} className="related-item" key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <h4>{item.name}</h4>
                    <div className="price">₦ {item.newPrice?.toLocaleString()}</div>
                    </Link>

              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
