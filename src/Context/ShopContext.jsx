import React, { createContext, useState } from "react";
import AllProduct from "../Data/AllProduct";
import { toast } from "react-toastify";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState(AllProduct);
  const [cartItems, setCartItems] = useState([]); 
  const [wishlist, setWishlist] = useState([]);

  // 🛒 Add to Cart
  const addToCart = (product, quantity = 1) => {
    setCartItems((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  // ❌ Remove from Cart
  const removeFromCart = (id) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // ➖ Decrease Quantity
  const decreaseQuantity = (productId) => {
  setCartItems((prevItems) => {
    const item = prevItems.find((i) => i.id === productId);
    if (!item) return prevItems;

    if (item.quantity === 1) {
      // Remove it
      return prevItems.filter((i) => i.id !== productId);
    } else {
      // Just decrease
      return prevItems.map((i) =>
        i.id === productId ? { ...i, quantity: i.quantity - 1 } : i
      );
    }
  });
};

  // ➕ Increase Quantity
  const increaseQuantity = (id) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // 💖 Add/Remove from Wishlist
const toggleWishlist = (product) => {
  const isAlreadyInWishlist = wishlist.some(item => item.id === product.id);

  if (isAlreadyInWishlist) {
    setWishlist((prev) => prev.filter((item) => item.id !== product.id));
    toast.info(`${product.name} removed from wishlist `);
  } else {
    setWishlist((prev) => [...prev, product]);
    toast.success(`${product.name} added to wishlist `);
  }
};

const isInWishlist = (id) => {
  return wishlist.some((item) => item.id === id);
};




  return (
    <ShopContext.Provider
      value={{
        products,
        setProducts,
        cartItems,
        addToCart,
        removeFromCart,
        decreaseQuantity,
        increaseQuantity,
        wishlist,
        toggleWishlist,
        isInWishlist,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
