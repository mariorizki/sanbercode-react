import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: '',
      gaji: 0,
      tanggalMasukKerja: '',
      kelamin: '',
      skills: [],
      alamat: ''
    };
  }

  onSubmitHandler = event => {
    event.preventDefault();
    alert(
      `
        Nama saya ${this.state.nama}, gaji saya ${this.state.gaji}, saya mulai kerja pada tanggal ${this.state.tanggalMasukKerja}, saya berkelamin ${this.state.kelamin}, 
        saya memiliki skill ${this.state.skills}, saya tinggal di ${this.state.alamat}.
      `
    );
  };

  onChangeHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onPickHandler = e => {
    let skills = [...this.state.skills];
    let index = skills.findIndex(i => e.target.value === i);
    if (index > 0) {
      skills = [
        ...skills.slice(0, index),
        ...skills.slice(index + 1, skills.length)
      ];
    } else if (index === 0) {
      skills = [...skills.slice(index + 1, skills.length)];
    } else {
      skills.push(e.target.value);
    }

    this.setState({ skills });
  };

  render() {
    const {
      nama,
      gaji,
      tanggalMasukKerja,
      kelamin,
      skills,
      alamat
    } = this.state;

    return (
      <div className="App">
        <form onSubmit={this.onSubmitHandler}>
          <label>Nama : </label>
          <input
            name="nama"
            type="text"
            value={nama}
            onChange={this.onChangeHandler}
          />
          <br />

          <label>Gaji : </label>
          <input
            name="gaji"
            type="number"
            value={gaji}
            onChange={this.onChangeHandler}
          />
          <br />

          <label>Tanggal Masuk Kerja : </label>
          <input
            name="tanggalMasukKerja"
            type="date"
            value={tanggalMasukKerja}
            onChange={this.onChangeHandler}
          />
          <br />

          <label>Kelamin : </label>
          <input
            name="kelamin"
            type="radio"
            value="laki-laki"
            checked={kelamin === 'laki-laki'}
            onChange={this.onChangeHandler}
          />
          <label>laki-laki</label>
          <input
            name="kelamin"
            type="radio"
            value="perempuan"
            checked={kelamin === 'perempuan'}
            onChange={this.onChangeHandler}
          />
          <label>perempuan</label>
          <br />

          <label>Skills :</label>
          <select multiple value={[skills]} onChange={this.onPickHandler}>
            <option value="programming">programming</option>
            <option value="public speaking">public speaking</option>
            <option value="copy writing">copy writing</option>
          </select>
          <br />

          <label>Alamat : </label>
          <textarea
            name="alamat"
            cols="30"
            rows="10"
            value={alamat}
            onChange={this.onChangeHandler}
          ></textarea>
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
