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
        this.centerBodyUid = _.uniqueId('cbody-')
        this.leftBodyUid = _.uniqueId('lbody-')
        this.rightBodyUid = _.uniqueId('rbodybody-')
    }
    renderBodyRow( colDefs ) {
        if (!colDefs || !this.props.gridOptions.rowData) return null;

        let Presenter = this.props.gridOptions.dataPresenter || this.defaultBodyCellPresenter;
        console.info('renderBodyRow', Presenter)
        return (
            <div className="mygrid-body">
                <div className="mygrid-body-y-scroll">
                    <table>
                        <tbody>
                            {this.props.gridOptions.rowData.map((row, idx)=>{
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
    renderBody() {
        // console.info('renderBody')
        return (
            <div className="mygrid-scroll-container-body">
                <table>
                    <tbody>
                        <tr>
                        <td className="left-pane" style={{display:"none"}}>
                            <div className="mygrid-left" id={this.leftBodyUid}>
                                {this.renderBodyRow( null )}
                            </div>
                        </td>
                        <td className="center-pane">
                            <div className="mygrid-center" id={this.centerBodyUid}>
                                {this.renderBodyRow(this.props.gridOptions.columnDefs)}
                            </div>
                        </td>
                        <td className="right-pane" style={{display:"none"}}>
                            <div className="mygrid-right" id={this.rightBodyUid}>
                                {this.renderBodyRow( null )}
                            </div>
                        </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
    renderHeaderColumns(colDefs) {
        if (!colDefs) return null;

        return (
            <div className="mygrid-header">
                <div className="mygrid-header-inner">
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
    renderHeader() {
        return (
            <div className="mygrid-header">
                <table>
                    <tbody>
                        <tr>
                            <td className="left-pane" style={{display:"none"}}>
                                <div className="mygrid-left">
                                    {this.renderHeaderColumns(null)}
                                </div>
                            </td>
                            <td className="center-pane">
                                <div className="mygrid-center">
                                    {this.renderHeaderColumns(this.props.gridOptions.columnDefs)}
                                </div>
                            </td>
                            <td className="right-pane" style={{display:"none"}}>
                                <div className="mygrid-right">
                                    {this.renderHeaderColumns(null)}
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
    render() {
        console.info('props', this.props.gridOptions)
        return  (
            <div className="mygrid"> 
                {this.renderHeader()}
                {this.renderBody()}

                <div className="mygrid-hscrollbar-container">
                    <div className="mygrid-hscrollbar-container-left">
                        <div className="scroll-content">&nbsp;</div>
                    </div>
                    <div className="mygrid-hscrollbar-container-center">
                        <div className="scroll-content">&nbsp;</div>
                    </div>
                    <div className="mygrid-hscrollbar-container-right">
                        <div className="scroll-content">&nbsp;</div>
                    </div>
                </div>
        </div>             
        );
    }

    setData(data) {
        this.props.gridOptions.rowData = data;
        ReactDOM.render(this.renderBodyRow(this.props.gridOptions.columnDefs),
            document.getElementById(this.centerBodyUid)
        )
        ;
    }

}
