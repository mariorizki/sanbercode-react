import React from 'react';

const Converter = props => {
  console.log(props);
  const { lengthLabel, lengthValue } = props;

  let label = () => {
    if (lengthLabel === 'millimetre') {
      label = 'Millimetre : ';
    } else if (lengthLabel === 'metre') {
      label = 'Metre : ';
    } else {
      label = 'Kilometre';
    }
  };

  label(lengthLabel);

  return (
    <React.Fragment>
      <label>{label}</label>
      <input type="number" value={lengthValue} onChange={props.handler} />
    </React.Fragment>
  );
};

export default Converter;
