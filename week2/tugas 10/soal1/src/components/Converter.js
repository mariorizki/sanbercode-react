import React from 'react';

const Converter = props => {
  const { timeLabel, timeType } = props;
  return (
    <React.Fragment>
      <label>{timeLabel === 'detik' ? 'Detik :' : 'Menit :'}</label>
      <input type="number" value={timeType} onChange={props.onChangeTime} />
    </React.Fragment>
  );
};

export default Converter;
