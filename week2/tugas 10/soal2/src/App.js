import React, { Component } from 'react';
import './App.css';
import Converter from './components/Converter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { kg: 0, gram: 0 };
  }

  onSubmitHandler = e => {
    e.preventDefault();
    alert(`${this.state.gram} gram sama dengan ${this.state.kg} Kg`);
  };

  onChangeGram = e => {
    let gram = e.target.value;
    let kg = gram / 1000;

    this.setState({ gram, kg });
  };

  onChangeKg = e => {
    let kg = e.target.value;
    let gram = kg * 1000;

    this.setState({ gram, kg });
  };

  render() {
    const { kg, gram } = this.state;
    return (
      <div className="App">
        <form onSubmit={this.onSubmitHandler}>
          <Converter
            massLabel="gram"
            massType={gram}
            onChangeMass={this.onChangeGram}
          />
          <Converter
            massLabel="kg"
            massType={kg}
            onChangeMass={this.onChangeKg}
          />
          <button onSubmit={this.onSubmitHandler}>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
