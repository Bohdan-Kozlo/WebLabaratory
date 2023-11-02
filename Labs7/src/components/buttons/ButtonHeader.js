import React from 'react';
import "./button-header.css"

const ButtonHeader = (props) => {
  return (
      <div>
        <button className="button-56" role="button">{props.text}</button>
      </div>
  );
};

export default ButtonHeader;