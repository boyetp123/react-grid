import React, { Component } from 'react';
import RGridHeaderCell from './rgridHeaderCell';
// import { ColumnDef, SortClasses, GridHdrClasses, HAlignmentClasses } from './rgridDefs';
// import moment  from 'moment';
// import numeral from 'numeraljs';
// import $ from 'jquery';

export default class RGrid extends Component{
    renderCenterHeader() {
        const arr = ['Center Col1', 'Center Col4', 'Center Col3']
        return (
            <tr>
                {arr.map(columns=><RGridHeaderCell label={columns}/>)}
            </tr>
        );
    }    
    renderLeftHeader() {
        const arr = ['Left Col1', 'Left Col4', 'Left Col3']
        return (
            <tr>
                {arr.map(columns=><RGridHeaderCell label={columns}/>)}
            </tr>
        );
    }
    renderRightHeader() {
        const arr = ['Right Col1', 'Right Col4', 'Right Col3']
        return (
            <tr>
                {arr.map(columns=><RGridHeaderCell label={columns}/>)}
            </tr>
        );
    }
    render() {
        console.info('props', this.props.gridOptions)
        return  (
            <div className="mygrid"> 
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
                                            <tbody></tbody>
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
