import React, { Component } from 'react';

function RGridHeaderCell(props) {
    const colDef = props.colDef;
    return (
        <th key={props.label} style={{width: colDef.width}}>
            {props.label}
        </th>
    );
}
export default RGridHeaderCell;