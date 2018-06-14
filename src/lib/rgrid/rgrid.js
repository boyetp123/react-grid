import React, { Component } from 'react';
import RGridHeaderColumn from './rgridHeaderColumn';
// import { ColumnDef, SortClasses, GridHdrClasses, HAlignmentClasses } from './rgridDefs';
// import moment  from 'moment';
// import numeral from 'numeraljs';
// import $ from 'jquery';

export class RGrid extends Component{
    renderCenterHeader() {
        return (
            <tr>
                <RGridHeaderColumn label={'Center Col1'}/>
                <RGridHeaderColumn label={'Center Col2'}/>
                <RGridHeaderColumn label={'Center Col3'}/>
            </tr>
        );
    }    
    renderLeftHeader() {
        return (
            <tr>
                <RGridHeaderColumn label={'Col1'}/>
                <RGridHeaderColumn label={'Col2'}/>
                <RGridHeaderColumn label={'Col3'}/>
            </tr>
        );
    }
    renderRightHeader() {
        return (
            <tr>
                <RGridHeaderColumn label={'Col1'}/>
                <RGridHeaderColumn label={'Col2'}/>
                <RGridHeaderColumn label={'Col3'}/>
            </tr>
        );
    }
    render() {
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
