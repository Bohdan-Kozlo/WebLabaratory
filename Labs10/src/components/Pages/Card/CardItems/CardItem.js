import React from 'react';
import "./card-item.css"
import {Button} from "react-bootstrap";
import {useDispatch} from "react-redux";

const CardItem = (tour) => {
  const dispatch = useDispatch();

  const handleRemoveTour = () => {
    dispatch({ type: "REMOVE_TOUR", payload: { id: tour.id } });
    console.log(tour.id)
  };


  return (
      <div className="card-item">
        <div className="card-item-wrap">
          <div className="card-item-img">
            <img className="card-img"  src={process.env.PUBLIC_URL + "/cuba.jpg"}  alt={"#"}/>
          </div>
          <div className="card-item-name">
            <h3>{tour.name}</h3>
          </div>
          <div className="card-item-duration">
            <h5>Duration: {tour.duration} Days</h5>

          </div>
          <div className="card-item-remove">
            <Button variant="danger" onClick={handleRemoveTour}>Remove</Button>
          </div>

          <div className="card-cost">
            <p>${tour.cost}</p>

          </div>

        </div>
      </div>
  );
};

export default CardItem;