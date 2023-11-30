import React, {useEffect, useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CardItemsContainer from "./CardItemsContainer/CardItemsContainer";
import "./card.css"
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";


const calculateTotalAmount = (tours) => {
  const totalAmount = tours.reduce((total, tour) => total + tour.cost, 0);
  return totalAmount;
};

  const Card = () => {
    const [tours, setTours] = useState([]);
    const newTours = useSelector(state => state);


    useEffect(() => {
      setTours(newTours);
    }, [newTours]);

    const totalAmount = calculateTotalAmount(tours);

    return (
        <div>
          <Container>
            <h1 className="text-center mt-4">Shopping Cart</h1>

            {tours.length > 0 ? (
                <CardItemsContainer tours={tours} />
            ) : (
                <h1 className="tour-is-empty">Your cart is empty</h1>
            )}

            <div className="total-cost">
              <h4>Total amount: ${totalAmount}</h4>
            </div>
            <div className="buttons">
              <NavLink to="/catalog">
                <Button variant="primary">Go to catalog</Button>
              </NavLink>
              <Button className="buttons-confirm" variant="primary">Confirm</Button>
            </div>
          </Container>
        </div>
    );
  };

export default Card;