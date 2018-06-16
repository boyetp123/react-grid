import React, { Component } from 'react';

export default class RGridDataCell extends Component {
    render() {
        const colDef = this.props.colDef;
        const row = this.props.dataRow;
        
        return (
            <td style={{width: colDef.width}}>
                {row[colDef.field]}
            </td>
        );
    }
}