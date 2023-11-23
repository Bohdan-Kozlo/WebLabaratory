import React, {useState} from 'react';
import {Container} from "react-bootstrap";
import Filter from "./Filter/Filter";
import ContainerItems from "./ContainerItems/ContainerItems";
import MyDropdownButton from "../../buttons/DropdownButton";
import "./catalog.css";

const Catalog = ({tours, setSearchedTours, searchedTours }) => {


  return (
      <div>
        <Container>
          <div className="filter-container">
            <Filter tours={tours} setFilteredTours={setSearchedTours}/>
            <MyDropdownButton tours={searchedTours} setFilteredTours={setSearchedTours} />
          </div>
          <ContainerItems tours={searchedTours}/>
        </Container>
      </div>
  );
};

export default Catalog;