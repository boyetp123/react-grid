import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import { Data } from './Data'
import { Game } from './tictactoe';
import { ColorListTable } from './colors';

class App extends Component {

  // eslint-disable-next-line
  // constructor() {
  //   super();
  //   // console.log('Data', Data.getColors() );
  // }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <div>
           <Game />
        </div>
        <div>
          <h3> Colors </h3>
          <ColorListTable/>
        </div>
      </div>
    );
  }
}

export default App;
