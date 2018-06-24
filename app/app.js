import React, { Component } from 'react';
import styled from 'styled-components';

import Welcome from './Welcome';
import Slider from './Slider';

const Container = styled.div`
  padding-top: 10px;
  text-align: center;
  height: 100%;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Welcome />
        <Slider />
      </Container>
    );
  }
}

export default App;
