import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import {Welcome} from './Welcome.js'

import {Button} from 'react-md';


class App extends Component {
  render() {
    return (
      <div className="App">
      &nbsp;

        <h1 className="App-header">Hey! Thanks For Stopping By My Site! :)</h1>
        <p className="App-intro">
          This is a continuous work in progress.
          But keep checking in for cool updates!
        </p> 
        <Button raised secondary>Mr. Button</Button>
      </div>
    );
  }
}

export default App;
