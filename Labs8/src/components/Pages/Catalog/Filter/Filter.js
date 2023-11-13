import React, {useState} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import "./filter.css";


const Filter = ({ tours, setFilteredTours }) => {
  const [searchInput, setSearchInput] = useState('');

  const searchTours = (e) => {
    e.preventDefault();

    const regex = new RegExp(searchInput, 'i');

    const filteredTours = tours.filter((ticket) => regex.test(ticket.name));

    setFilteredTours(filteredTours);
  };

  return (
      <div className="filter-container">
        <Form inline>
          <Row className="mt-4">
            <Col xs="auto">
              <Form.Control
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
              />
            </Col>
            <Col xs="auto">
              <Button type="submit" onClick={searchTours}>
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
  );
};


export default Filter;