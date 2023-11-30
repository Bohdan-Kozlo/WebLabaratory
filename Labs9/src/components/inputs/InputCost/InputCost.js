import React from 'react';
import Form from 'react-bootstrap/Form';

const InputCost = ({className, text, onChange}) => {

  return (
      <div className={className}>
        <Form.Control onChange={onChange} size="sm" type="number" placeholder={text} />
      </div>
  );
};

export default InputCost;