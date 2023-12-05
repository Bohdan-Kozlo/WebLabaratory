import React, {useEffect, useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CardItemsContainer from "./CardItemsContainer/CardItemsContainer";
import "./card.css"
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

const Card = () => {
    const [tours, setTours] = useState([]);
    const [amount, setAmount] = useState(0)

    const newAmount = useSelector(state => state.amountReduce.amount)
    const newTours = useSelector(state => state.toursReduce);


    useEffect(() => {
      setTours(newTours);
      setAmount(newAmount)
    }, [newTours, newAmount]);

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
              <h4>Total amount: {amount}</h4>
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