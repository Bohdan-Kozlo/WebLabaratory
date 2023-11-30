import React from 'react';
import {Container} from "react-bootstrap";
import CardItem from "../CardItems/CardItem";


const CardItemsContainer = ({tours}) => {
  return (
      <div>
        <Container>
          <div>
          {tours.map((item, key) => (
              <CardItem
                  key={key}
                  id={item.toursId}
                  name={item.name}
                  duration={item.duration}
                  cost={item.cost}
              />
          ))}
          </div>
        </Container>
      </div>
  );
};

export default CardItemsContainer;