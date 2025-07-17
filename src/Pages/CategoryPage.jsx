import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaShoppingCart,
} from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./CSS/CategoryPage.css";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const decodedCategoryName = decodeURIComponent(categoryName);

  const { products, addToCart,  wishlist, toggleWishlist  } = useContext(ShopContext);

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(7800000);
  const [sortBy, setSortBy] = useState("Popularity");
  const [favorites, setFavorites] = useState(new Set());

  const filteredProducts = products.filter(
    (product) =>
      product.category === decodedCategoryName &&
      product.newPrice >= minPrice &&
      product.newPrice <= maxPrice
  );

 const isInWishlist = (productId) =>
  wishlist.some((item) => item.id === productId);


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

  const handleAddToCart = (item) => {
    addToCart(item);
    toast.success(`${item.name} added to cart!`);
  };

  return (
    <div className="category-page">
      {/* Sidebar */}
        <aside className="sidebar">
        <div className="filter-section">
          <h3>CATEGORY</h3>
          <div className="category-list">
            <div className="category-item">Fashion</div>
            <div className="category-item">Kid's Fashion</div>
            <div className="category-item">Luggage & Travel Gear</div>
            <div className="category-item">Men's Fashion</div>
            <div className="category-item">Shoe, Jewelry & Watch Accessories</div>
            <div className="category-item">Watches</div>
            <div className="category-item">Weddings</div>
            <div className="category-item">Women's Fashion</div>
          </div>
        </div>

        <div className="filter-section">
          <h3>BRAND</h3>
          <div className="search-box">
            <input type="text" placeholder="Search" />
          </div>
          <div className="brand-list">
            <div className="brand-item">
              <input type="checkbox" id="24-7" />
              <label htmlFor="24-7">24 7 FASHION</label>
            </div>
            <div className="brand-item">
              <input type="checkbox" id="915" />
              <label htmlFor="915">915 Generation</label>
            </div>
            <div className="brand-item">
              <input type="checkbox" id="a-line" />
              <label htmlFor="a-line">A-Line</label>
            </div>
            <div className="brand-item">
              <input type="checkbox" id="adidas" />
              <label htmlFor="adidas">ADIDAS</label>
            </div>
            <div className="brand-item">
              <input type="checkbox" id="adroit" />
              <label htmlFor="adroit">Adroit Fashion</label>
            </div>
          </div>
        </div>

        <div className="filter-section">
          <h3>COLOR</h3>
          <div className="color-list">
            <div className="color-item">
              <input type="checkbox" id="beige" />
              <label htmlFor="beige">Beige</label>
            </div>
            <div className="color-item">
              <input type="checkbox" id="black" />
              <label htmlFor="black">Black</label>
            </div>
            <div className="color-item">
              <input type="checkbox" id="blue" />
              <label htmlFor="blue">Blue</label>
            </div>
            <div className="color-item">
              <input type="checkbox" id="brown" />
              <label htmlFor="brown">Brown</label>
            </div>
            <div className="color-item">
              <input type="checkbox" id="cyan" />
              <label htmlFor="cyan">Cyan</label>
            </div>
          </div>
        </div>

        <div className="filter-section">
          <h3>GENDER</h3>
          <div className="gender-list">
            <div className="gender-item">
              <input type="radio" name="gender" id="all" />
              <label htmlFor="all">-</label>
            </div>
            <div className="gender-item">
              <input type="radio" name="gender" id="men" />
              <label htmlFor="men">Men</label>
            </div>
            <div className="gender-item">
              <input type="radio" name="gender" id="boys" />
              <label htmlFor="boys">Boys</label>
            </div>
            <div className="gender-item">
              <input type="radio" name="gender" id="female" />
              <label htmlFor="female">Female</label>
            </div>
            <div className="gender-item">
              <input type="radio" name="gender" id="girls" />
              <label htmlFor="girls">Girls</label>
            </div>
          </div>
        </div>

        <div className="filter-section">
          <h3>PRICE (₦)</h3>
          <div className="price-range">
            <input
              type="range"
              min={0}
              max={7800000}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="price-slider"
            />
            <div className="price-inputs">
              <input
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(Number(e.target.value))}
                placeholder="0"
              />
              <span>-</span>
              <input
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                placeholder="7800000"
              />
            </div>
            <button className="apply-btn">Apply</button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <div className="content-header">
          <h1>The Best Deals On Fashion in Nigeria</h1>
          <span className="product-count">
            ({filteredProducts.length} products found)
          </span>
          <div className="sort-section">
            <span>Sort by:</span>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option>Popularity</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>
        </div>

        {/* Filters Bar */}
        <div className="filters-bar">
          <div className="express-tag">
            <span>📦 Blurp Space</span>
          </div>
          <div className="filter-dropdowns">
            <span>Shipped from Nigeria</span>
            <div className="dropdown">
              <span>
                Brand <MdKeyboardArrowDown />
              </span>
            </div>
            <div className="dropdown">
              <span>
                Price <MdKeyboardArrowDown />
              </span>
            </div>
            <div className="dropdown">
              <span>
                Size <MdKeyboardArrowDown />
              </span>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="product-gridd">
          {filteredProducts.length === 0 ? (
            <p className="no-products">No products found in this category.</p>
          ) : (
            filteredProducts.map((item) => (
              <div className="product-card" key={item.id}>
                <div className="product-imagee">
                  <Link to={`/product/${item.id}`}>
                    <img src={item.image} alt={item.name} />
                  </Link>
                 <button
                        className={`favorite-btn ${isInWishlist(item.id) ? "active" : ""}`}
                        onClick={() => toggleWishlist(item)}
                      >
                        {isInWishlist(item.id) ? <FaHeart className="heart" /> : <FaRegHeart />}
                      </button>


                  <div className="product-hover">
                    <button
                      className="add-to-cart-hover"
                      onClick={() => handleAddToCart(item)}
                    >
                      <FaShoppingCart /> Add to Cart
                    </button>
                  </div>
                </div>
                <div className="product-info">
                  <Link to={`/product/${item.id}`}>
                    <h4 className="product-name">{item.name}</h4>
                  </Link>
                  <div className="price-section">
                    <span className="current-price">
                      ₦ {item.newPrice.toLocaleString()}
                    </span>
                  </div>
                  <div className="rating-section">
                    <div className="stars">{renderStars(item.rating || 4)}</div>
                    <span className="reviews">
                      ({item.reviews || 100})
                    </span>
                  </div>
                  <div className="brand-info">
                    <span className="brand">Blurp Space</span>
                  </div>
                </div>
                <button
                  className="add-to-cart-mobile"
                  onClick={() => handleAddToCart(item)}
                >
                  <FaShoppingCart /> Add to Cart
                </button>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default CategoryPage;
