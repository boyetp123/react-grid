import React, { Component } from 'react';
import RGridHeaderCell from './rgridHeaderCell';
import RGridDataCell from './rgridDataCell';
// import { ColumnDef, SortClasses, GridHdrClasses, HAlignmentClasses } from './rgridDefs';
// import moment  from 'moment';
// import numeral from 'numeraljs';
// import $ from 'jquery';

export default class RGrid extends Component {
    renderBodyRow(row, idx) {
        console.info('renderBodyRow', idx)
        const colDefs = this.props.gridOptions.columnDefs;
        const presenter = this.props.gridOptions.dataPresenter || RGridDataCell;
        return (
            <tr key={idx}>
                {colDefs.map(column=><presenter colDef={column} dataRow={row}/>)}
            </tr>
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
                            <div className="mygrid-left">
                                <div className="mygrid-body">
                                    <div className="mygrid-body-y-scroll">
                                    <table>
                                        <tbody></tbody>
                                    </table>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td className="center-pane">
                            <div className="mygrid-center">
                                <div className="mygrid-body">
                                    <div className="mygrid-body-y-scroll">
                                    <table>
                                        <tbody>
                                            {this.props.gridOptions.rowData.map((row, idx)=>{
                                                return this.renderBodyRow(row, idx);
                                            })}
                                        </tbody>
                                    </table>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td className="right-pane" style={{display:"none"}}>
                            <div className="mygrid-right">
                                <div className="mygrid-body">
                                    <div className="mygrid-body-y-scroll">
                                    <table>
                                        <tbody></tbody>
                                    </table>
                                    </div>
                                </div>
                            </div>
                        </td>
                        </tr>
                    </tbody>
                </table>
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
                                    <div className="mygrid-header">
                                        <div className="mygrid-header-inner">
                                        <table>
                                            <thead>
                                                {this.renderLeftHeader()}
                                            </thead>
                                        </table>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className="center-pane">
                                <div className="mygrid-center">
                                    <div className="mygrid-header">
                                        <div className="mygrid-header-inner">
                                        <table>
                                            <thead>
                                                {this.renderCenterHeader()}
                                            </thead>
                                        </table>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className="right-pane" style={{display:"none"}}>
                                <div className="mygrid-right">
                                    <div className="mygrid-header">
                                        <div className="mygrid-header-inner">
                                        <table>
                                            <thead>
                                                {this.renderRightHeader()}
                                            </thead>
                                        </table>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
    renderCenterHeader() {
        const colDefs = this.props.gridOptions.columnDefs;
        return (
            <tr>
                {colDefs.map( (columns, idx)=><RGridHeaderCell colDef={columns} key={idx} label={columns.label}/>)}
            </tr>
        );
    }    
    renderLeftHeader() {
        const colDefs = this.props.gridOptions.columnDefs;
        // return (
        //     <tr>
        //         {arr.map((columns, idx)=><RGridHeaderCell colDef={columns} key={idx} label={columns}/>)}
        //     </tr>
        // );
        return null;
    }
    renderRightHeader() {
        const colDefs = this.props.gridOptions.columnDefs;
        // return (
        //     <tr>
        //         {arr.map((columns, idx)=><RGridHeaderCell colDef={columns} key={idx} label={columns}/>)}
        //     </tr>
        // );
        return null;
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
}
