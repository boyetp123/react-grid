/*
    do sorting on the web workers
*/
<<<<<<< HEAD
=======
/*
 import moment  from 'moment';
 import numeral from 'numeraljs';
 import $ from 'jquery';
*/
>>>>>>> 3861a3c171cc86caf71470b2f29c07e9308e2621
// import {ColumnDef, GridOptions, SortClasses, DefaultFormats, rowObject, 
// 		GridHdrClasses, HAlignmentClasses} from './mygridDefs';
import { ColumnDef, SortClasses, GridHdrClasses, HAlignmentClasses } from './mygridDefs';
import moment  from 'moment';
import numeral from 'numeraljs';
import $ from 'jquery';

export class Grid {
    constructor(selector, gridOptions) {
        // dataposition makers
        this.upperPos = 0;
        this.lowerPos = 0;
        this.upperQueue = 20;
        this.lowerQueue = 20;
        this.vscrollTimeout = null;
        this.hasInitCcompleted = false;
        this.gridContainer = document.querySelector(selector);
        this.setUpProperties(gridOptions);
        this.createGridContainers();
        this.setUpGridDimensions();
        this.render();
        this.setUpAPI();
        this.setEvents();
        if (this.gridOptions.onReady) {
            this.gridOptions.onReady(this.gridOptions.api);
        }
        this.hasInitCcompleted = true;
    }
    createGridContainers() {
        let innerHTMLs = ['<div class="mygrid">'];
        innerHTMLs.push('<div class="mygrid-header">');
        innerHTMLs.push('<table>');
        innerHTMLs.push('<tbody>');
        innerHTMLs.push('<tr>');
        innerHTMLs.push('<td class="left-pane" style="display:none">');
        innerHTMLs.push('<div class="mygrid-left">');
        innerHTMLs.push('<div class="mygrid-header">');
        innerHTMLs.push('<div class="mygrid-header-inner">');
        innerHTMLs.push('<table><thead><tr></tr></thead></table>');
        innerHTMLs.push('</div>');
        innerHTMLs.push('</div>');
        innerHTMLs.push('</div>');
        innerHTMLs.push('</td>');
        innerHTMLs.push('<td class="center-pane">');
        innerHTMLs.push('<div class="mygrid-center">');
        innerHTMLs.push('<div class="mygrid-header">');
        innerHTMLs.push('<div class="mygrid-header-inner">');
        innerHTMLs.push('<table><thead><tr></tr></thead></table>');
        innerHTMLs.push('</div>');
        innerHTMLs.push('</div>');
        innerHTMLs.push('</div>');
        innerHTMLs.push('</td>');
        innerHTMLs.push('<td class="right-pane" style="display:none">');
        innerHTMLs.push('<div class="mygrid-right">');
        innerHTMLs.push('<div class="mygrid-header">');
        innerHTMLs.push('<div class="mygrid-header-inner">');
        innerHTMLs.push('<table><thead><tr></tr></thead></table>');
        innerHTMLs.push('</div>');
        innerHTMLs.push('</div>');
        innerHTMLs.push('</div>');
        innerHTMLs.push('</td>');
        innerHTMLs.push('</tr>');
        innerHTMLs.push('</tbody>');
        innerHTMLs.push('</table>');
        innerHTMLs.push('</div>');
        innerHTMLs.push('<div class="mygrid-scroll-container-body">');
        innerHTMLs.push('<table>');
        innerHTMLs.push('<tbody>');
        innerHTMLs.push('<tr>');
        innerHTMLs.push('<td class="left-pane" style="display:none">');
        innerHTMLs.push('<div class="mygrid-left">');
        innerHTMLs.push('<div class="mygrid-body">');
        innerHTMLs.push('<div class="mygrid-body-y-scroll">');
        innerHTMLs.push('<table><tbody></tbody></table>');
        innerHTMLs.push('</div>');
        innerHTMLs.push('</div>');
        innerHTMLs.push('</div>');
        innerHTMLs.push('</td>');
        innerHTMLs.push('<td class="center-pane">');
        innerHTMLs.push('<div class="mygrid-center">');
        innerHTMLs.push('<div class="mygrid-body">');
        innerHTMLs.push('<div class="mygrid-body-y-scroll">');
        innerHTMLs.push('<table><tbody></tbody></table>');
        innerHTMLs.push('</div>');
        innerHTMLs.push('</div>');
        innerHTMLs.push('</div>');
        innerHTMLs.push('</td>');
        innerHTMLs.push('<td class="right-pane" style="display:none">');
        innerHTMLs.push('<div class="mygrid-right">');
        innerHTMLs.push('<div class="mygrid-body">');
        innerHTMLs.push('<div class="mygrid-body-y-scroll">');
        innerHTMLs.push('<table><tbody></tbody></table>');
        innerHTMLs.push('</div>');
        innerHTMLs.push('</div>');
        innerHTMLs.push('</div>');
        innerHTMLs.push('</td>');
        innerHTMLs.push('</tr>');
        innerHTMLs.push('</tbody>');
        innerHTMLs.push('</table>');
        innerHTMLs.push('</div>'); // <div class="mygrid-scroll-container-body">
        innerHTMLs.push('<div class="mygrid-hscrollbar-container">');
        innerHTMLs.push('<div class="mygrid-hscrollbar-container-left"><div class="scroll-content">&nbsp;</div></div>');
        innerHTMLs.push('<div class="mygrid-hscrollbar-container-center"><div class="scroll-content">&nbsp;</div></div>');
        innerHTMLs.push('<div class="mygrid-hscrollbar-container-right"><div class="scroll-content">&nbsp;</div></div>');
        // innerHTMLs.push('this will be the horizontal scroller')
        innerHTMLs.push('</div>'); // <div class="mygrid-scroller">
        innerHTMLs.push('</div>');
        this.gridContainer.innerHTML = innerHTMLs.join('');
        this.theGrid = this.gridContainer.querySelector('div.mygrid');
        this.gridHeader = this.theGrid.querySelector('.mygrid-header');
        this.gridBody = this.theGrid.querySelector('.mygrid-scroll-container-body');
        this.gridBodyTableContent = this.gridBody.children[0];
        // header left pane
        this.headerLeftPane = this.gridHeader.querySelector('.left-pane');
        this.headerContainerLeft = this.headerLeftPane.querySelector('div.mygrid-header');
        this.headerContainerInnerLeft = this.headerContainerLeft.querySelector('div.mygrid-header-inner');
        this.tableHeaderLeft = this.headerContainerInnerLeft.querySelector('table > thead');
        // header center pane
        this.headerContainerCenter = this.gridHeader.querySelector('.center-pane div.mygrid-header');
        this.headerContainerInnerCenter = this.headerContainerCenter.querySelector('div.mygrid-header-inner');
        this.tableHeaderCenter = this.headerContainerInnerCenter.querySelector('table > thead');
        // body left pane
        this.theGridTdLeftPane = this.gridBody.querySelector('td.left-pane');
        this.theGridLeft = this.theGridTdLeftPane.querySelector('div.mygrid-left');
        this.bodyContainerLeft = this.theGridLeft.querySelector('div.mygrid-body');
        this.bodyContainerYscrollLeft = this.bodyContainerLeft.querySelector('div.mygrid-body-y-scroll');
        this.tableBodyLeft = this.bodyContainerYscrollLeft.querySelector('table > tbody');
        // body center pane
        this.theGridTdCenterPane = this.gridBody.querySelector('td.center-pane');
        this.theGridCenter = this.theGridTdCenterPane.querySelector('div.mygrid-center');
        this.bodyContainerCenter = this.theGridCenter.querySelector('div.mygrid-body');
        this.bodyContainerYscrollCenter = this.bodyContainerCenter.querySelector('div.mygrid-body-y-scroll');
        this.tableBodyCenter = this.bodyContainerYscrollCenter.querySelector('table > tbody');
        // scrollbars
        this.hScrollBarContainer = this.theGrid.querySelector('div.mygrid-hscrollbar-container');
        this.hScrollBarContainerLeft = this.hScrollBarContainer.querySelector('.mygrid-hscrollbar-container-left');
        this.hScrollBarContainerCenter = this.hScrollBarContainer.querySelector('.mygrid-hscrollbar-container-center');
        this.hScrollBarContainerRight = this.hScrollBarContainer.querySelector('.mygrid-hscrollbar-container-right');
    }
    setUpGridDimensions() {
        let scrollerBarWidth = 8;
        let gridOptions = this.gridOptions;
        let hScrollBarContainerHeight = this.hScrollBarContainer.offsetHeight;
        gridOptions.height = gridOptions.height || 'auto';
        this.theGrid.style.width = ((parseInt(gridOptions.width) + scrollerBarWidth) + 'px') || 'auto';
        // this.theGrid.style.height = !gridOptions.disableVerticalScroll ?( this.gridOptions.height || 'auto') : 'auto';
        if (gridOptions.height !== 'auto' && !gridOptions.disableVerticalScroll) {
            let gridParamHeight = parseInt(gridOptions.height);
            let unit = gridOptions.height.replace('' + gridParamHeight, '');
            this.theGrid.style.height = (gridParamHeight + hScrollBarContainerHeight) + unit;
        }
        else {
            this.theGrid.style.height = 'auto';
        }
        if (!gridOptions.disableVerticalScroll) {
            // let achars = this.gridOptions.height.regexp()
            let unit = 'px';
            this.theGrid.style.height = (hScrollBarContainerHeight + parseInt(this.gridOptions.height)) + unit;
        }
        else {
            this.theGrid.style.height = 'auto';
        }
        // this.theGrid.style.height = !gridOptions.disableVerticalScroll ?( this.gridOptions.height || 'auto') : 'auto';
        let totalGridWidth = this.theGrid.offsetWidth - scrollerBarWidth;
        // let pinnedLeftCount = this.gridOptions.pinnedLeftCount;
        let pinnedLeftCount = this.gridOptions.disableHorizontalScroll ? 0 : this.gridOptions.pinnedLeftCount;
        ;
        let totalLeftWidth = 0;
        if (pinnedLeftCount > 0 && this.columnDefs.length > 0) {
            this.theGridTdLeftPane.style.display = '';
            for (let i = 0; i < pinnedLeftCount; i++) {
                totalLeftWidth = Number(this.columnDefs[i].width.replace('px', '').replace('%', ''));
            }
            this.theGridTdLeftPane.style.width = (totalLeftWidth) + 'px';
            this.theGridLeft.style.width = (totalLeftWidth) + 'px';
            this.headerContainerLeft.style.width = (totalLeftWidth) + 'px';
            this.hScrollBarContainerLeft.style.width = (totalLeftWidth) + 'px';
            // this.bodyContainerLeft.style.width = (totalLeftWidth) + 'px';
        }
        this.theGridTdCenterPane.style.width = (totalLeftWidth) + 'px';
        this.theGridCenter.style.width = (totalGridWidth - totalLeftWidth) + 'px';
        this.headerContainerCenter.style.width = (totalGridWidth - totalLeftWidth) + 'px';
        this.hScrollBarContainerCenter.style.width = (totalGridWidth - totalLeftWidth) + 'px';
        // this.bodyContainerCenter.style.width = (totalGridWidth - totalLeftWidth) + 'px';
        // this.hScrollBarContainerRight.style.width = 	
    }
    setUpProperties(gridOptions) {
        let icons = gridOptions.icons || { sortDescending: null, sortAscending: null, groupCollapsed: null, groupExpanded: null };
        this.gridOptions = gridOptions;
        this.gridOptions.rowData = gridOptions.rowData || [];
        this.setColumnDefs(gridOptions.columnDefs);
        this.gridOptions.rowHeight = gridOptions.rowHeight || '30px';
        this.gridOptions.pinnedLeftCount = gridOptions.pinnedLeftCount || 0;
        this.gridOptions.pinnedRightCount = gridOptions.pinnedRightCount || 0;
        this.gridOptions.flexRow = gridOptions.flexRow || false;
        this.gridOptions.disableVerticalScroll = gridOptions.disableVerticalScroll || false;
        this.gridOptions.disableHorizontalScroll = gridOptions.disableHorizontalScroll || false;
        this.gridOptions.disableSorting = gridOptions.disableSorting || true;
        this.gridOptions.equalRowHeights = gridOptions.equalRowHeights || false;
        this.gridOptions.isGrouped = gridOptions.isGrouped || false;
        this.gridOptions.isDataAlreadyGrouped = gridOptions.isDataAlreadyGrouped || false;
        this.gridOptions.icons = {
            sortDescending: icons.sortDescending || '<span>&#x2193;</span>',
            sortAscending: icons.sortAscending || '<span>&#x2191;</span>',
            groupCollapsed: icons.groupCollapsed || '',
            groupExpanded: icons.groupExpanded || ''
        };
        this.gridOptions.icons.sortDescending = '<span class="' + SortClasses.SORT_DESC +
            '" style="display:none">' + this.gridOptions.icons.sortDescending + '</span>';
        this.gridOptions.icons.sortAscending = '<span class="' + SortClasses.SORT_ASC +
            '" style="display:none">' + this.gridOptions.icons.sortAscending + '</span>';
    }
    setUpAPI() {
        this.gridOptions.api = {
            setDataRow: this.setDataRow.bind(this),
            setColumnDefs: this.setColumnDefs.bind(this),
            showBusyIcon: this.showBusyIcon.bind(this),
            hideBusyIcon: this.hideBusyIcon.bind(this),
            setSortFun: this.setSortFun.bind(this)
        };
    }
    setColumnDefs(colDefs) {
        this.columnDefs = [];
        this.columnDefs = colDefs.map((colDef) => {
            return new ColumnDef(colDef.field, colDef.headerName, colDef.type, colDef.format, colDef.cellFormatter, colDef.headerCellFormatter, colDef.sortable, colDef.width, colDef.headerClasses, colDef.cellClasses);
        });
        if (this.hasInitCcompleted) {
            this.setUpGridDimensions();
            this.render();
        }
    }
    createHeader() {
        let arrCenter = [];
        let arrLeft = [];
        let pinnedLeftCount = this.gridOptions.disableHorizontalScroll ? 0 : this.gridOptions.pinnedLeftCount;
        if (this.gridOptions.columnDefs) {
            this.columnDefs.forEach((colDef, colIdx) => {
                if (pinnedLeftCount - 1 >= colIdx) {
                    arrLeft.push(this.createHeaderCell(colDef, colIdx));
                }
                else {
                    arrCenter.push(this.createHeaderCell(colDef, colIdx));
                }
            }, this);
        }
        // console.info('arrLeft.length ',arrLeft.length , arrLeft)
        if (arrLeft.length > 0) {
            this.showElement(this.headerLeftPane);
            this.tableHeaderLeft.innerHTML = '<tr>' + arrLeft.join('') + '</tr>';
        }
        this.tableHeaderCenter.innerHTML = '<tr>' + arrCenter.join('') + '</tr>';
        if (!this.gridOptions.disableVerticalScroll) {
            this.gridBody.style.height = (this.theGrid.offsetHeight
                - this.gridHeader.offsetHeight
                - this.hScrollBarContainer.offsetHeight) + 'px';
        }
        else {
            this.gridBody.style.height = this.bodyContainerCenter.style.height = 'auto';
        }
    }
    createHeaderCell(colDef, colIdx) {
        let styleArr = [];
        let classArr = [GridHdrClasses.GRID_HDR_CELL];
        let icons = this.gridOptions.icons;
        let val = (colDef.headerName || colDef.field);
        let params = {
            colIndex: colIdx,
            classes: classArr,
            colDef: colDef
        };
        if (colDef.width) {
            styleArr.push('width:' + colDef.width + '');
        }
        classArr.push(HAlignmentClasses[colDef.type.toUpperCase()]);
        if (colDef.sortable) {
            classArr.push(SortClasses.SORTABLE);
        }
        if (colDef.hasOwnProperty('headerCellFormatter') && typeof (colDef.headerCellFormatter) === 'function') {
            val = colDef.headerCellFormatter(params);
            classArr = params.classes;
        }
        return '<th class="' + classArr.join(' ') + '" style="' + styleArr.join(';') + '" col-idx="' + colIdx + '">' +
            '<div style="' + styleArr.join(';') + '" >' +
            '<span>' + val + '</span>' + '<span class="' + SortClasses.SORTABLE + '">' +
            icons.sortDescending + icons.sortAscending + '</span>' +
            '</div>' +
            '</th>';
    }
    createElement(tagName, attrs) {
        let el = document.createElement(tagName);
        if (attrs) {
            for (let k in attrs) {
                if (k === 'children') {
                    attrs[k].forEach((child) => {
                        el.appendChild(child);
                    });
                }
                else {
                    el.setAttribute(k, attrs[k]);
                }
            }
        }
        return el;
    }
    createDataCell(rowObj, colDef, rowIndex, colIndex, isFirst, rowGroupLevel) {
        let row = rowObj.data || rowObj;
        let val = row.hasOwnProperty(colDef.field) ? row[colDef.field] : '';
        let styleArr = [];
        let styleArrDiv = [];
        let classArr = ['grid-cell'];
        let isGrouped = rowObj.group && this.gridOptions.isGrouped;
        let isDataAlreadyGrouped = this.gridOptions.isDataAlreadyGrouped;
        let groupedIcon;
        if (isGrouped && isDataAlreadyGrouped && colIndex === 0) {
            // tslint: ignore
            let groupCollapsed = document.createElement('div');
            groupCollapsed.setAttribute('class', 'group-collapse');
            groupCollapsed.setAttribute('style', 'display:' + (!rowObj.expanded ? '' : 'none'));
            groupCollapsed.innerHTML = this.gridOptions.icons.groupCollapsed;
            let groupExpanded = document.createElement('div');
            groupExpanded.setAttribute('class', 'group-expand');
            groupExpanded.setAttribute('style', 'display:' + (rowObj.expanded ? '' : 'none'));
            groupExpanded.innerHTML = this.gridOptions.icons.groupExpanded;
            groupedIcon = document.createElement('div');
            groupedIcon.setAttribute('class', 'grouped-icons');
            groupedIcon.appendChild(groupCollapsed);
            groupedIcon.appendChild(groupExpanded);
        }
        if (colDef.width) {
            styleArr.push('width:' + colDef.width + '');
            styleArrDiv.push('width:' + colDef.width + '');
        }
        if (isFirst && this.gridOptions.rowHeight) {
            styleArr.push('height:' + this.gridOptions.rowHeight);
            // if (isGrouped && isDataAlreadyGrouped && colIndex ===0) {
            if (isDataAlreadyGrouped && colIndex === 0) {
                styleArr.push('padding-left:' + (3 + (rowGroupLevel * 5)) + 'px');
            }
        }
        classArr.push(HAlignmentClasses[colDef.type.toUpperCase()]);
        let params = {
            data: row,
            rowIndex: rowIndex,
            colIndex: colIndex,
            classes: classArr,
            colDef: colDef
        };
        // types		
        if (colDef.hasOwnProperty('cellFormatter') && typeof (colDef.cellFormatter) === 'function') {
            val = colDef.cellFormatter(params);
            classArr = params.classes;
        }
        else if (row.hasOwnProperty(colDef.field)) {
            if (colDef.type === 'number') {
                val = numeral(val).format(colDef.format);
            }
            else if (colDef.type === 'date') {
                val = moment(val).format(colDef.format);
            }
            else if (colDef.type === 'datetime') {
                val = moment(val).format(colDef.format);
            }
        }
        // cellclasses
        if (colDef.hasOwnProperty('cellClasses') && colDef.cellClasses) {
            if (typeof (colDef.cellClasses) === 'function') {
                classArr.push(colDef.cellClasses(params));
            }
            else {
                classArr.push(colDef.cellClasses);
            }
        }
        let kids = [];
        if (groupedIcon) {
            kids.push(groupedIcon);
        }
        kids.push(document.createTextNode(val));
        let out1 = this.createElement('div', {
            'style': styleArr.join(';'),
            children: kids
        });
        let out = this.createElement('td', {
            'class': classArr.join(' '),
            'style': styleArr.join(';'),
            'col-idx': colIndex,
            children: [out1]
        });
        return out;
    }
    createDataRow(row, rowIndex, rowGroupLevel, parentRowIndex, parentId) {
        let startTime = Date.now();
        // console.log('start createDataRow' );
        let pinnedLeftCount = this.gridOptions.disableHorizontalScroll ? 0 : this.gridOptions.pinnedLeftCount;
        ;
        let returnObj = {};
        let centerCount = 0, leftCount = 0;
        parentId = parentId || '';
        let pid = (parentId ? parentId + '-' : '') + row.level + '|' + row.childIndex;
        let trLeft = document.createElement('tr');
        trLeft.setAttribute('pid', pid);
        trLeft.setAttribute('pr-idx', parentRowIndex);
        trLeft.setAttribute('lvl', rowGroupLevel);
        trLeft.setAttribute('r-idx', rowIndex);
        let trCenter = document.createElement('tr');
        trCenter.setAttribute('pid', pid);
        trCenter.setAttribute('pr-idx', parentRowIndex);
        trCenter.setAttribute('lvl', rowGroupLevel);
        trCenter.setAttribute('r-idx', rowIndex);
        // let leftFragment = document.createDocumentFragment();
        // let centerFragment = document.createDocumentFragment();
        this.columnDefs.forEach((colDef, colIdx) => {
            let rowData = row;
            if (pinnedLeftCount - 1 >= colIdx) {
                // leftFragment.appendChild( this.createDataCell(rowData, colDef, rowIndex, colIdx , colIdx === 0, rowGroupLevel) );
                trLeft.appendChild(this.createDataCell(rowData, colDef, rowIndex, colIdx, colIdx === 0, rowGroupLevel));
                leftCount++;
            }
            else {
                // tslint:disable-next-line:max-line-length
                // centerFragment.appendChild( this.createDataCell(rowData, colDef, rowIndex, colIdx , (colIdx - pinnedLeftCount) === 0, rowGroupLevel ) );
                trCenter.appendChild(this.createDataCell(rowData, colDef, rowIndex, colIdx, (colIdx - pinnedLeftCount) === 0, rowGroupLevel));
                centerCount++;
            }
        }, this);
        if (centerCount > 0) {
            // trCenter.appendChild(centerFragment);
            returnObj.centerEl = trCenter;
        }
        if (leftCount > 0) {
            // trLeft.appendChild(leftFragment);
            returnObj.leftEl = trLeft;
        }
        // console.log('end createDataRow- elapse', Date.now() - startTime  );
        return returnObj;
    }
    renderChildrenDataRows(rowData, rowGroupLevel, parentRowIndex, pid) {
        let beforeElement;
        let rowFragments = this.createRowFragments(rowData.children, rowGroupLevel, parentRowIndex, pid);
        if (rowFragments.leftCount > 0) {
            beforeElement = this.tableBodyLeft.querySelector('tr[pid="' + pid + '"]');
            beforeElement.parentElement.insertBefore(rowFragments.leftFragment, beforeElement.nextSibling);
        }
        beforeElement = this.tableBodyCenter.querySelector('tr[pid="' + pid + '"]');
        beforeElement.parentElement.insertBefore(rowFragments.centerFragment, beforeElement.nextSibling);
        // if (this.gridOptions.equalRowHeights === true) {
        // 	this.equalizeBodyHeights();
        // }
    }
    equalizeRowHeights(docFragment1, docFragment2, docFragment3 = null) {
        let arr1 = Array.prototype.slice.call(docFragment1.querySelectorAll('tr'), 0);
        let arr2 = Array.prototype.slice.call(docFragment2.querySelectorAll('tr'), 0);
        let arr3;
        this.avgRowHeight = parseInt(this.gridOptions.rowHeight);
        if (docFragment3) {
            arr3 = Array.prototype.slice.call(docFragment3.querySelectorAll('tr'), 0);
        }
        arr1.forEach((el, idx) => {
            let maxHeight = 0;
            if (docFragment3) {
                if (el.offsetHeight !== arr2[idx].offsetHeight || el.offsetHeight !== arr3[idx].offsetHeight
                    || arr2[idx].offsetHeight !== arr3[idx].offsetHeight) {
                    maxHeight = Math.max.apply(null, [el.offsetHeight, arr2[idx].offsetHeight, arr3[idx].offsetHeight]);
                    arr3[idx].style.height = arr2[idx].style.height = el.style.height = maxHeight + 'px';
                }
            }
            else {
                if (el.offsetHeight !== arr2[idx].offsetHeight) {
                    maxHeight = Math.max(el.offsetHeight, arr2[idx].offsetHeight);
                    arr2[idx].style.height = el.style.height = maxHeight + 'px';
                }
            }
        });
    }
    // equalizeBodyHeights(): void {
    // 	let pinnedLeftCount = this.gridOptions.pinnedLeftCount
    // 	let centerColStartIdx=pinnedLeftCount;
    // 	let tdsLeft = Array.prototype.slice.call( this.tableBodyLeft.querySelectorAll('tbody > tr > td[col-idx="0"]') , 0 );
    // 	let tdsCenter = Array.prototype.slice.call(this.tableBodyCenter.querySelectorAll('tbody > tr > td[col-idx="'+centerColStartIdx+'"]'), 0);
    // 	let len = tdsLeft.length;
    // 	for(let i=0; i < len; i++) {
    // 		let tdleft = tdsLeft[i];
    // 		let tdCenter = tdsCenter[i];
    // 		let lH = tdleft.offsetHeight ;
    // 		let cH = tdCenter.offsetHeight;
    // 		if (tdleft && tdCenter && lH !== cH ) {
    // 			let maxHeight = Math.max( cH , lH );
    // 			tdleft.style.height =  tdCenter.style.height = maxHeight + 'px';
    // 		}
    // 	}
    // }
    initSortWebWorker() {
        let self;
        let sortFun = () => {
            let sortFunc2, sortFunc, fparams;
            self.addEventListener('message', (e) => {
                // console.info('message past to start sorting', e.data );
                let data = e.data;
                let sortedData;
<<<<<<< HEAD
                if (data.message === 'sort') {
                    sortFunc2 = sortFunc(e.data);
                    // console.info('message past to start sorting', e.data, 'sortFunc2', sortFunc2 );
=======
                // let field: string = data.field;
                // let sortingDir: string = data.sortingDir;
                if (data.message === 'sort') {
                    // sortFunc2 = sortFunc(field, sortingDir);	
                    sortFunc2 = sortFunc(e.data);
                    console.info('message past to start sorting', e.data, 'sortFunc2', sortFunc2);
>>>>>>> 3861a3c171cc86caf71470b2f29c07e9308e2621
                    sortedData = data.rowData.sort(sortFunc2);
                    postMessage({ sortedData: sortedData });
                }
                else if (data.message === 'setSortFunction') {
                    let str = data.sortFunc;
                    fparams = str.match(/\(.*\)/g)[0].replace(/\(|\)/g, '').split(',');
                    let fbody = str.substring(str.indexOf('{') + 1, str.lastIndexOf('}')).trim();
                    // sortFunc = new Function(fparams[0], fparams[1], fbody);
                    sortFunc = new Function(fparams[0], fbody);
                    postMessage({});
                }
            });
        };
        let strFun = '(' + sortFun + ')()';
        this.sortWebWorker = new Worker(URL.createObjectURL(new Blob([strFun])));
        this.sortWebWorker.onmessage = this.onSortDone.bind(this);
    }
    onSortDone(msg) {
        // console.info('onSortDone', msg.data )
        if (msg.data && msg.data.sortedData) {
            this.setDataRow(msg.data.sortedData);
        }
        this.hideBusyIcon();
    }
    setSortFun(fun = null) {
        this.gridOptions.onSort = fun;
        if (this.gridOptions.sortOnWebWorker) {
            let sortFun = this.gridOptions.onSort ? this.gridOptions.onSort : this.sortDefaultFun;
            let param = { message: 'setSortFunction', sortFunc: sortFun.toString() };
            setTimeout(() => {
                this.sortWebWorker.postMessage(param);
            }, 10);
        }
    }
    sortDefaultFun(params) {
        let field = params.field;
        let sortDir = params.sortingDir;
        return (a, b) => {
            let retval = 0;
            if (sortDir === 'asc') {
                if (a[field] > b[field]) {
                    retval = 1;
                }
                else if (a[field] < b[field]) {
                    retval = -1;
                }
            }
            else {
                if (a[field] > b[field]) {
                    retval = -1;
                }
                else if (a[field] < b[field]) {
                    retval = 1;
                }
            }
            return retval;
        };
        // return sortFun; 
    }
    removeData(startRow = 0, endRow = 0) {
        if (startRow === 0 && endRow === 0) {
            this.gridOptions.rowData = [];
            this.tableBodyLeft.innerHTML = '';
            this.tableBodyCenter.innerHTML = '';
        }
        else {
            // remove the rows here
        }
    }
    createRowFragments(rowData, rowGroupLevel, parentRowIndex, parentId) {
        let startTime = Date.now();
        // console.log('start createRowFragments' );
        let startRowIndex = this.gridOptions.rowData.length;
        let leftFragment = document.createDocumentFragment();
        let centerFragment = document.createDocumentFragment();
        let leftCount = 0;
        rowData.forEach((row, rowIndex) => {
            let obj = this.createDataRow(row, startRowIndex + rowIndex, rowGroupLevel, parentRowIndex, parentId);
            if (obj.centerEl) {
                centerFragment.appendChild(obj.centerEl);
            }
            if (obj.leftEl) {
                leftFragment.appendChild(obj.leftEl);
                leftCount++;
            }
        });
        // console.log('done createRowFragments elapse', Date.now() - startTime);
        this.equalizeRowHeights(leftFragment, leftFragment);
        // console.log('done createRowFragments elapse after equalizeRowHeights', Date.now() - startTime);
        return {
            centerFragment: centerFragment,
            leftFragment: leftFragment,
            leftCount: leftCount
        };
    }
    createBodyData(rowData, rowGroupLevel, parentRowIndex, parentId) {
        let startTime = Date.now();
        console.log('start createBodyData');
        let rowFragments = this.createRowFragments(rowData, rowGroupLevel, parentRowIndex, parentId);
        if (rowFragments.leftCount > 0) {
            this.tableBodyLeft.appendChild(rowFragments.leftFragment);
            setTimeout(evt => {
                this.hScrollBarContainerLeft.querySelector('.scroll-content').style.width = this.tableBodyLeft.offsetWidth + 'px';
            }, 100);
        }
        this.tableBodyCenter.appendChild(rowFragments.centerFragment);
        setTimeout(evt => {
            this.hScrollBarContainerCenter.querySelector('.scroll-content').style.width = this.tableBodyCenter.offsetWidth + 'px';
        }, 300);
        console.log('done createBodyData elapse', Date.now() - startTime);
    }
    alignHeadersAndDataCellsColumnWidths() {
        this.columnDefs.forEach((columnDef, idx, arr) => {
            if (columnDef.width === 'auto') {
                let th = this.tableHeaderCenter.querySelector('th[col-idx="' + idx + '"]');
                let td = this.tableBodyCenter.querySelector('td[col-idx="' + idx + '"]');
                td.style.width = th.style.width = 'auto';
                let maxWidth = Math.max(th.offsetWdth, td.offsetWdth);
                td.style.width = th.style.width = maxWidth + 'px';
            }
        });
    }
    alignDataRowHeights() {
    }
    render() {
        this.createHeader();
        if (this.gridOptions.rowData.length > 0) {
            this.createBodyData(this.gridOptions.rowData, 0, 0, '');
            this.alignHeadersAndDataCellsColumnWidths();
        }
    }
    getRowDataObj(level, rowIndex, parentRowIndex, trDomElem, parentId) {
        let levelRows = parentId.split('-');
        let out = this.gridOptions.rowData;
        for (let i = 0; i < levelRows.length; i++) {
            let lr = levelRows[i].split('|');
            if (out.children) {
                out = out.children[Number(lr[1])];
            }
            else {
                out = out[Number(lr[1])];
            }
        }
        return out;
    }
    expandCollapseChildren(obj) {
        let pid = obj.trDomElem.getAttribute('pid');
        if (obj.isExpand) {
            let row = this.getRowDataObj(obj.level, obj.rowIndex, obj.parentRowIndex, obj.trDomElem, pid);
            this.renderChildrenDataRows(row, obj.level + 1, obj.rowIndex, pid);
        }
        else {
            this.removeChildrenDataRows(obj.rowIndex, obj.level + 1, pid);
        }
    }
    removeChildrenDataRows(rowIndex, lvl, pid) {
        $(this.tableBodyLeft).find('tr[pid^="' + pid + '-"]').remove();
        $(this.tableBodyCenter).find('tr[pid^="' + pid + '-"]').remove();
    }
    processData(rows, parentNode, level) {
        console.log('start processData');
        let out = rows.map((row, idx) => {
            row.parent = parentNode;
            row.level = level;
            row.childIndex = idx;
            if (typeof (row.children) !== undefined && row.children instanceof Array) {
                let children = this.processData(row.children, row, level + 1);
                row.children = children;
            }
            return row;
        });
        console.log('done processData');
        return out;
    }
    setDataRow(dataRow) {
        if (dataRow.length > 0) {
            this.upperPos = 0;
            this.lowerPos = Math.ceil(parseInt(this.gridOptions.height) / parseInt(this.gridOptions.rowHeight)) + this.lowerQueue;
            this.removeData(0, 0);
            let processedRows = this.processData(dataRow, null, 0);
            this.createBodyData(processedRows, 0, 0, '');
            this.gridOptions.rowData = processedRows;
            this.alignHeadersAndDataCellsColumnWidths();
        }
    }
    appenDataRow(dataRow) {
        if (dataRow.length > 0) {
            let addedRows = this.processData(dataRow, null, 0);
            this.createBodyData(addedRows, 0, 0, '');
            this.gridOptions.rowData = this.gridOptions.rowData.concat();
            this.alignHeadersAndDataCellsColumnWidths();
        }
    }
    manageQueue(scrollEvent) {
        // this.avgRowHeight
        console.info('top', scrollEvent.target.scrollTop, 'bottom', this.gridBodyTableContent.scrollHeight);
    }
    setEvents() {
        let currentLeft = 0;
        let headerContainerInner = this.headerContainerInnerCenter;
        if (this.gridOptions.sortOnWebWorker) {
            this.initSortWebWorker();
        }
        this.setSortFun();
<<<<<<< HEAD
        let onHorizontalScrollEvent = function (event) {
=======
        let onScrollEvent = function (event) {
>>>>>>> 3861a3c171cc86caf71470b2f29c07e9308e2621
            let scrollLeft = event.currentTarget.scrollLeft;
            currentLeft = scrollLeft;
            headerContainerInner.style.left = (scrollLeft * -1) + 'px';
            console.info('scrollLeft', scrollLeft);
        };
        let onVerticalScrollEvent = event => {
            if (this.vscrollTimeout) {
                clearTimeout(this.vscrollTimeout);
                this.vscrollTimeout = null;
            }
            let that = this;
            (function (event1) {
                that.vscrollTimeout = setTimeout(evt => {
                    that.manageQueue(event1);
                }, 10);
            })(event);
        };
        this.gridBody.addEventListener("scroll", onVerticalScrollEvent);
        this.bodyContainerCenter.addEventListener("scroll", onHorizontalScrollEvent.bind(this));
        let sortingDir = '';
        let onClickHeader = function (event) {
            let target = event.target;
            let th = $(target).parents('th')[0];
            let colIdx = Number(th.getAttribute('col-idx'));
            let columnDef = this.columnDefs[colIdx];
            sortingDir = sortingDir === 'asc' ? 'desc' : 'asc';
            if (columnDef.sortable) {
                this.showBusyIcon();
                // let startTime = Date.now();
                let ascDesc = '.' + SortClasses.SORT_ASC + ', .' + SortClasses.SORT_DESC;
                $(this.headerContainerInnerLeft).find(ascDesc).hide();
                $(this.headerContainerInnerCenter).find(ascDesc).hide();
                if (sortingDir === 'asc') {
                    $(th).find('.' + SortClasses.SORT_ASC).show();
                }
                else {
                    $(th).find('.' + SortClasses.SORT_DESC).show();
                }
                let param = { message: 'sort', rowData: this.gridOptions.rowData, field: columnDef.field, sortingDir };
                if (this.gridOptions.sortOnWebWorker) {
                    setTimeout(() => {
                        this.sortWebWorker.postMessage(param);
                    }, 10);
                }
                else {
                    let sortedData, sortFun;
                    if (this.gridOptions.onSort) {
                        sortFun = this.gridOptions.onSort(param);
                    }
                    else {
                        sortFun = this.sortDefaultFun(param);
                    }
                    (new Promise((resolve, reject) => {
                        console.log('sorting data start');
                        sortedData = this.gridOptions.rowData.sort(sortFun);
                        console.log('sorting data done');
                        resolve(sortedData);
                    })).then((data) => {
                        new Promise((resolve, reject) => {
<<<<<<< HEAD
                            console.log('start injecting new sorted data');
                            this.setDataRow(data);
                            console.log('done injecting new sorted data');
=======
                            console.log('injecting new sorted data');
                            this.setDataRow(data);
>>>>>>> 3861a3c171cc86caf71470b2f29c07e9308e2621
                            resolve('ok');
                        });
                    }).then(() => {
                        console.log('hideBusyIcon');
                        this.hideBusyIcon();
                    });
                    // console.info( 'sorting time elapse ', ( Date.now() - startTime ), 'ms' );
                }
            }
        };
        this.gridBody.addEventListener('click', this.onBodyClick.bind(this));
        this.headerContainerInnerLeft.addEventListener("click", onClickHeader.bind(this));
        this.headerContainerInnerCenter.addEventListener("click", onClickHeader.bind(this));
    }
    showBusyIcon() {
        // console.info('showBusyIcon')
        // setTimeout( ()=> {
        if (!this.busyLoader) {
            this.busyLoader = document.createElement('DIV');
            this.busyLoader.className = "loading-animator";
            this.theGrid.appendChild(this.busyLoader);
        }
        this.showElement(this.busyLoader);
        // }, 0);
    }
    hideBusyIcon() {
        // console.info('hideBusyIcon')
        setTimeout(() => {
            this.hideElement(this.busyLoader);
        }, 10);
    }
    showElement(el) {
        if (el) {
            el.style.display = '';
        }
    }
    hideElement(el) {
        if (el) {
            el.style.display = 'none';
        }
    }
    parent(elem, until) {
        until = until || '';
        if (elem && (elem.tagName || '').toUpperCase() === until.toUpperCase()) {
            return elem;
        }
        else if (elem && elem.parentNode) {
            return this.parent(elem.parentNode, until);
        }
        return null;
    }
    onBodyClick(event) {
        let target = event.target;
        if (target) {
            let $target = $(target);
            let $tr = $(target).parents('tr');
            // let tr = this.parent(target,'tr');
            if ($target.parents('.grouped-icons').length > 0) {
                let p = target.parentNode;
                let p2 = p.parentNode;
                let isExpand = false;
                if (p.classList.contains('group-collapse') || target.classList.contains('group-collapse')) {
                    this.hideElement(p2.querySelector('.group-collapse'));
                    this.showElement(p2.querySelector('.group-expand'));
                    isExpand = true;
                }
                else if (p.classList.contains('group-expand') || target.classList.contains('group-expand')) {
                    this.showElement(p2.querySelector('.group-collapse'));
                    this.hideElement(p2.querySelector('.group-expand'));
                    isExpand = false;
                }
                let $tr1 = $($tr[0]);
                let level = Number($tr1.attr('lvl') || '0');
                let rIndex = Number($tr1.attr('r-idx') || '0');
                let prIndex = Number($tr1.attr('pr-idx') || '0');
                this.expandCollapseChildren({ isExpand: isExpand, level: level, rowIndex: rIndex, parentRowIndex: prIndex, trDomElem: $tr[0] });
            }
        }
    }
}
