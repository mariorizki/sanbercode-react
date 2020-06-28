import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.inputSkills = React.createRef();
  }

  submitHandler = e => {
    e.preventDefault();
    const {
      nama,
      gaji,
      tanggalMasukKerja,
      kelamin,
      skills,
      alamat
    } = this.form;
    let selectedSkills = [...skills.selectedOptions].map(item => item.value);
    alert(
      `
        Nama saya ${nama.value}, gaji saya ${gaji.value}, saya mulai kerja pada tanggal ${tanggalMasukKerja.value}, saya berkelamin ${kelamin.value}, 
        saya memiliki skill ${selectedSkills}, saya tinggal di ${alamat.value}.
      `
    );
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.submitHandler} ref={form => (this.form = form)}>
          <label>Nama : </label>
          <input name="nama" type="text" />
          <br />

          <label>Gaji : </label>
          <input name="gaji" type="number" />
          <br />

          <label>Tanggal Masuk Kerja : </label>
          <input name="tanggalMasukKerja" type="date" />
          <br />

          <label>Kelamin : </label>
          <input name="kelamin" type="radio" value="laki-laki" />
          <label>laki-laki</label>
          <input name="kelamin" type="radio" value="perempuan" />
          <label>perempuan</label>
          <br />

          <label>Skills :</label>
          <select multiple name="skills">
            <option value="programming">programming</option>
            <option value="public speaking">public speaking</option>
            <option value="copy writing">copy writing</option>
          </select>
          <br />

          <label>Alamat : </label>
          <textarea name="alamat" cols="30" rows="10"></textarea>
          <br />

          <button type="submit" onSubmit={this.submitHandler}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default App;
