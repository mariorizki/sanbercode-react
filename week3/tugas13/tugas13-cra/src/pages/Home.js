import React from 'react';
import Navigation from '../components/Navigation';
import './Layout.css';

const Home = () => {
  return (
    <React.Fragment>
      <Navigation />
      <div className="Layout">
        <h1>Home</h1>
      </div>
    </React.Fragment>
  );
};

export default Home;
