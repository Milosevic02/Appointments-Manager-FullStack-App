import { Box, Fab, Modal, Stack, Button, Tooltip, Typography, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import {Add as AddIcon} from "@mui/icons-material"
import {formatedDateToStr,formatedTimeToStr} from "./Lib"
import CloseIcon from '@mui/icons-material/Close';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const StyledModal = styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
})
const Edit = ({openEdit,setOpenEdit,stateListener}) =>{
    useEffect(()=>{
        console.log("Edit-Component")
    },[stateListener])
    return(
        <StyledModal
                open={openEdit}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                    <Box width={1000} height={550} p={3} borderRadius={5} bgcolor={"background.default"} color={"text.primary"}>
                        <Typography variant='h6' color={"gray"} textAlign={"center"}>Edit Appointments</Typography>
                        <Typography sx={{fontWeight:"bold",mt:"10px", mb:"5px"}}>Title</Typography>
                        <input style={{width:"70%"}} type="text" id="Title_n" maxLength={150} name="title"/>
                        <Typography sx={{fontWeight:"bold",mt:"10px", mb:"5px"}}>Description</Typography>
                        <textarea id="Description_n" maxLength={300} style={{maxHeight:"200px"}}  name="description" cols={102} rows={10}></textarea> <br />
                        <Stack direction={"row"} sx={{alignItems:"center", justifyContent:"space-around"}}>
                        
                            <Typography sx={{fontWeight:"bold",mt:"10px", mb:"5px"}}>Address:</Typography>
                            <input type="text" id="Address_n" name="address" style={{marginLeft:"5px", width:"600px",height:"25px"}} maxLength={100} />
                            <Typography sx={{fontWeight:"bold",mt:"10px", mb:"5px"}}>Importance:</Typography>
                            <select name="levelOfImportance" id="LevelOfImportance_n" defaultValue={2}>
                                <option value={5}>Very High</option>
                                <option value={4}>High</option>
                                <option value={3}>Medium</option>
                                <option value={2}>Normal</option>
                                <option value={1}>Low</option>
                                <option value={0}>Very Low</option>
                            </select>

                        </Stack>
                        <Stack direction={"row"} sx={{alignItems:"center", justifyContent:""}}>
                        <Typography sx={{fontWeight:"bold",mt:"10px", mb:"5px",mr:"5px"}}>Date:</Typography>
                        <input type="date" id="Date_n" name="date" defaultValue={formatedDateToStr()}/>
                        <Typography sx={{fontWeight:"bold",mt:"10px", mb:"5px", mr:"5px",ml:"10px"}}>Time:</Typography>
                        <input type="time" id="Time_n" name="time" defaultValue={formatedTimeToStr()}/>
                        </Stack>
                        <Stack direction={"row"} sx={{ml:"20px",mr:"20px",mt:"30px" ,alignItems:"center", justifyContent:"space-between"}}>
                            <Button startIcon={<CloseIcon />} onClick={e=>setOpenEdit(false)} variant="contained" color="error"sx={{width:"100px"}}>
                                Close
                            </Button>
                            <Button startIcon={<AddCircleIcon />} variant="contained" color="success" sx={{width:"100px"}}>
                                Add
                            </Button>
                        </Stack>
                    
                    </Box>

            </StyledModal>
    )
}

export default Edit