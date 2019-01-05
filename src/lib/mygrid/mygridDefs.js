/*
interface Map<K, V> {
    clear(): void;
    delete(key: K): boolean;
    // entries(): IterableIterator<[K, V]>;
    forEach(callbackfn: (value: V, index: K, map: Map<K, V>) => void, thisArg?: any): void;
    get(key: K): V;
    has(key: K): boolean;
    // keys(): IterableIterator<K>;
    set(key: K, value?: V): Map<K, V>;
    size: number;
    // values(): IterableIterator<V>;
    // [Symbol.iterator]():IterableIterator<[K,V]>;
    // [Symbol.toStringTag]: string;
}

interface MapConstructor {
    new <K, V>(): Map<K, V>;
    // new <K, V>(iterable: Iterable<[K, V]>): Map<K, V>;
    prototype: Map<any, any>;
}
declare var Map: MapConstructor;

var AlignmentClasses = new Map();
AlignmentClasses.set("NUMBER",'text-right');
AlignmentClasses.set("TEXT",'text-left');
AlignmentClasses.set("DATE",'text-center');
*/
export const HAlignmentClasses = {
    NUMBER: 'text-right',
    TEXT: 'text-left',
    DATE: 'text-center',
    DATETIME: 'text-center'
};
export const GridHdrClasses = {
    GRID_HDR_CELL: 'grid-hdr-cell'
};
export const SortClasses = Object.freeze({
    SORT_DESC: 'sort-descending',
    SORT_ASC: 'sort-ascending',
    SORT_ICONS: 'sort-icons',
    SORTABLE: 'sortable'
});
export const DefaultFormats = Object.freeze({
    NUMBER: '0,0.0000',
    TEXT: '',
    DATE: 'MM/DD/YYYY',
    DATETIME: 'MM/DD/YYYY h:mm:ss'
});
export class ColumnDef {
    constructor(field, headerName, type = 'text', format, cellFormatter = null, headerCellFormatter = null, sortable = false, width = 'auto', headerClasses, cellClasses) {
        this.type = 'text';
        this.width = 'auto'; // string like '100px' or '100%' or auto
        this.field = field;
        this.headerName = headerName;
        this.type = type;
        this.format = format || DefaultFormats[type.toLowerCase()];
        this.cellFormatter = cellFormatter;
        this.sortable = sortable || false;
        this.width = width;
        this.headerClasses = headerClasses;
        this.cellClasses = cellClasses;
    }
}
