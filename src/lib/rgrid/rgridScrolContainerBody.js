import React, { Component } from 'react';
import HeaderColumnsContainer from './rgridHeaderColumnsContainer';

export default class ScrollContainerBody extends Component {
    renderGrid(definition) {
        let retVal = (
            <td key={definition.key} className={definition.sectionName + "-pane"} >
                <div className={"rgrid-" + definition.sectionName}>
                    {this.renderHeaderColumns(definition.columnsDef)}
                </div>                    
                <div className={"rgrid-" + definition.sectionName} id={this.centerBodyUid}>
                    {this.renderBodyRow(definition.columnsDef)}
                </div>
            </td>
        )
        return retVal;
    }
    renderBodyRow( colDefs ) {
        if (!colDefs ) return null;

        let Presenter = this.props.gridOptions.dataPresenter || this.defaultBodyCellPresenter;
        
        return (
            <div className="rgrid-body">
                <div className="rgrid-body-y-scroll">
                    <table>
                        <tbody>
                            {this.state.gridData.map((row, idx)=>{
                                return (
                                    <tr key={idx}>
                                        {colDefs.map( (column, cIdx)=><Presenter key={idx +'-'+cIdx } colDef={column} dataRow={row}/>)}
                                    </tr>            
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
    renderHeaderColumns(colDefs) {
        if (!colDefs) return null;

        return <HeaderColumnsContainer colDefs={colDefs} />
    }
    
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