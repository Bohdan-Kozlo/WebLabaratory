import React, {useEffect, useState} from 'react';
import "./card-item.css"
import {Button} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {decrementCount, incrementCount} from "../../../../Redux/action";

const CardItem = (tour) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(tour.count);
  const [amount, setAmount] = useState(tour.cost * tour.count);

  const increment = (name) => {
    dispatch(incrementCount(name));
    setCount(count + 1);
  };

  const decrement = (name) => {
    if (count > 1) {
      dispatch(decrementCount(name));
      setCount(count - 1);
    } else {
      removeTour(name);
    }
  };

  const removeTour = (name) => {
    dispatch({ type: 'REMOVE_TOUR', payload: { name: name } });
  };

  useEffect(() => {
    let amount = tour.cost * count;
    setAmount(amount);
  }, [count]);

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
            <Button className="button-minus" variant="primary" onClick={() => decrement(tour.name)}>
              -
            </Button>
            <h5 className="count">{count}</h5>
            <Button className="button-plus" variant="primary" onClick={() => increment(tour.name)}>
              +
            </Button>
          </div>
          <div className="card-item-remove">
            <Button variant="danger" onClick={() => removeTour(tour.name)}>
              Remove
            </Button>
          </div>
          <div className="card-costs">
            <p>${amount}</p>
          </div>
        </div>
      </div>
  );
};

export default CardItem;