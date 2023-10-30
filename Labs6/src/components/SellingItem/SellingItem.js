import React from 'react';
import {Card} from "react-bootstrap";
import "./selling-item.css";

const SellingItem = (props) => {

  return (
      <div className="seling-item">
        <Card style={{ width: '23rem' }}>
          <Card.Img variant="top" src={process.env.PUBLIC_URL + "/" + props.img} />
          <Card.Body>
            <Card.Title className="card-title">{props.name}</Card.Title>
            <Card.Text>
              {props.text}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
  );
};

export default SellingItem;