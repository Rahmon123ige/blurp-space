// // src/context/ShopContext.js
// import React, { createContext, useState } from "react";

// // 1. Create the context
// export const ShopContext = createContext();

// // 2. Create the provider component
// export const ShopProvider = ({ children }) => {
//   const [products, setProducts] = useState([]); // empty for now

//   return (
//     <ShopContext.Provider value={{ products }}>
//       {children}
//     </ShopContext.Provider>
//   );
// };
