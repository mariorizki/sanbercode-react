import React, { Component } from 'react';
import './App.css';
import Converter from './components/Converter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { millimetre: 0, metre: 0, km: 0 };
  }

  onSubmit = e => {
    e.preventDefault();
    alert(
      `${this.state.millimetre} millimetre equal to ${this.state.metre} metre, and ${this.state.millimetre} milimetre equal to ${this.state.km} Km`
    );
  };

  millimetreHandler = e => {
    let millimetre = e.target.value;
    let metre = millimetre / 1000;
    let km = metre / 1000;

    this.setState({ millimetre, metre, km });
  };

  metreHandler = e => {
    let metre = e.target.value;
    let millimetre = metre * 1000;
    let km = metre / 1000;

    this.setState({ millimetre, metre, km });
  };

  kmHandler = e => {
    let km = e.target.value;
    let metre = km * 1000;
    let millimetre = metre * 1000;

    this.setState({ millimetre, metre, km });
  };

  render() {
    const { millimetre, metre, km } = this.state;
    return (
      <div className="App">
        <form onSubmit={this.onSubmit}>
          <Converter
            lengthLabel="millimetre"
            lengthValue={millimetre}
            handler={this.millimetreHandler}
          ></Converter>

          <Converter
            lengthLabel="metre"
            lengthValue={metre}
            handler={this.metreHandler}
          ></Converter>

          <Converter
            lengthLabel="km"
            lengthValue={km}
            handler={this.kmHandler}
          ></Converter>
          <button type="submit" onSubmit={this.onSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default App;
