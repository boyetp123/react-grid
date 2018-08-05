import React, { Component } from 'react';
import HeaderColumnsContainer from './rgridHeaderColumnsContainer';
import GridSection from './rgridSection';

export default class ScrollContainerBody extends Component {

    render() {
        const gridContainers = this.props.gridContainers;
        return (
            <div className="rgrid-scroll-container-body">
                <table>
                    <tbody>
                        <tr>
                        { gridContainers.map(container=><GridSection key={container.key} gridData={this.props.gridData} definition={container} /> ) }
                        </tr>
                    </tbody>
                </table>
            </div>
        );    
    }
}