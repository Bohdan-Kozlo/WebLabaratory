import React from 'react';
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Selling from "./Selling/Selling";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
      <div>
        <Hero/>
        <Selling/>
      </div>
  );
};

export default Home;