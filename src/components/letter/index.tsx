import React, {useState} from 'react';
import MUIDataGrid from "../controls/muidatagrid";
import {GridApi, GridCellValue, GridColDef, GridRowParams} from "@mui/x-data-grid";
import {Button} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import SecurityIcon from '@mui/icons-material/Security';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import {
    DataGrid,
    GridActionsCellItem,
    GridRowId,
    GridColumns,
} from '@mui/x-data-grid';
import '../auth/style.scss'
import {GridColumnApi} from "@mui/x-data-grid/models/api/gridColumnApi";
import CreateModal from "./CreateModal";



const pSize = 5
const rows = [
    {id: 1, lastName: 'Snow', firstName: 'Jon', age: null},
    {id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42},
    {id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45},
    {id: 4, lastName: 'Stark', firstName: 'Arya', age: 16},
    {id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 25},
    {id: 6, lastName: 'Melisandre', firstName: null, age: null},
    {id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44},
    {id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36},
    {id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65},
];
const Letter = () => {
    const [user, setUser] = useState(null)

    const editUser = React.useCallback(
        (par:GridRowParams) => () => {
            setUser(par.row)
        },
        [],
    );

    const toggleAdmin = React.useCallback(
        (id: GridRowId) => () => {
            alert(id)
        },
        [],
    );

    const handleClose = () => {
        alert(JSON.stringify(user))
        setUser(null)
    }

    const duplicateUser = React.useCallback(
        (id: GridRowId) => () => {
            alert(id)
        },
        [],
    );
    type Row = typeof rows[number];
    const columns: GridColDef[] = React.useMemo<GridColumns<Row>>(
        () => [
        {field: 'id', headerName: 'ID', width: 90},
        {
            field: 'firstName',
            headerName: 'First name',
            width: 150,
            editable: true,
        },
        {
            field: 'lastName',
            headerName: 'Last name',
            width: 150,
            editable: true,
        },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 110,
            editable: true,
        },
        {
            field: 'actions',
            headerName: 'Actions',
            type:'actions',
            width:280,
            getActions: (params:GridRowParams) => [
                <GridActionsCellItem
                    icon={<EditIcon/>}
                    label="Delete"
                    onClick={editUser(params)}
                />,
                <GridActionsCellItem
                    icon={<SecurityIcon/>}
                    label="Toggle Admin"
                    onClick={toggleAdmin(params.id)}
                    showInMenu
                />,
                <GridActionsCellItem
                    icon={<FileCopyIcon/>}
                    label="Duplicate User"
                    onClick={duplicateUser(params.id)}
                    showInMenu
                />
            ],
        },
    ],
        [editUser,toggleAdmin,duplicateUser]
    );
    return (
        <div className='root'>
            <CreateModal visible={!!user} user={user} handleClose={handleClose} />
            <MUIDataGrid columns={columns} rows={rows} pSize={pSize} rowsPerPageOptions={2}/>
        </div>
    );
};

export default Letter;
