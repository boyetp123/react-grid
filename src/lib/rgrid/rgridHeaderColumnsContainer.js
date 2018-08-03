import React, { Component } from 'react';
import RGridHeaderCell from './rgridHeaderCell';

export default class HeaderColumnsContainer extends Component {
    render() {
        const colDefs = this.props.colDefs;

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
}