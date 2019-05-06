import React, { Component } from 'react';
import MainComponent from '../mainContent/mainContent';

class App extends Component {
  render = () => (
   <div style={{ width: '100%', textAlign: 'center'}}>
     Header
     <MainComponent/>
   </div>
  )
}

export default App;
