import React, { useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { Button,Box } from "@mui/material";
import "../style/table.css";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Edit from "./Edit";
import Delete from "./Delete";
import { activeId, entry } from "./Lib";


const columns = [
    { field: 'id', headerName: '#', width: 70, align: "center" },
    { field: 'title', headerName: 'Title', width: 130 },
    { field: 'description', headerName: 'Description', width: 200 },
    {
        field: 'levelOfImportance',
        headerName: 'Importance',
        width: 130,
        align: "center",
        renderCell: (params) => {
            let bgColor = ''; // Initialize background color
            bgColor = params.row.levelOfImportance === "Very Low" ? 'green' :
                params.row.levelOfImportance === "High" ? 'gold' :
                params.row.levelOfImportance === "Very High" ? 'red' :
                     '';
            return (
                <Box>
                    <Box sx={{ backgroundColor: bgColor,borderRadius:"20px"}}>
                                        {params.value}
                    </Box>
                </Box>
                
            );
        }
    },    { field: 'date', headerName: 'Date', width: 170 },
    { field: 'time', headerName: 'Time', width: 100, align: "center" },
    { field: 'address', headerName: 'Address', width: 200 },
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

const SplitDate = (param) =>{
    let split_date = String(param).split("T");
    let only_date = split_date[0];
    return only_date;
}

const ImportanceToString = (param) =>{
    let importance = "";
    let level = String(param);
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
    return importance;
}



const Table = ({ dataList,refreshApp }) => {
    const [openEdit, setOpenEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [stateListener, setStateListener] = useState(0);

    const handlingDelete = (id) =>{
        activeId.id = id
        setStateListener(Math.random() * 548 * Math.random())
        setOpenDelete(true)
    }
    
    const handlingEdit = (row)=>{
        Object.assign(entry,row)
        setStateListener(Math.random() * 548 * Math.random())
        setOpenEdit(true)
    }
    const getRowClassName = (params) => {
        params.row.date = SplitDate(String(params.row.date));
        params.row.levelOfImportance = ImportanceToString(params.row.levelOfImportance);
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
            <Edit refreshApp={refreshApp} stateListener = {stateListener} openEdit = {openEdit} setOpenEdit = {setOpenEdit}/>
            <Delete stateListener = {stateListener} openDelete = {openDelete} setOpenDelete = {setOpenDelete}/>
        </div>
        
    )
}

export default Table;
