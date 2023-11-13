import React, { useState } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';

function MyDropdownButton({tours, setFilteredTours}) {
  const [buttonText, setButtonText] = useState('Filter');

  const handleItemClick = (text) => {
    setButtonText(text);

    let sortedTours = [...tours]

    switch (text) {
      case 'Sorted by cost':
        sortedTours.sort((a, b) => b.cost - a.cost);
        break;
      case 'Sorted by duration':
        sortedTours.sort((a, b) => b.duration - a.duration);
        break;
      default:
        break;
    }

    setFilteredTours(sortedTours);
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
