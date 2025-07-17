import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./CSS/CartPage.css";

const CartPage = () => {
  const {
    cartItems,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
  } = useContext(ShopContext);

  const totalPrice = cartItems.reduce((acc, item) => acc + (item.newPrice || 0) * item.quantity, 0);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="cart-page">
      <div className="cart-container">
        {/* Left Section - Cart Items */}
        <div className="cart-items-section">
          <h2 className="cart-title">Cart ({totalItems})</h2>

          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <p>Your cart is empty 🛒</p>
            </div>
          ) : (
            <div className="cart-items">
              {cartItems.map((item) => {
                const itemPrice = item.newPrice || 0;
                const oldPrice = item.oldPrice || null;
                const discount = oldPrice
                  ? Math.round(((oldPrice - itemPrice) / oldPrice) * 100)
                  : null;

                return (
                  <div key={item.id} className="cart-item">
                    <div className="item-image">
                   <Link to={`/product/${item.id}`}> <img src={item.image} alt={item.name} /></Link> 
                    </div>

                    <div className="item-details">
                      <Link to={`/product/${item.id}`}><h3 className="item-name">{item.name}</h3></Link>
                      <p className="item-stock">In Stock</p>
                      <div className="item-seller">
                        <span className="jumia-text">Blurp Space</span>
                      </div>

                      <div className="item-actions">
                        <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                          <FaTrash />
                          Remove
                        </button>
                      </div>
                    </div>

                    <div className="item-pricing">
                      <div className="price-section">
                        <span className="current-price">₦ {itemPrice.toLocaleString()}</span>
                        {oldPrice && (
                          <>
                            <span className="old-price">₦ {oldPrice.toLocaleString()}</span>
                            <span className="discount">-{discount}%</span>
                          </>
                        )}
                      </div>

                      <div className="quantity-controls">
                        <button
                          className="qty-btn minus"
                          onClick={() => decreaseQuantity(item.id)}
                          disabled={item.quantity <= 1}
                        >
                          <FaMinus className="con" />
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button
                          className="qty-btn plus"
                          onClick={() => increaseQuantity(item.id)}
                        >
                          <FaPlus className="con" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Right Section - Cart Summary */}
        {cartItems.length > 0 && (
          <div className="cart-summary-section">
            <div className="cart-summary">
              <h3 className="summary-title">CART SUMMARY</h3>

              <div className="summary-item">
                <span>Item's total ({totalItems})</span>
                <span>₦ {totalPrice.toLocaleString()}</span>
              </div>

              <div className="summary-item subtotal">
                <span>Subtotal</span>
                <span>₦ {totalPrice.toLocaleString()}</span>
              </div>

              <button className="checkout-btn">
                Checkout (₦ {totalPrice.toLocaleString()})
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
