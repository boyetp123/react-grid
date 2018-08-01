import React, { Component } from 'react';

// export default class RGridDataCell extends Component {
//     render() {
//         const colDef = this.props.colDef;
//         const row = this.props.dataRow;
        
//         return (
//             <td style={{width: colDef.width}}>
//                 {row[colDef.field]}
//             </td>
//         );
//     }
// }


function RGridDataCell(props) {
    const colDef = props.colDef;
    const row = props.dataRow;
    
    return (
        <td style={{width: colDef.width}}>
            {row[colDef.field]}
        </td>
    );
}
export default RGridDataCell;