import React, { Component } from 'react';
import ReactDOM from "react-dom";
import HeaderColumnsContainer from './rgridHeaderColumnsContainer'
import ScrollContainerBody from './rgridScrolContainerBody'
import _ from 'lodash';
import RGridBodyRow from './rgridBodyRow';
// import { ColumnDef, SortClasses, GridHdrClasses, HAlignmentClasses } from './rgridDefs';
// import moment  from 'moment';
// import numeral from 'numeraljs';
// import $ from 'jquery';

export default class RGrid extends Component {
    constructor(props) {
        super(props);
        this.centerBodyUid = _.uniqueId('cbody-');
        this.leftBodyUid = _.uniqueId('lbody-');
        this.rightBodyUid = _.uniqueId('rbodybody-');
        this.state = {gridData:[]};
    }

    renderGrid(definition) {
        let retVal = (
            <td key={definition.key} className={definition.sectionName + "-pane"} >
                <div className={"rgrid-" + definition.sectionName}>
                    <HeaderColumnsContainer colDefs={definition.columnsDef} />
                </div>                    
                <div className={"rgrid-" + definition.sectionName} id={this.centerBodyUid}>
                    <RGridBodyRow dataPresenter={null} colDefs={definition.columnsDef} gridData={this.state.gridData}/>
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

        // return <ScrollContainerBody gridOptions={this.props.gridOptions} gridContainers={gridContainers}/>
        
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
