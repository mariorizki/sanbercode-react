import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      kelamin: '',
      skills: []
    };

    this.inputNama = React.createRef();
    this.inputGaji = React.createRef();
    this.inputAlamat = React.createRef();
    this.inputFile = React.createRef();
  }

  onSubmit = event => {
    alert(
      `
        Nama saya ${this.inputNama.current.value}, gaji saya ${this.inputGaji.current.value}, saya berkelamin ${this.state.kelamin}, 
        saya memiliki skill ${this.state.skills}, saya tinggal di ${this.inputAlamat.current.value}. ${this.inputFile.current.files[0].value}
      `
    );

    event.preventDefault();
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleOnPick = event => {
    let skills = [...this.state.skills];
    let index = skills.findIndex(e => event.target.value === e);
    if (index > 0) {
      skills = [
        ...skills.slice(0, index),
        ...skills.slice(index + 1, skills.length)
      ];
    } else if (index === 0) {
      skills = [...skills.slice(index + 1, skills.length)];
    } else {
      skills.push(event.target.value);
    }

    this.setState({ skills });
  };

  render() {
    const { kelamin, skills } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <label>Nama:</label>
        <input name="nama" type="text" ref={this.inputNama} />
        <br />

        <label>Gaji:</label>
        <input name="gaji" type="number" ref={this.inputGaji} />
        <br />

        <label>Kelamin:</label>
        <br />
        <input
          type="radio"
          name="kelamin"
          value="laki-laki"
          checked={kelamin === 'laki-laki'}
          onChange={this.handleChange}
        ></input>
        <label>laki-laki</label>
        <br />
        <input
          type="radio"
          name="kelamin"
          value="perempuan"
          checked={kelamin === 'perempuan'}
          onChange={this.handleChange}
        ></input>
        <label>perempuan</label>
        <br />

        <label>Skills:</label>
        <select value={[skills]} multiple onChange={this.handleOnPick}>
          <option value="programming">programming</option>
          <option value="public speaking">public speaking</option>
          <option value="UI design">UI design</option>
        </select>
        <br />

        <label>Alamat:</label>
        <textarea name="alamat" type="text" ref={this.inputAlamat} />
        <br />

        <label name="file" type="file" ref={this.inputFile}>
          Slip Gaji:
        </label>

        <button onSubmit={this.onSubmit}>Submit</button>
      </form>
    );
  }
}

export default App;
