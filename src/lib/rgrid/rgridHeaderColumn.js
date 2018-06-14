import React, { Component } from 'react';

export default class RGridHeaderColumn extends Component {

    render() {
        return (
            <td>
                {this.props.label}
            </td>
        );
    }
}