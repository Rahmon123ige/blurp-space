import React from "react";
import Hero from "../Componet/Hero/Hero";
import CategoryShow from "../Componet/Category-show/CategoryShow";
import Banner from "../Componet/banner/Banner";
import MostValued from "../Componet/MostValued/MostValued";
import TopRated from "../Componet/TopRated/TopRated";

import Gadgets from "../Componet/Category/Categories/Gadgets";
import Fashion from "../Componet/Category/Categories/fashion";
import ImageMove from "../Componet/ImageMove/ImageMove";
import ProductShowcase from "../Componet/ProductShowcase/ProductShowcase";
import ProductShow from "../Componet/ProductShow/ProductShow";
import AboutBanner from "../Componet/AboutBanner/AboutBanner";


import "./CSS/Home.css";

const Home = () => {
  return (
    <>
    <div>
      
      <Hero/>
      <ProductShowcase/>
      <CategoryShow/>
      <ProductShowcase/>
      <Banner/>
      <div className="home-layout">
      <TopRated />
      <MostValued />
    </div>
    <ProductShowcase/>
    <Gadgets/>
   <ImageMove/>
   <ProductShowcase/>
    <Fashion/>
    <MostValued />
    <ProductShow/>
    <MostValued />
    <ProductShow/>
    <Gadgets/>
    <ProductShow/>
    <ProductShow/>
    <MostValued />     {/** this is where the repeat start from*/} 
    <ProductShow/>
    <ProductShow/>
    <MostValued />
    <ProductShow/>
    <ProductShow/>
    <MostValued />
    <ProductShow/>
    <ProductShow/>
    <MostValued />
    <ProductShow/>
    <ProductShow/>
    <MostValued />
    <AboutBanner/>
    <ProductShow/>
    <ProductShow/>
    <MostValued />
    <ProductShow/>
    <ProductShow/>
    <MostValued />
    <ProductShow/>
    <ProductShow/>
    <MostValued />
    <ProductShow/>
    <ProductShow/>
    <MostValued />
    </div>
    </>
  );
};

export default Home;
