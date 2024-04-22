import React, { useEffect, useState } from "react";
import New from "./New";
import { Box, Typography, Tooltip, Fab, Alert, Stack,Item } from "@mui/material";
import Filter from "./Filter";
import Table from "./Table";
import { getDefault, testData } from "./Lib";
const Home = () =>{
    const [dataList,setDataList] = useState([])

    useEffect(()=>{
        getDefault().then(data=>{
            setDataList(data)
        })
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
            <Table dataList={dataList} />
            <New/>
        </Box>
    )
}

export default Home