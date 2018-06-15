import React, { Component } from 'react';

export default class RGridDataCell extends Component {
    render() {
        return (
            <td>
                {this.props.data}
            </td>
        );
    }
}