import React from 'react';

const Converter = props => {
  const { massType, massLabel } = props;

  return (
    <React.Fragment>
      <label>{massLabel === 'gram' ? 'Gram: ' : 'Kg: '}</label>
      <input type="number" value={massType} onChange={props.onChangeMass} />
    </React.Fragment>
  );
};

export default Converter;
