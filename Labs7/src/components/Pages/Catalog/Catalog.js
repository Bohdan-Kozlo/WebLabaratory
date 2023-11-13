import React from 'react';
import {Container} from "react-bootstrap";
import Filter from "../../Filter/Filter";
import ContainerItems from "../../ContainerItems/ContainerItems";

const Catalog = () => {
  return (
      <div>
        <Container>
          <Filter/>
          <ContainerItems/>
        </Container>
      </div>
  );
};

export default Catalog;