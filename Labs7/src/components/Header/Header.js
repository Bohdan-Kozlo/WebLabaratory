import React from 'react';
import {Col, Container, Nav, Navbar, Image, Form, Row, Button} from "react-bootstrap";
import ButtonHeader from "../buttons/ButtonHeader";
import { Link } from 'react-router-dom';


const Header = () => {
    return (
         <Navbar style={{backgroundColor: '#64eeee', height: '70px'}}>
            <Container>
              <Col xs={1} md={1} >
                <Image style={{maxWidth: "65%"}} src={process.env.PUBLIC_URL + "/logo1.svg"} />
              </Col>
                <Navbar.Brand as={Link} to="/"  className="mx-3">Travel tickets </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-center">
                  <Nav>
                   <Nav.Link as={Link} to="/" className="mx-4">
                     <ButtonHeader text={"Home"}/>
                   </Nav.Link>
                    <Nav.Link as={Link} to="/catalog" className="mx-4">
                      <ButtonHeader text={"Catalog"}/>
                    </Nav.Link>
                    <Nav.Link as={Link} to="/card" className="mx-4">
                      <ButtonHeader text={"Card"}/>
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;