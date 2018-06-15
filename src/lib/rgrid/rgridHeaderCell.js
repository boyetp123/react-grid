import React, { Component } from 'react';

export default class RGridHeaderCell extends Component {

    render() {
        return (
            <th key={this.props.label}>
                {this.props.label}
            </th>
        );
    }
}