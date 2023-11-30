import React from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import "./footer.css";
const Footer = () => {
  return (
        <div className="footer">
          <Container>
            <Row className="align-items-center">
              <Col className="text" md={4}>
                <h4>Tour Tickets</h4>
                <p>The best site for finding tourist tickets.</p>
              </Col>
              <Col md={4} className="text-center">
                <div className="footer-logo" >
                  <Image src={process.env.PUBLIC_URL + "/logo1.svg"}/>
                </div>
              </Col>
              <Col md={4} className="d-flex justify-content-end">
                <a href="https://www.instagram.com/" target="_blank">
                  <Image className="items-social" src={process.env.PUBLIC_URL + "/inst.svg"} alt="Соціальна мережа 1" />
                </a>
                <a href="https://www.facebook.com/?locale=uk_UA" target="_blank">
                  <Image className="items-social" src={process.env.PUBLIC_URL + "/fece.svg"} alt="Соціальна мережа 2" />
                </a>
                <a href="https://twitter.com/?lang=uk" target="_blank">
                  <Image className="items-social" src={process.env.PUBLIC_URL + "/twitter.svg"} alt="Соціальна мережа 3" />
                </a>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col md={4} className="text-center">
                <h6 className="footer-copy">2023 @Copyrighting by Iot students Bohdan Kozlo </h6>
              </Col>
            </Row>
          </Container>
        </div>
  );
};

export default Footer;