import React from 'react';
import  {Button, Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./tour-item.css";


const TourItem = (props) => {

  return (
      <div>
        <Card className="card">
          <Card.Img className="card-img" variant="top" src={process.env.PUBLIC_URL + "/cuba.jpg"} />
          <Card.Body>
            <Card.Title className="card-title">{props.name}</Card.Title>
            <Card.Title className="card-duration">Duration: {props.duration} Days</Card.Title>
            <Card.Text className="card-description">
              {props.description}
            </Card.Text>
            <Card.Title className="card-cost">Cost: {props.cost}$ </Card.Title>
            <Link to={`/catalog/item/${props.toursId}`} className="card-button">
              <Button variant="primary" className="card-button">
                View more
              </Button>
              </Link>
          </Card.Body>
        </Card>
      </div>
  );
};

export default TourItem;