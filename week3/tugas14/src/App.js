import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>Counter: {this.props.count}</h3>
          <div>
            <button
              onClick={() => {
                this.props.dispatch({ type: 'DECREMENT' });
              }}
            >
              DECREMENT
            </button>
            <button
              onClick={() => {
                this.props.dispatch({ type: 'INCREMENT' });
              }}
            >
              INCREMENT
            </button>
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

export default connect(mapStateToProps)(App);
