import React from 'react';
import Box from '@mui/material/Box';
import {IDataGrid} from "./IDataGrid";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
export function MUIDataGrid(props:IDataGrid) {
    const {columns, rows, pSize, rowsPerPageOptions} = props
    const [pageSize, setPageSize] = React.useState<number>(pSize);
    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={pageSize}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                rowsPerPageOptions={[5, 10, 20]}
                pagination
            />
        </Box>
    );
}
export default MUIDataGrid;
