import React, { Component } from 'react';
import HeaderColumnsContainer from './rgridHeaderColumnsContainer';

export default class ScrollContainerBody extends Component {

    render() {
        const gridContainers = this.props.gridContainers;
        return (
            <div className="rgrid-scroll-container-body">
                <table>
                    <tbody>
                        <tr>
                            { gridContainers.map(container=>this.renderGrid(container)) }
                        </tr>
                    </tbody>
                </table>
            </div>
        );    
    }
}