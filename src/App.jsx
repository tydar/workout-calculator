import React, { Component } from 'react';
import LiftsFormWrapper from './components/LiftsForm';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <LiftsFormWrapper />
      </div>
    );
  }
}

export default App;
