import React, { Component } from 'react';
import HeaderColumnsContainer from './rgridHeaderColumnsContainer'
import RGridBodyRow from './rgridBodyRow';

export default class GridSection extends Component {

    render() {
        const definition = this.props.definition
        let retVal = (
            <td key={definition.key} className={definition.sectionName + "-pane"} >
                <div className={"rgrid-" + definition.sectionName}>
                    <HeaderColumnsContainer colDefs={definition.columnsDef} />
                </div>                    
                <div className={"rgrid-" + definition.sectionName} id={this.centerBodyUid}>
                    <RGridBodyRow dataPresenter={null} colDefs={definition.columnsDef} gridData={this.props.gridData}/>
                </div>
            </td>
        )
        return retVal;
    }
    
}