import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Game } from './tictactoe';
import { ColorListTable } from './colors';
import { GridTest } from './grid';
import GridTest2 from './grid2/GridTest';
import { Tabs, Pane } from './tabs'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import ReduxApp from './redux/components/App'
import rootReducer from './redux/reducers'
import ReactTable from "react-table";

class App extends Component {

  // eslint-disable-next-line
  constructor() {
    super();
    this.store = createStore(rootReducer);
  }
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
           <Pane label="React Grid">
             <div>
              <h3> Grid 2 here </h3>
              <GridTest2/>
            </div>
           </Pane>
           <Pane label="Redux">
             <div>
              <h3> Redux here </h3>
              <Provider store={this.store}>
                <ReduxApp />
              </Provider>
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
