import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import getSalah from './getSalah';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timings: {},
    }
  }

  componentWillMount() {
    getSalah()
    .then(res => {
      const timings = res.data.data.timings
      this.setState({
        timings,
      })
    })
  }

  render () {
    console.log('state', this.state);
    return (
      <div className="App">
        <header className="App-header">
          <h2>Fajr</h2>: <p>{this.state.timings["Fajr"]}</p>
        </header>
      </div>
    );
  }
}

export default App;
