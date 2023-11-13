import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import SellingItem from "../SellingItem/SellingItem";
import ButtonSelling from "../buttons/ButtonSelling";
import "./selling.css"

const county = [
  {
    name: "Spain",
    text: "Spain is a country of sun, passion and rich cultural heritage. This is a place where you can enjoy the endless beaches of the Mediterranean Sea, walk through the narrow streets of ancient cities, taste delicious tapas and wine.",
    img: "spain.jpeg"
  },
  {
    name: "Italy",
    text: "Italy is a country where taste and style combine into one unforgettable travel adventure. This is a place where you can enjoy authentic pizza in Naples, taste great Italian wine in Tuscany, and marvel at masterpieces of art in Florence and Rome.",
    img: "italy.jpg"
  },
  {
    name: "Cuba",
    text: "Cuba is a country where time seems to stand still and music always plays street tunes. This is a place where you can enjoy Caribbean beaches, colorful colonial cities, and a unique Cuban rhythm. Cuba offers you a unique blended experience",
    img: "cuba.jpg"
  }
]
function Selling() {

  return (
      <Container>
        <Row className="mt-5">
          {county.map((country, index) => (
              <Col key={index}>
                <SellingItem name={country.name} text={country.text} img={country.img}/>
              </Col>
          ))
          }
        </Row>
        <div className="selling-button">
         <ButtonSelling/>
        </div>
      </Container>
  );
}

export default Selling;

