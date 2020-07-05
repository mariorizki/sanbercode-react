import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementAsync, decrementAsync, getJoke } from './actions';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const joke = useSelector(state => state.joke);

  const _increment = () => {
    dispatch(incrementAsync());
  };

  const _decrement = () => {
    dispatch(decrementAsync());
  };

  const _getJoke = () => {
    dispatch(getJoke());
  };

  console.log(_getJoke);
  return (
    <div className="App">
      <header className="App-header">
        <h3>Counter: {counter}</h3>
        <div>
          <button onClick={_decrement}>DECREMENT</button>
          <button onClick={_increment}>INCREMENT</button>
        </div>

        <button onClick={_getJoke}>Read Chuck Norris' Joke</button>

        <p>{joke.joke !== null && joke.joke.value}</p>
      </header>
    </div>
  );
}

export default App;
