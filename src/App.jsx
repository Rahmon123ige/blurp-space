import React, { useState, useEffect } from "react";
import Splash from "./Componet/Splash-screen/Splash";
import Navbar from "./Componet/Navbar/Navbar";
import Hero from "./Componet/Hero/Hero";
import CategoryShow from "./Componet/Category-show/CategoryShow";
import Banner from "./Componet/banner/Banner";
import Home from "./Pages/Home";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Splash screen visible for 3 seconds
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return <>{loading ? <Splash /> : (
      <>
        <Navbar />
        <Hero />
        <CategoryShow/>
        <Banner/>
        <Home/>
        
      </>
    )}</>;
};

export default App;
