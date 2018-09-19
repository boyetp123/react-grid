import React, { Component } from 'react';
import ReactDOM from "react-dom";
import _ from 'lodash';
import GridSection from './rgridSection';

import ScrollContainerBody from './rgridScrolContainerBody'
// import RGridBodyRow from './rgridBodyRow';
// import HeaderColumnsContainer from './rgridHeaderColumnsContainer'


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

    renderGridMain() {
        const gridContainers = [
            {columnsDef:null, sectionName:'left', key: 1},
            {columnsDef:this.props.gridOptions.columnDefs, sectionName:'center', key: 2},
            {columnsDef:null, sectionName:'right', key: 3}
        ]
        return <ScrollContainerBody gridData={this.state.gridData} gridOptions={this.props.gridOptions} gridContainers={gridContainers}/>        
    }

    // eslint-disable-next-line
    render() {
        return  (
            <div className="rgrid"> 
                {this.renderGridMain()}

                {/* <div className="rgrid-hscrollbar-container">
                    <div className="rgrid-hscrollbar-container-left">
                        <div className="scroll-content">&nbsp;</div>
                    </div>
                    <div className="rgrid-hscrollbar-container-center">
                        <div className="scroll-content">&nbsp;</div>
                    </div>
                    <div className="rgrid-hscrollbar-container-right">
                        <div className="scroll-content">&nbsp;</div>
                    </div>
                </div> */}
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
