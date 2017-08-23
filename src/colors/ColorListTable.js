import React, { Component } from 'react';
import { ColorTableHdr } from './ColorTableHdr';
import { ColorTableBody } from './ColorTableBody';
import { Data } from '../Data'

export class ColorListTable extends Component {
  constructor(props){
    super(props);
    this.init();
  }
  init() {
    this.state = {colorList: [] };
    console.log('ColorListTable init', this.state.colorList );
  }
  componentDidMount() {
    console.log('componentDidMount');
    this.setState({colorList: Data.getColors() });
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }  
  render() {
    console.log('render');
    return (
      <div className="colorList init">
        <table>
            <ColorTableHdr/>
            <ColorTableBody colorList={this.state.colorList}/>
        </table>
      </div>
    );
  }
}
