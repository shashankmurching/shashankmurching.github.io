import React from 'react';
import './styles/App.css';
import Typography from '@material-ui/core/Typography';
import NavBar from './NavBar';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Typography variant="h2" className="Header">
        Shashank Murching
      </Typography>
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
