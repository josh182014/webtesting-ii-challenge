import React from 'react';
import Display from './components/display/Display'
import Dashboard from './components/dashboard/Dashboard'
import './App.css';

class App extends React.Component {
  state = {
    balls: 0,
    strikes: 0,
    fouls: 0,
    hits: 0,
  }

  addStrike = e => {
    let newValue = this.state.strikes
    if (this.state.strikes === 2 ) {
      this.setState({ [e.target.name]: 0, balls: 0, fouls: 0 })
    }
    else {
      this.setState({ [e.target.name]: newValue + 1 })
    }
  }

  addBall = e => {
    let newValue = this.state.balls
    if (this.state.balls === 3 ) {
      this.setState({ [e.target.name]: 0, strikes: 0, fouls: 0 })
    }
    else {
      this.setState({ [e.target.name]: newValue + 1 })
    }
  }

  addHit = e => {
    let newValue = this.state.hits
    this.setState({ [e.target.name]: newValue + 1, strikes: 0, balls: 0, fouls: 0 })
  }

  addFoul = e => {
    let newValue = this.state.fouls
    this.setState({ fouls: newValue + 1})
    if (this.state.strikes === 0 ) {
      this.setState({ strikes: 1 })
    }
    else if (this.state.strikes === 1 ) {
      this.setState({ strikes: 2 })
    }
  }

  render() {
    return (
      <div className="App">
      <h2>Baseball Stadium</h2>
      <Display count={this.state}/>
      <Dashboard count={this.state} addHit={this.addHit} addStrike={this.addStrike} addFoul={this.addFoul} addBall={this.addBall} />
      </div>
    );
  }
}

export default App;
