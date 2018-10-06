import React, { Component } from 'react';
import LiftsFormWrapper from './components/LiftsForm';
import WorkoutTables from './components/WorkoutTables';
import NavBar from './components/NavBar';
import { generateWeights } from './utils/utils';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleLiftsSubmit = this.handleLiftsSubmit.bind(this);
    this.state = {
      week: null,
    };
  }

  handleLiftsSubmit(formData) {
    const week = generateWeights(formData);
    this.setState({
      week,
    });
  }

  render() {
    const { week } = this.state;
    return (
      <div>
        <NavBar />
        {week ? <WorkoutTables days={week} /> : <LiftsFormWrapper handleSubmit={this.handleLiftsSubmit} />}
      </div>
    );
  }
}

export default App;
