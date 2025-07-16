import React, { useState, useEffect } from "react";
import Splash from "./Componet/Splash-screen/Splash";
import Navbar from "./Componet/Navbar/Navbar";
import Home from "./Pages/Home";
import Auth from "./Pages/Auth";
import VendorAuth from './Pages/VendorAuth'
import Footer from "./Footer/Footer";
import CategoryPage from "./Pages/CategoryPage";
import ProductDetails from "./Pages/Productdetails";
import { Routes, Route } from 'react-router-dom'

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Splash screen visible for 3 seconds
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return <>{loading ? <Splash /> : (
      <>
      {/* <TopHeader/> */}
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Auth' element={<Auth/>}/>
          <Route path='/VendorAuth' element={<VendorAuth/>}/>
            <Route path="/category/:categoryName" element={<CategoryPage />} />
            <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Footer/>
      </>
    )}</>;
};

export default App;
