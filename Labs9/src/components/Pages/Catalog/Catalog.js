import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import Filter from "./Filter/Filter";
import ContainerItems from "./ContainerItems/ContainerItems";
import MyDropdownButton from "../../buttons/DropdownButton";
import "./catalog.css";
import InputCost from "../../inputs/InputCost/InputCost";
import TourService from "../../../API/TourService";

const Catalog = ({tours}) => {
  const [searchInputMin, setSearchInputMin] = useState(-1);
  const [searchInputMax, setSearchInputMax] = useState(1000000000);
  const [searchedTours, setSearchedTours] = useState(tours);


  const searchTourInBetween = async () => {
    const minCost = parseFloat(searchInputMin);
    const maxCost = parseFloat(searchInputMax);
    console.log(maxCost)
    const filteredTours = await TourService.getToursByCostSearch(minCost, maxCost);
    setSearchedTours(filteredTours);
  }

return (
    <div>
      <Container>
        <div className="filter-container">
          <Filter tours={tours} setFilteredTours={setSearchedTours}/>
          <MyDropdownButton tours={searchedTours} setFilteredTours={setSearchedTours}/>
          <div className="filter-cost">
            <InputCost text={"MIN cost"} onChange={(e) => setSearchInputMin(e.target.value)}/>
            <InputCost className="filter-cost-input" text={"MAX cost"}
                       onChange={(e) => setSearchInputMax(e.target.value)}/>
            <Button type="submit" className="filter-cost-button" onClick={searchTourInBetween}>
              Submit
            </Button>
          </div>
        </div>
        {searchedTours.length > 0 ? (
            <ContainerItems tours={searchedTours}/>
        ) : (
            <h1 className="tour-not-found">No tours found based on your criteria.</h1>
        )}
      </Container>
    </div>
);
}
;

export default Catalog;