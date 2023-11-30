import React, {useEffect, useState} from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import ItemPageButton from "../../../buttons/ItemPageButton";
import PageButton from "../../../buttons/PageButton";
import TourService from "../../../../API/TourService";
import {useDispatch} from "react-redux";
import "./item-page.css";

const ItemPage = () => {
  const { toursID } = useParams();
  const [tour, setTour] = useState(null);
  const dispatch = useDispatch()


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

  const addTourToCard = (tour) => {
    dispatch({type: "ADD_TOUR" , payload: tour})
    console.log("yes")

  }

  return (
      <div className="justify-content-center">
        <Container>
          <Row>
            <Col>
              <div className="image-item">
                <Image className="image" src={process.env.PUBLIC_URL + "/cuba.jpg"} />
              </div>
            </Col>
            <Col>
              <div className="item-params">
                <h1 className="item-name">{tour[0].name}</h1>
                <h4 className="item-duscription">{tour[0].description}</h4>
                <h3 className="item-duration">Duration: {tour[0].duration}</h3>
                <h2 className="item-cost">Cost:{tour[0].cost}$</h2>
              </div>
              <div className="item-buttons">
                <div className="item-button">
                  <Link to={"/catalog"}>
                    <ItemPageButton/>
                  </Link>
                </div>
                <div className="item-button-bay">
                  <Link to={"/card"}>
                    <PageButton onClick={() => addTourToCard(tour[0])}/>
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