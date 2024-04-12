import React from "react";
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: '#', width: 70 },
    { field: 'title', headerName: 'Title', width: 130 },
    { field: 'description', headerName: 'Description', width: 130 },
    {field: 'importance',headerName: 'Importance',width: 130,},
    {field: 'date',headerName: 'Date',width: 130,},
    {field: 'time',headerName: 'Time',width: 130,},
    {field: 'address',headerName: 'Address',width: 130,},
    {field: 'edit',headerName: 'Edit',width: 130,},
    {field: 'delete',headerName: 'Delete',width: 130,},
  ];
  
  const rows = [
    
  ];

const Table = () =>{
    return(
        <div style={{ height: 400, width: '100%', paddingLeft:10 }}>
        <DataGrid
            rows={rows}
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