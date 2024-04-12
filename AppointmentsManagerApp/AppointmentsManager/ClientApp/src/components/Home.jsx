import React from "react";
import Edit from "./Edit";
import Delete from "./Delete";
import New from "./New";
import { Box, Typography, Tooltip, Fab, Alert, Stack,Item } from "@mui/material";
import {Add as AddIcon} from "@mui/icons-material"
import Filter from "./Filter";
import Table from "./Table";
const Home = () =>{
    return(
        <Box pt={3}>
            <Typography variant="h3" pb={3} textAlign={"center"}>
                Manage Your Appointments / Dates very easy
            </Typography>
            <Typography pb={3} textAlign={"center"}>
                This powerful web application helps you to manage your dates very easy
            </Typography>
            <Tooltip title="Add Appointments"
                sx={{
                    position:"fixed",
                    bottom:20,
                    left:{xs:"calc(50% - 25px),md:30"}
                }}>
                <Fab color="success" aria-label="add">
                    <AddIcon/>
                </Fab>
            </Tooltip>
            <Alert variant = "filled" severity="success">This is a success Alert.</Alert>
            <Filter pb={3}/>
            <Table/>
        </Box>
    )
}

export default Home