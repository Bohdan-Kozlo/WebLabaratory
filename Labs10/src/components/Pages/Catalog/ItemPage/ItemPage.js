import React, {useEffect, useState} from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import ItemPageButton from "../../../buttons/ItemPageButton";
import PageButton from "../../../buttons/PageButton";
import TourService from "../../../../API/TourService";
import {useDispatch} from "react-redux";
import Form from 'react-bootstrap/Form';
import "./item-page.css";

const ItemPage = () => {
  const { toursID } = useParams();
  const [tour, setTour] = useState(null);
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  const addTour = () => {
    dispatch({
      type: 'ADD_TOUR',
      payload: {
        id: tour[0].toursId,
        name: tour[0].name,
        cost: tour[0].cost,
        duration: tour[0].duration,
        count: count,
      }
    });
  };

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const id = parseInt(toursID);
        const fetchedTour = await TourService.getTourById(id);
        setTour(fetchedTour);
      } catch (error) {
        console.error('Error fetching tour:', error);
      }
    };

    fetchTour();
  }, [toursID]);

  if (!tour) {
    return <div>Loading...</div>;
  }

  return (
      <div className="justify-content-center">
        <Container>
          <Row>
            <Col>
              <div className="image-item">
                <Image className="image" src={process.env.PUBLIC_URL + '/cuba.jpg'} />
              </div>
            </Col>
            <Col>
              <div className="item-params">
                <h1 className="item-name">{tour[0].name}</h1>
                <h4 className="item-duscription">{tour[0].description}</h4>
                <h3 className="item-duration">Duration: {tour[0].duration}</h3>
                <h2 className="item-cost">Cost:{tour[0].cost}$</h2>
              </div>
              <Form.Control
                  type="text"
                  placeholder="Count card"
                  aria-label="Disabled input example"
                  className="form-count"
                  onChange={(e) => setCount(parseInt(e.target.value) || 1)}
              />
              <div className="item-buttons">
                <div className="item-button">
                  <Link to={'/catalog'}>
                    <ItemPageButton />
                  </Link>
                </div>
                <div className="item-button-bay">
                  <Link to={'/card'}>
                    <PageButton onClick={addTour} />
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
  );
};

export default ItemPage;