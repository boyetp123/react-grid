import React, { Component } from 'react';

export default class RGridHeaderCell extends Component {
    render() {
        const colDef = this.props.colDef;
        return (
            <th key={this.props.label} style={{width: colDef.width}}>
                {this.props.label}
            </th>
        );
    }
}