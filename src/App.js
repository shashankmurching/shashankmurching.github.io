import React, { Component } from 'react';
import logo from './logo.svg';
import './Styles/App.css';
import Welcome from './Welcome.js';
import AboutMe from './AboutMe.js';

import {Button} from 'react-md';


class App extends Component {
  render() {
    return (
      <div className="App">
      &nbsp;
        <Welcome />
        <AboutMe />
        <Button raised secondary>Mr. Button</Button>
      </div>
    );
  }
}

export default App;
