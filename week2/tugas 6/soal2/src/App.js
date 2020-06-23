import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello Bejo!</h1>
      <h3>Welcome to Cat World!</h3>
      <p>To order my food, please fill the form bellow.</p>
      <form action="">
        <label for="name">Name</label>
        <br />
        <input style={{ width: 300 }} type="text" placeholder="name.." />
        <br />
        <label for="date">Delivery Date</label>
        <br />
        <input style={{ width: 300 }} type="date" name="Delivery Date" />
        <br />
        <label for="address">Address</label>
        <br />
        <textarea style={{ width: 300 }} name="address"></textarea>
        <br />
        <label for="quantity">Quantity</label>
        <br />
        <input style={{ width: 300 }} type="number" name="quantity" />
      </form>
    </div>
  );
}

export default App;
