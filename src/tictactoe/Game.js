import React, { Component } from 'react';
import { Board } from './Board'
import './tictactoe.css';

// export class Game extends React.Component {
export class Game extends Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
