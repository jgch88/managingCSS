import React from 'react';
import logo from './logo.svg';
import './App.css';

import { ThemeProvider } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import theme from './theme.js';

import ButtonWithStyles from './ButtonWithStyles.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ThemeProvider theme={theme}>
          <Button variant="contained" color="primary">ThemeProvider Button</Button>
          <ButtonWithStyles>withStyles Button</ButtonWithStyles>
        </ThemeProvider>

      </header>
    </div>
  );
}

export default App;
