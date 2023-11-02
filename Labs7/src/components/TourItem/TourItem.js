import React from 'react';
import  {Button, Card} from "react-bootstrap";
import "./tour-item.css";


const TourItem = (props) => {
  return (
      <div className="col-md-3 mt-4" id="${id}">
      <div>
        <Card className="card" style={{ width: '19rem'}}>
          <Card.Img className="card-img" variant="top" src={process.env.PUBLIC_URL + "/cuba.jpg"} />
          <Card.Body>
            <Card.Title className="card-title">{props.name}</Card.Title>
            <Card.Title className="card-duration">Duration: {props.duration} Days</Card.Title>
            <Card.Text className="card-description">
              {props.description}
            </Card.Text>
            <Card.Title className="card-cost"> Cost: {props.cost}$ </Card.Title>
            <Button variant="primary" className="card-button">View more</Button>
          </Card.Body>
        </Card>
      </div>
      </div>
  );
};

export default TourItem;