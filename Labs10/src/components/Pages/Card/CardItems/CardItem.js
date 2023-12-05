import React, {useEffect, useState} from 'react';
import "./card-item.css"
import {Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

const CardItem = (tour) => {
  const [count, setCount] = useState(useSelector(state => state.countReduce.count));
  const [amount, setAmount] = useState(tour.cost);
  const dispatch = useDispatch();

  const addCardCount = () => {
    let newCount= count +1
    setCount(newCount)
  }

  const getCardCount = () => {
    let newCount = count - 1
    setCount(newCount)
  }

  const calculationAmount = () => {
    const payload = tour.cost * count
    setAmount(payload)
  }


  useEffect(() => {
    calculationAmount()
  }, [count]);

  const handleRemoveTour = () => {
    dispatch({ type: "REMOVE_TOUR", payload: { id: tour.id } });
    console.log(tour.id)
  };


  return (
      <div className="card-item">
        <div className="card-item-wrap">
          <Link to={`/catalog/item/${tour.id}`}>
            <div className="card-item-img">
              <img className="card-img" src={process.env.PUBLIC_URL + '/cuba.jpg'} alt="#" />
            </div>
          </Link>
          <div className="card-item-name">
            <h3>{tour.name}</h3>
          </div>
          <div className="card-item-duration">
            <h5>Duration: {tour.duration} Days</h5>
          </div>
          <div className="card-plus-minus">
            <Button className="button-plus" variant="primary" onClick={addCardCount}>+</Button>
            <h5 className="count">{count}</h5>
            <Button className="button-minus" variant="primary" onClick={getCardCount}>-</Button>

          </div>
          <div className="card-item-remove">
            <Button variant="danger" onClick={handleRemoveTour}>Remove</Button>
          </div>
          <div className="card-costs">
            <p>${amount}</p>

          </div>

        </div>
      </div>
  );
};

export default CardItem;