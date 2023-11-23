import React from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import "./item-page.css";
import {Link, useParams} from "react-router-dom";
import ItemPageButton from "../../../buttons/ItemPageButton";
import PageButton from "../../../buttons/PageButton";
const ItemPage = ({ tours }) => {
  const { toursID } = useParams();

  const findToursById = (toursID) => {
    console.log('toursID:', toursID);
    const tour = tours.find((tour) => tour.toursId === parseInt(toursID, 10));
    console.log('tour:', tour);
    return tour || null;
  };

  const tour = findToursById(toursID);

  if (!tour) {
    return <div>Тур не знайдено</div>;
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
                <h1 className="item-name">{tour.name}</h1>
                <h4 className="item-duscription">{tour.description}</h4>
                <h3 className="item-duration">Duration: {tour.duration} Days</h3>
                <h2 className="item-cost">Cost: {tour.cost}$</h2>
              </div>
              <div className="item-buttons">
                <div className="item-button">
                  <Link to={"/catalog"}>
                    <ItemPageButton/>
                  </Link>
                </div>
                <div className="item-button-bay">
                  <PageButton/>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
  );
};
export default ItemPage;