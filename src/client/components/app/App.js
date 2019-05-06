import React, { Component } from 'react';
import MainComponent from '../mainContent/mainContent';
import './app.css';
import "antd/dist/antd.css";

const Header = () => (
  <div className="header">
    Point5bn Assignment
  </div>
);

const App = () => (
  <>
    <Header />
    <MainComponent />
  </>
);


export default App;
