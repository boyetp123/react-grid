import React, { Component } from 'react';

export default class RGridHeaderCell extends Component {

    render() {
        return (
            <td>
                {this.props.label}
            </td>
        );
    }
}