import React, { Component } from 'react';
import  RGrid  from '../lib/rgrid/rgrid';
import olympicAthletes from './olympicAthletes';

export default class GridTest extends Component {
    atheleteColumnDefs = [
        {label: 'Athlete', field: 'athlete', width: '100px', sortable:true, sort: 'desc'},
        {label: 'Age', field: 'age', width: '90px' ,type:'number', sortable:true, format:'0'},
        {label: 'Country', field: 'country', width: '120px', sortable:true},
        {label: 'Year', field: 'year', width: '90px' ,type:'number', format:'0', sortable:true },
        {label: 'Date', field: 'date', width: '110px', type:'text', sortable:true},
        {label: 'Sport', field: 'sport', width: '200px'},
        {label: 'Gold', field: 'gold', width: '100px', type:'number', format:'0,0.00'},
        {label: 'Silver', field: 'silver', width: '100px', type:'number', format:'0,0.00'},
        {label: 'Bronze', field: 'bronze', width: '100px', type:'number', format:'0,0.00'},
        {label: 'Total', field: 'total', width: '100px', type:'number', format:'0,0.00'}
    ];
    filesColumnDefs = [
        {label: 'Name', field: 'name', width: '105px', sortable:true, sort: 'desc'},
        {label: 'Size', field: 'size', width: '90px' ,type:'number', sortable:true, format:'0'},
        {label: 'Type', field: 'type', width: '120px'},
        {label: 'Modified', field: 'dateModified', width: '90px' ,type:'text', format:'0' }
    ];
    gridOptions = {
        columnDefs: this.atheleteColumnDefs, 
        rowData: [], // olympicAthletes
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
    athletesData=[];
    constructor(props){
        super(props);
        this.init();
    }

    init() {
        this.state = {gridOptions:this.gridOptions};
    }
    componentDidMount() {
        console.log('componentDidMount');
        // this.setState({colorList: Data.getColors() });
        this.grid = new RGrid('#grid-1',this.gridOptions);
        this.loadAthletes();
    }
    loadAthletes() {
        (new Promise( (resolve, reject) => {
            this.gridOptions.isGrouped = false;
            this.gridOptions.isDataAlreadyGrouped = false;
            // this.gridOptions.api.setColumnDefs(this.atheleteColumnDefs );
            this.gridOptions.pinnedLeftCount = 1;
            resolve('definition-loded')
        })).then( result => {
            // this.gridOptions.api.showBusyIcon();
            if (result === 'definition-loded' ) {
                return (new Promise( (resolve, reject) => {
                    fetch('/data/olympicAthletes.json')
                    .then(response => response.json())
                    .then(data => {
                        resolve(data);
                    }).catch(err => {
                        console.error('fail',err);
                        reject(err);
                    });
                }));
            }
        }).then( (result ) => {
            if (result) {
                // this.athletesData = result.data;
                this.gridOptions.rowData = result.data.slice(0,50);
                this.setState({gridOptions:this.gridOptions})
                this.render();
                // this.gridOptions.api.setDataRow(result.data.slice(0,1000) );
                // this.gridOptions.api.hideBusyIcon();
            }
        })
        // fetch('/data/olympicAthletes.json')
        // .then(response => response.json())
        // .then(data => {
        //     this.gridOptions.api.setDataRow(data.data.slice(0,200) );
        // }).catch(err => {
        //     console.error('fail',err);
        // });
    }    

    render() {
        return (
            <div>
                rGrid will be here
                <div id="grid-2">
                    <RGrid gridOptions={this.gridOptions}/>
                </div>
            </div>
        )
    }
}