import React, { Component } from 'react';
import ReactDOM from "react-dom";
import RGridHeaderCell from './rgridHeaderCell';
import RGridDataCell from './rgridDataCell';
import _ from 'lodash';
// import { ColumnDef, SortClasses, GridHdrClasses, HAlignmentClasses } from './rgridDefs';
// import moment  from 'moment';
// import numeral from 'numeraljs';
// import $ from 'jquery';

export default class RGrid extends Component {
    constructor(props) {
        super(props);
        this.defaultBodyCellPresenter = RGridDataCell;
        this.centerBodyUid = _.uniqueId('cbody-');
        this.leftBodyUid = _.uniqueId('lbody-');
        this.rightBodyUid = _.uniqueId('rbodybody-');
        this.state = {gridData:[]};
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
    renderGridMain() {
        
        const gridContainers = [
            {columnsDef:null, sectionName:'left', key: 1},
            {columnsDef:this.props.gridOptions.columnDefs, sectionName:'center', key: 2},
            {columnsDef:null, sectionName:'right', key: 3}
        ]
        
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
    renderHeaderColumns(colDefs) {
        if (!colDefs) return null;

        return (
            <div className="rgrid-header">
                <div className="rgrid-header-inner">
                <table>
                    <thead>
                        <tr>
                            {colDefs.map( (columns, idx)=><RGridHeaderCell colDef={columns} key={idx} label={columns.label}/>)}
                        </tr>
                    </thead>
                </table>
                </div>
            </div>
        );    
    }

    // eslint-disable-next-line
    render() {
        return  (
            <div className="rgrid"> 
                {this.renderGridMain()}

                <div className="rgrid-hscrollbar-container">
                    <div className="rgrid-hscrollbar-container-left">
                        <div className="scroll-content">&nbsp;</div>
                    </div>
                    <div className="rgrid-hscrollbar-container-center">
                        <div className="scroll-content">&nbsp;</div>
                    </div>
                    <div className="rgrid-hscrollbar-container-right">
                        <div className="scroll-content">&nbsp;</div>
                    </div>
                </div>
        </div>
        );
    }

    setData(data) {
        this.setState({gridData: data});
        // this.props.gridOptions.rowData = data;
        // ReactDOM.render(this.renderBodyRow(this.props.gridOptions.columnDefs),
        //     document.getElementById(this.centerBodyUid)
        // );
    }

}
