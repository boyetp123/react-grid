import React, { Component } from 'react';

// export class Game extends React.Component {
export class ColorTableHdr extends Component {
  render() {
    return (
        <thead>
            <tr>
                <th>Color Name</th>
                <th>Category</th>
                <th>Type</th>
                <th>Code</th>
            </tr>
        </thead>
    );
  }
}
