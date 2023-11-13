import React from 'react';
import { Row } from 'react-bootstrap';
import TourItem from "../TourItem/TourItem";

const tours = [
  {
    name: "Cuba",
    duration: 7,
    description: "Cuba is a beautiful country",
    cost: 1000
  },
  {
    name: "Spain",
    duration: 5,
    description: "Spain is a beautiful country",
    cost: 1500
  },
  {
    name: "Italy",
    duration: 4,
    description: "Italy is a beautiful country",
    cost: 1000
  },
  {
    name: "Portugal",
    duration: 8,
    description: "Portugal is a beautiful country",
    cost: 1200
  },
  {
    name: "Cipro",
    duration: 7,
    description: "Cipro is a beautiful country",
    cost: 800
  },
  {
    name: "Turkey",
    duration: 14,
    description: "Turkey is a beautiful country",
    cost: 1500
  },

]

const ContainerItems = () => {
  return (
      <div className="container mt-5">
        <Row className="justify-content-lg-end" id="items-container">
          {
            tours.map((item, key) => (
                <TourItem name = {item.name} duration = {item.duration} description = {item.description} cost = {item.cost}/>
            ))
          }
        </Row>
      </div>
  );
};

export default ContainerItems;
