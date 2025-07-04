import React, { useState, useEffect } from "react";
import Splash from "./Componet/Splash-screen/Splash";
import Navbar from "./Componet/Navbar/Navbar";
import Home from "./Pages/Home";
import Footer from "./Footer/Footer";
// import TopHeader from "./Componet/TopHeader/TopHeader";

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
        <Home/>
        <Footer/>
      </>
    )}</>;
};

export default App;
