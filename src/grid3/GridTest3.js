import React, { Component } from 'react';
import ReactTable from 'react-table'

export default class GridTest3 extends Component {
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
        rowData: null, // [], // olympicAthletes.slice(0,200),
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
        // this.state = {gridOptions:this.gridOptions};
    }
    componentDidMount() {
        console.log('componentDidMount');
        // this.setState({colorList: Data.getColors() });
        // this.grid = new RGrid('#grid-1',this.gridOptions);
        this.loadAthletes();
    }
    loadAthletes() {
        (new Promise( (resolve, reject) => {
            this.gridOptions.isGrouped = false;
            this.gridOptions.isDataAlreadyGrouped = false;
            this.gridOptions.pinnedLeftCount = 1;
            resolve('definition-loded')
        })).then( result => {
            if (result === 'definition-loded' ) {
                return (new Promise( (resolve, reject) => {
                    fetch('/data/olympicAthletes.json')
                    .then(response => response.json())
                    .then(data => {
                        console.log('loadAthletes 2.5', data)
                        resolve(data);
                    }).catch(err => {
                        console.error('fail',err);
                        reject(err);
                    });
                }));
            }
        }).then( result  => {
            if (result) {
                const rowData = result.data.slice(0,1000);
                // this.grid.setData(rowData)
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

        const data = [{
            name: 'Tanner Linsley',
            age: 26,
            friend: {
              name: 'Jason Maurer',
              age: 23,
            }
          }]
         
          const columns = [
            {
              Header: () => (
                <span>
                  <i className="fa-tasks" /> Progress
                </span>
              ),
              accessor: "progress",
              Cell: row => (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#dadada",
                    borderRadius: "2px"
                  }}
                >
                  <div
                    style={{
                      width: `${row.value}%`,
                      height: "100%",
                      backgroundColor:
                        row.value > 66
                          ? "#85cc00"
                          : row.value > 33
                            ? "#ffbf00"
                            : "#ff2e00",
                      borderRadius: "2px",
                      transition: "all .2s ease-out"
                    }}
                  />
                </div>
              )
            }
          ];                    
         return (
            <ReactTable
                data={data}
                columns={columns}
              />
         )
    }
}