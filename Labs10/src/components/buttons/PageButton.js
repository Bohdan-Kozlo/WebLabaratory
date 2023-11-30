import React from 'react';
import "./page-button.css";

const PageButton = (props) => {
  return (
      <div>
        <button onClick={props.onClick} className="button-1" role="button">Add to cart</button>
      </div>
  );
};

export default PageButton;