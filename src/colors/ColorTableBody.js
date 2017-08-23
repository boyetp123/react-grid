import React, { Component } from 'react';

// export class Game extends React.Component {
export class ColorTableBody extends Component {
  test = 'qr';
  
  // eslint-disable-next-line
  constructor(props, context) {
    super(props, context);
  }

  render() {
    let colorList = () => this.props.colorList.map((color, idx) => {
      console.log('colorList', this.test);
      return (
            <tr key={idx}>
                <td>{color.color}</td>
                <td>{color.category}</td>
                <td>{color.type}</td>
                <td> 
                    <div>{color.code.rgba}</div> - <div>{color.code.hex}</div>
                </td>
            </tr>
      );
    });
      
    console.log('ColorTableBody');
    return (
        <tbody>
           {colorList()}
        </tbody>
    );
  }
}
