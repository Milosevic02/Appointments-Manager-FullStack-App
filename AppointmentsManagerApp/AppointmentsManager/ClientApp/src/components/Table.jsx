import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import { Button,Box } from "@mui/material";
import "../style/table.css";


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
        renderCell: () => {
            return (
                <Button
                    variant="contained"
                    color="warning"
                >Edit</Button>
            )
        }
    },
    {
        field: 'Delete', headerName: 'Delete', width: 130,
        renderCell: () => {
            return (
                <Button
                    variant="contained"
                    color="error"
                >Delete</Button>
            )
        }
    },
];


const Table = ({ dataList }) => {
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
                rows={dataList}
                columns={columns}
                getRowClassName={getRowClassName}
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

export default Table;
