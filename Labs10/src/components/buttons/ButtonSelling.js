import React from 'react';
import "./button-selling.css"


const ButtonSelling = (props) => {
  return (
      <div>
          <button onClick={props.addNewItem} className="button-17" role="button">View More</button>
      </div>
  );
};

export default ButtonSelling;