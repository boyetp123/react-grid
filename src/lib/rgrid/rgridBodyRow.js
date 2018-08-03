import React, { Component } from 'react';
import RGridDataCell from './rgridDataCell';

export default class RGridBodyRow extends Component {
    constructor(props) {
        super(props)
        // this.state = {gridData:[]};
        this.defaultBodyCellPresenter = RGridDataCell;
    }
    render() {
        const colDefs = this.props.colDefs;

        if (!colDefs ) return null;
        let gridData = this.props.gridData;
        const Presenter = this.props.dataPresenter || this.defaultBodyCellPresenter;
        
        return (
            <div className="rgrid-body">
                <div className="rgrid-body-y-scroll">
                    <table>
                        <tbody>
                            {gridData.map((row, idx)=>{
                                return (
                                    <tr key={idx}>
                                        {colDefs.map( (column, cIdx)=><RGridDataCell key={idx +'-'+cIdx } colDef={column} dataRow={row}/>)}
                                    </tr>            
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }    
}