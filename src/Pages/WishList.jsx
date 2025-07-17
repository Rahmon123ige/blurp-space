
import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { Link } from "react-router-dom";
import { 
  FaUser, 
  FaBox, 
  FaInbox, 
  FaEdit, 
  FaTicketAlt, 
  FaUsers, 
  FaHeart, 
  FaClock, 
  FaCog, 
  FaCreditCard, 
  FaAddressBook, 
  FaNewspaper, 
  FaSignOutAlt,
  FaHeartBroken,
  FaTimes
} from "react-icons/fa";
import "./CSS/WishList.css"; 

const WishList = () => {
  const { wishlist, toggleWishlist,  } = useContext(ShopContext);

  return (
    <div className="wishlist-container">
      {/* Sidebar Navigation */}
      <div className="sidebar-nav">
        <div className="nav-item active">
          <FaUser className="nav-icoon" />
          <span>My Jumia Account</span>
        </div>
        
        <div className="nav-item">
          <FaBox className="nav-icoon" />
          <span>Orders</span>
        </div>
        
        <div className="nav-item">
          <FaInbox className="nav-icoon" />
          <span>Inbox</span>
        </div>
        
        <div className="nav-item">
          <FaEdit className="nav-icoon" />
          <span>Pending Reviews</span>
        </div>
        
        <div className="nav-item">
          <FaTicketAlt className="nav-icoon" />
          <span>Voucher</span>
        </div>
        
        <div className="nav-item wishlist-nav">
          <FaHeart className="nav-icoon" />
          <span>Wishlist</span>
        </div>
        
        <div className="nav-item">
          <FaUsers className="nav-icoon" />
          <span>Followed Sellers</span>
        </div>
        
        <div className="nav-item">
          <FaClock className="nav-icoon" />
          <span>Recently Viewed</span>
        </div>
        
        <div className="nav-section-title">Account Management</div>
        
        <div className="nav-item">
          <FaCog className="nav-icoon" />
          <span>Payment Settings</span>
        </div>
        
        <div className="nav-item">
          <FaAddressBook className="nav-icoon" />
          <span>Address Book</span>
        </div>
        
        <div className="nav-item">
          <FaNewspaper className="nav-icoon" />
          <span>Newsletter Preferences</span>
        </div>
        
        <div className="nav-item logout">
          <FaSignOutAlt className="nav-icoon" />
          <span>Logout</span>
        </div>
      </div>

      {/* Main Wishlist Content */}
      <div className="wishlist-main">
        <div className="wishlist-header">
          <h2>Wishlist ({wishlist.length})</h2>
        </div>

        {wishlist.length === 0 ? (
          <div className="empty-wishlist">
            <FaHeartBroken size={60} color="#ccc" />
            <p>Your wishlist is empty</p>
            <span>Browse our categories and discover our best deals!</span>
          </div>
        ) : (
          <div className="wishlist-items">
            {wishlist.map((item) => (
              <div key={item.id} className="wishlist-item">
                <div className="item-image">
                  <Link to={`/product/${item.id}`}><img src={item.image} alt={item.name} /> </Link> 
                </div>
                
                <div className="item-info">
                    <Link to={`/product/${item.id}`}> <h3 className="item-name">{item.name}</h3> </Link> 
                  {item.size && <p className="item-size">Size: {item.size}</p>}
                  
                  <div className="price-section">
                    <span className="current-price">₦ {item.newPrice?.toLocaleString()}</span>
                    {item.oldPrice && (
                      <>
                        <span className="original-price">₦ {item.oldPrice?.toLocaleString()}</span>
                        <span className="discount">
                          -{Math.round(((item.oldPrice - item.newPrice) / item.oldPrice) * 100)}%
                        </span>
                      </>
                    )}
                  </div>
                  
                  <div className="jumia-express">
                    <span className="jumia-logo">Blurp Space</span>
                  </div>
                </div>
                
                <div className="item-actions">
                  <button 
                    className="remove-btnn"
                    onClick={() => toggleWishlist(item)}
                    title="Remove from wishlist"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WishList;
