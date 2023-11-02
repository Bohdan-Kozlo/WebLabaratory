import React from 'react';
import {Col, Container, Nav, Navbar, Image} from "react-bootstrap";
import ButtonHeader from "../buttons/ButtonHeader";



const Header = () => {
    return (
         <Navbar style={{backgroundColor: '#64eeee', height: '99px'}}>
            <Container>
              <Col xs={1} md={1} >
                <Image className="header-img" src={process.env.PUBLIC_URL + "/logo1.svg"} />
              </Col>
                <Navbar.Brand href="#home"  className="mx-3">Travel tickets </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-center">
                  <Nav>
                   <Nav.Link href="#home" className="mx-4">
                     <ButtonHeader text={"Home"}/>
                   </Nav.Link>
                    <Nav.Link href="#home" className="mx-4">
                      <ButtonHeader text={"Catalog"}/>
                    </Nav.Link>
                    <Nav.Link href="#home" className="mx-4">
                      <ButtonHeader text={"Card"}/>
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;