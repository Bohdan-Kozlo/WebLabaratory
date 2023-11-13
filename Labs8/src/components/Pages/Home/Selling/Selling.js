import React, {useState} from 'react';
import {Container} from "react-bootstrap";
import SellingItem from "../SellingItem/SellingItem";
import ButtonSelling from "../../../buttons/ButtonSelling";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import "./selling.css";


const Selling = () => {
  const [county, setCounty] = useState([
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
  ]);
  const [firstClick, setFirstClick] = useState(false);

  const addNewItems = () => {
    if (!firstClick) {
      const newItems = [{
        name: "Portugal",
        text: "Portugal is a country where time seems to stand still and music always plays street tunes. This is a place where you can enjoy Caribbean beaches, colorful colonial cities, and a unique Cuban rhythm. Cuba offers you a unique blended experience.",
        img: "cuba.jpg"
      },
        {
          name: "Cipro",
          text: "Cipro is a country where time seems to stand still and music always plays street tunes. This is a place where you can enjoy Caribbean beaches, colorful colonial cities, and a unique Cuban rhythm. Cuba offers you a unique blended experience.",
          img: "cuba.jpg"

        },
        {
          name: "Turkey",
          text: "Turkey is a country where time seems to stand still and music always plays street tunes. This is a place where you can enjoy Caribbean beaches, colorful colonial cities, and a unique Cuban rhythm. Cuba offers you a unique blended experience.",
          img: "cuba.jpg"

        }];
      setCounty([...county, ...newItems]);
      setFirstClick(true);
    } else {
      setCounty(county.slice(0,3));
      setFirstClick(false);
    }
  };

  return (
      <Container>
          <TransitionGroup className="mt-5 grid-container">
            {county.map((country, index) => (
                <CSSTransition
                    key={index}
                    classNames="fade"
                    timeout={300}
                >
                  <div className="grid-item">
                    <SellingItem name={country.name} text={country.text} img={country.img} />
                  </div>
                </CSSTransition>
            ))}
          </TransitionGroup>
        <div className="selling-button">
          <ButtonSelling addNewItem={addNewItems} />
        </div>
      </Container>
  );
};

export default Selling;

