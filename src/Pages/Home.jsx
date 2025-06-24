import React from "react";
import MostValued from "../Componet/MostValued/MostValued";
import TopRated from "../Componet/TopRated/TopRated";
import NewInStore from "../Componet/NewInStore/NewInStore";
import "./CSS/Home.css";

const Home = () => {
  return (
    <>
    <div>
      <div className="home-layout">
      <TopRated />
      <MostValued />
    </div>
    <NewInStore/>
    </div>
    </>
  );
};

export default Home;
