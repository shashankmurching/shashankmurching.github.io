import React from 'react';
import './styles/NavBar.css';
import Button from '@material-ui/core/Button';
import * as Constants from './Const';

export default function NavBar() {
  return (
    <div className="NavBar">
      {
        Object.keys(Constants.NavButtons).map((button) => (
          <Button target="_" href={Constants.NavButtons[button]}>
            {button}
          </Button>
        ))
      }
    </div>
  );
}
