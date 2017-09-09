import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import { Data } from './Data'
import { Game } from './tictactoe';
import { ColorListTable } from './colors';
// import { Grid } from './lib/mygrid';
import { GridTest } from './grid';
import { Tabs, Pane } from './tabs'

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
        <div> {/* tab start here */}

       	<div>
         <Tabs selected={0}>
           <Pane label="Tab 1">
             <div>
               <Game />
            </div>
           </Pane>
           <Pane label="Tab 2">
             <div>
              <h3> Colors </h3>
              <ColorListTable/>
            </div>
           </Pane>
           <Pane label="Tab 3">
             <div>
              <h3> Grid 1 here </h3>
              <GridTest/>
            </div>
           </Pane>
         </Tabs>
       </div>
       
        </div> {/* tab stop here */}

      </div>
    );
  }
}

export default App;
