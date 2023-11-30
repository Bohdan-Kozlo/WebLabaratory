import React from 'react';
import {Button} from "react-bootstrap";

const ButtonsCard = (props) => {
  return (
      <div>
        <Button variant="primary">{props.text}</Button>
      </div>
  );
};

export default ButtonsCard;