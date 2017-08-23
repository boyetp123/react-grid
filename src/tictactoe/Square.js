import React, { Component } from 'react';
import './tictactoe.css';

// export class Square extends React.Component {
export class Square extends Component {
  render() {
    return (
      <button className="square">
        { this.props.squareNumber}
      </button>
    );
  }
}


// ========================================

// ReactDOM.render(
//   <Game />,
//   document.getElementById('root')
// );
