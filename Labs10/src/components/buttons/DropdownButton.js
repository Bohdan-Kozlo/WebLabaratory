import React, { useState } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import TourService from "../../API/TourService";

function MyDropdownButton({setFilteredTours}) {
  const [buttonText, setButtonText] = useState('Filter');

   const handleItemClick = async (text) => {
    try {
      const sortedTour = await TourService.getToursByTypeSorted(text);
      setFilteredTours(sortedTour);
      setButtonText(text);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
      <DropdownButton style={{ marginLeft: "40px" }} className="mt-4" id="dropdown-item-button" title={buttonText}>
        <Dropdown.Item as="button" onClick={() => handleItemClick('Sorted by cost')}>Sorted by cost</Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => handleItemClick('Sorted by duration')}>Sorted by duration</Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => handleItemClick('Do not sort')}>Do not sort</Dropdown.Item>
      </DropdownButton>
  );
}

export default MyDropdownButton;
