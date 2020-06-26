import React from 'react';

const List = () => {
  const numbers = [1, 3, 5, 7, 9, 11];

  return (
    <React.Fragment>
      {numbers.map((number, index) => {
        return <li key={index}>{number}</li>;
      })}
    </React.Fragment>
  );
};

export default List;
