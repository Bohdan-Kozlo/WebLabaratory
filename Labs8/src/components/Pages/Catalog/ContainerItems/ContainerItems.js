import React from 'react';
import TourItem from "../TourItem/TourItem";
import "./container-items.css"


const ContainerItems = ({tours}) => {

  return (
      <div className="container-items mt-5">
        {tours.map((item, key) => (
            <TourItem
                key={key}
                name={item.name}
                duration={item.duration}
                description={item.description}
                cost={item.cost}
                toursId={item.toursId}
            />
        ))}
      </div>
  );
};
export default ContainerItems;
