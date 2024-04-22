import React, { useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { Button,Box } from "@mui/material";
import "../style/table.css";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Edit from "./Edit";
import Delete from "./Delete";


const columns = [
    { field: 'id', headerName: '#', width: 70, align: "center" },
    { field: 'Title', headerName: 'Title', width: 130 },
    { field: 'Description', headerName: 'Description', width: 200 },
    {
        field: 'LevelOfImportance',
        headerName: 'Importance',
        width: 130,
        align: "center",
        renderCell: (params) => {
            let bgColor = ''; // Initialize background color
            bgColor = params.row.LevelOfImportance === "Very Low" ? 'green' :
                params.row.LevelOfImportance === "High" ? 'gold' :
                params.row.LevelOfImportance === "Very High" ? 'red' :
                     '';
            return (
                <Box>
                    <Box sx={{ backgroundColor: bgColor,borderRadius:"20px"}}>
                                        {params.value}
                    </Box>
                </Box>
                
            );
        }
    },    { field: 'Date', headerName: 'Date', width: 150 },
    { field: 'Time', headerName: 'Time', width: 100, align: "center" },
    { field: 'Address', headerName: 'Address', width: 200 },
    {
        field: 'Edit', headerName: 'Edit', width: 130,
        renderCell: ({row}) => {
            return (
                <Button
                onClick={() => row.onEditClick(row)}
                variant="contained"
                    color="warning"
                    startIcon={<EditIcon />}
                >Edit</Button>
            )
        }
    },
    {
        field: 'Delete', headerName: 'Delete', width: 130,
        renderCell: ({row}) => {
            return (
                <Button
                    onClick={()=>row.onDeleteClick(row)}
                    startIcon={<DeleteIcon />}
                    variant="contained"
                    color="error"
                >Delete</Button>
            )
        }
    },
];


const Table = ({ dataList }) => {
    const [openEdit, setOpenEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);


    const getRowClassName = (params) => {
        let importance = "";
        let level = String(params.row.LevelOfImportance);
        switch (level) {
            case '0':
                importance = "Very Low";
                break;
            case '1':
                importance = "Low";
                break;
            case '2':
                importance = "Normal";
                break;
            case '3':
                importance = "Medium";
                break;
            case '4':
                importance = "High";
                break;
            case '5':
                importance = "Very High";
                break;
            default:
                importance = level;
        }
        params.row.LevelOfImportance = importance;
        if (params.row.deleted) {
            return 'deleted-row';
        } else if (params.row.done) {
            return 'done-row';
        } else {
            return 'default-row';
        }
    };
    return (
        
        <div style={{ height: 400, width: '100%', paddingLeft: 10 }}>
            <DataGrid
                rows={dataList.map(row => ({ ...row, onEditClick: setOpenEdit,onDeleteClick:setOpenDelete }))} // Pass setOpenEdit as onEditClick to each row
                columns={columns}
                getRowClassName={getRowClassName}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
            />
            <Edit openEdit = {openEdit} setOpenEdit = {setOpenEdit}/>
            <Delete openDelete = {openDelete} setOpenDelete = {setOpenDelete}/>
        </div>
        
    )
}

export default Table;
