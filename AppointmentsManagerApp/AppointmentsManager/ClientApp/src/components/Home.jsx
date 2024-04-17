import React, { useEffect, useState } from "react";
import Edit from "./Edit";
import Delete from "./Delete";
import New from "./New";
import { Box, Typography, Tooltip, Fab, Alert, Stack,Item } from "@mui/material";
import Filter from "./Filter";
import Table from "./Table";
import { testData } from "./Lib";
import Appointment from "./Appointment";
const Home = () =>{
    const [openEditModal,setOpenEditModal] = useState(false)
    const [dataList,setDataList] = useState([])

    useEffect(()=>{
        setDataList(testData)
    },[])

    return(
        <Box pt={3}>
            <Typography variant="h3" pb={3} textAlign={"center"}>
                Manage Your Appointments / Dates very easy
            </Typography>
            <Typography pb={3} textAlign={"center"}>
                This powerful web application helps you to manage your dates very easy
            </Typography>
            <Alert variant = "filled" severity="success">This is a success Alert.</Alert>
            <Filter pb={3}/>
            <Table dataList={dataList} setOpenEditModal={setOpenEditModal} />
            <New/>
            <Edit setOpenEditModal={setOpenEditModal}  openEditModal={openEditModal}/>
        </Box>
    )
}

export default Home