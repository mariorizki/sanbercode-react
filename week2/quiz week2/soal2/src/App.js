import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const list = [
      'Nama: Mario',
      'Pekerjaan: Front-end developer',
      'Hobi: Membaca'
    ];

    return (
      <div>
        <ul>
          {list.map((el, index) => {
            return <li key={index}>{el}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
