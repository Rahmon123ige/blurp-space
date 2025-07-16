// src/Context/ShopContext.jsx
import React, { createContext, useState } from "react";
import AllProduct from "../Data/AllProduct";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState(AllProduct);

  return (
    <ShopContext.Provider value={{ products }}>
      {children}
    </ShopContext.Provider>
  );
};
