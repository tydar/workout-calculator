import React, { Component } from 'react';
import LiftsFormWrapper from './components/LiftsForm';
import WorkoutTable, { generateWeights } from './components/WorkoutTable';
import NavBar from './components/NavBar';

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
        <LiftsFormWrapper handleSubmit={this.handleLiftsSubmit} />
        {week ? <WorkoutTable days={week} /> : null}
      </div>
    );
  }
}

export default App;
