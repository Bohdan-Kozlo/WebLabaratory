import React from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import "./filter.css";
import MyDropdownButton from "../buttons/DropdownButton";

const Filter = () => {
  return (
      <div className="filter-container">
        <Form inline >
          <Row className="mt-4">
            <Col xs="auto">
              <Form.Control
                  type="text"
                  placeholder="Search"
                  className=" mr-sm-2"
              />
            </Col>
            <Col xs="auto">
              <Button type="submit">Submit</Button>
            </Col>
          </Row>
        </Form>
        <MyDropdownButton/>
      </div>
  );
};

export default Filter;