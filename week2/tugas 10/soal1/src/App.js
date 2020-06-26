import React, { Component } from 'react';
import './App.css';
import Converter from './components/Converter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { detik: 0, menit: 0 };
  }

  onSubmitHandler = e => {
    e.preventDefault();
    alert(`${this.state.detik} detik sama dengan ${this.state.menit} menit`);
  };

  onChangeDetik = e => {
    let detik = e.target.value;
    let menit = detik / 60;

    this.setState({ detik, menit });
  };

  onChangeMenit = e => {
    let menit = e.target.value;
    let detik = menit * 60;
    this.setState({ detik, menit });
  };

  render() {
    const { detik, menit } = this.state;
    return (
      <div className="App">
        <form onSubmit={this.onSubmitHandler}>
          <Converter
            timeLabel="detik"
            timeType={detik}
            onChangeTime={this.onChangeDetik}
          />
          <Converter
            timeLabel="menit"
            timeType={menit}
            onChangeTime={this.onChangeMenit}
          />
          <br />
          <button type="submit" onSubmit={this.onSubmitHandler}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default App;
