import React from 'react';
import logo from './logo.svg';
import './App.css';

import Terminal from './Terminal'
import TerminalComponent from './TerminalComponent'

function App() {
  return (
    <div className="App">
      <div>{"hello"}</div>
      {/* <Terminal /> */}
      <TerminalComponent />
    </div >
  );
}

export default App;
