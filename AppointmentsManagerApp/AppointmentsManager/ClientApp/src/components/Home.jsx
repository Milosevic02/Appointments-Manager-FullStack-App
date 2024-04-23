import React, { useEffect, useState } from "react";
import New from "./New";
import { Box, Typography, Alert } from "@mui/material";
import Filter from "./Filter";
import Table from "./Table";
import { getDefault } from "./Lib";
const Home = () =>{
    const [dataList,setDataList] = useState([])
    const [refreshData,setRefreshData] = useState(0)

    useEffect(()=>{
        getDefault().then(data=>{
            setDataList(data)
        }).catch(e=>console.log("Error inside home:",e))

    },[refreshData])

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
            <Table dataList={dataList} refreshApp={setRefreshData} />
            <New refreshApp={setRefreshData}/>
        </Box>
    )
}

export default Home