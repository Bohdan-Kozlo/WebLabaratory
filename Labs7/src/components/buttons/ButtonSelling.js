import React from 'react';
import "./button-selling.css"
import {Link} from "react-router-dom";

const ButtonSelling = () => {
  return (
      <div>
        <Link to={"/catalog"}>
          <button className="button-17" role="button">View More</button>
        </Link>
      </div>
  );
};

export default ButtonSelling;