import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import { Button } from "@mui/material";

const columns = [
    { field: 'id', headerName: '#', width: 70 },
    { field: 'Title', headerName: 'Title', width: 130 },
    { field: 'Description', headerName: 'Description', width: 200 },
    {field: 'LevelOfImportance',headerName: 'Importance',width: 130,},
    {field: 'Date',headerName: 'Date',width: 150,},
    {field: 'Time',headerName: 'Time',width: 100,},
    {field: 'Address',headerName: 'Address',width: 200,},
    {field: 'Edit',headerName: 'Edit',width: 130,
        renderCell:() =>{
            return(
                <Button
                    variant="contained"
                    color="warning"
                >Edit</Button>
            )
        }},
    {field: 'Delete',headerName: 'Delete',width: 130,
        renderCell:() =>{
            return(
                <Button
                    variant="contained"
                    color="error"
                >Delete</Button>
            )
    }},
  ];

const Table = ({dataList}) =>{
    return(
        <div style={{ height: 400, width: '100%', paddingLeft:10 }}>
        <DataGrid
            rows={dataList}
            columns={columns}
            initialState={{
            pagination: {
                paginationModel: { page: 0, pageSize: 5 },
            },
            }}
            pageSizeOptions={[5, 10]}
        />
        </div>
    )
}

export default Table