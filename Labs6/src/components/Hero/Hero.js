import React from 'react';
import {CardImg, Container, Image} from "react-bootstrap";
import "./Hero.css"


function Hero() {
  return (
      <div className="hero-container">
        <Container>
          <h1 className="hero-header">
            Welcome to our online travel ticket store, where travel dreams come true. We offer a wide selection of tickets for flights around the world at the best prices. Whether you're looking for a ticket for a beach vacation, a business trip, or an adventure tour, we have the perfect option for everyone.
          </h1>
          <div className="hero-benefits">
            <h3>Countries you can visit</h3>
            <img className="hero-imge" src={process.env.PUBLIC_URL + '/chevron-down-svgrepo-com.svg'} alt="іконка" />
          </div>
        </Container>
      </div>
  );
}

export default Hero;