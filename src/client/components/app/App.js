import React, { Component } from 'react';
import MainComponent from '../mainContent/mainContent';
import './app.css';

const Header = () => (
  <div className="header">
    Point5bn Assignment
  </div>
);

class App extends Component {

  componentDidMount() {
    fetch('/api/form')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render = () => (
   <>
    <Header />
    <MainComponent/>
   </>
  )
}

export default App;
