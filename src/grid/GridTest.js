import React, { Component } from 'react';
import { Grid } from '../lib/mygrid';

export class GridTest extends Component {
    atheleteColumnDefs: any = [
        {headerName: 'Athlete', field: 'athlete', width: '100px', sortable:true, sort: 'desc'},
        {headerName: 'Age', field: 'age', width: '90px' ,type:'number', sortable:true, format:'0'},
        {headerName: 'Country', field: 'country', width: '120px', sortable:true},
        {headerName: 'Year', field: 'year', width: '90px' ,type:'number', format:'0', sortable:true },
        {headerName: 'Date', field: 'date', width: '110px', type:'text', sortable:true},
        {headerName: 'Sport', field: 'sport', width: '200px'},
        {headerName: 'Gold', field: 'gold', width: '100px', type:'number', format:'0,0.00'},
        {headerName: 'Silver', field: 'silver', width: '100px', type:'number', format:'0,0.00'},
        {headerName: 'Bronze', field: 'bronze', width: '100px', type:'number', format:'0,0.00'},
        {headerName: 'Total', field: 'total', width: '100px', type:'number', format:'0,0.00'}
    ];
    filesColumnDefs: any = [
        {headerName: 'Name', field: 'name', width: '105px', sortable:true, sort: 'desc'},
        {headerName: 'Size', field: 'size', width: '90px' ,type:'number', sortable:true, format:'0'},
        {headerName: 'Type', field: 'type', width: '120px'},
        {headerName: 'Modified', field: 'dateModified', width: '90px' ,type:'text', format:'0' }
    ];
    gridOptions: any = {
        columnDefs: this.atheleteColumnDefs, //[],
        rowData: [],
        width:'800px',
        height:'400px',
        rowHeight:'40px',
        pinnedLeftCount:1,
        disableVerticalScroll:false,
        disableHorizontalScroll:false,
        onReady:function(api){
            // api.setDataRow( olympicAthletes );
        }
    };

    constructor(props){
        super(props);
        this.init();
    }

    init() {
        this.state = {gridData: [] };
    }
    componentDidMount() {
        console.log('componentDidMount');
        // this.setState({colorList: Data.getColors() });
        this.grid = new Grid('#grid-1',this.gridOptions)
    }
        
    render() {
        return (
            <div>
                Grid will be here
                <div id="grid-1"></div>
            </div>
        )
    }
}