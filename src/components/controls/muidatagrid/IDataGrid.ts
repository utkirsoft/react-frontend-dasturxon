import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
export interface IDataGrid {
    columns:GridColDef[]
    rows?:any
    pSize:number
    rowsPerPageOptions:number

}
