import React, { useState, useEffect } from 'react';
import './App.css';

const App = props => {
  const [state, setState] = useState({
    myState: 'Hello'
  });

  const { myState } = state;

  // component didMount
  useEffect(() => {
    setState({ myState: 'Hello World!' });
  }, []);

  // component didUpdate
  useEffect(() => {
    console.log(`my updated state is ${myState}`);
  });

  // componen willUnmount
  useEffect(() => {
    return console.log('good bye');
  });

  return <div className="hello">Hello</div>;
};

export default App;
