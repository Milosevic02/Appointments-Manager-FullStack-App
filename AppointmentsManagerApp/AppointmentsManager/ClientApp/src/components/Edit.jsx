import { Box, Modal, Stack, Button, Typography, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import {entry, updateAppointment} from "./Lib"
import CloseIcon from '@mui/icons-material/Close';

const StyledModal = styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
})
const Edit = ({openEdit,setOpenEdit,stateListener,refreshApp}) =>{
    const [done_, setDone_] = useState(false)
    const [deleted_, setDeleted_] = useState(false)
    const [importance, setImportance] = useState(0)
    const [data, setData] = useState({})

    const editApp =(e)=> {
        const name_ = e.target.name
        let v_ = e.target.value

        if(name_ === "done"){
            v_ = e.target.checked
            setDone_(v_)
        }

        if(name_ === "deleted"){
            v_ = e.target.checked
            setDeleted_(v_)
        }

        if(name_ === "date"){
            v_ = new Date(v_)
        }

        if(name_ === "levelOfImportance"){
            v_ = Number(v_)
            setImportance(v_)
        }

        entry[name_] = v_
    }


    const updateApp = ()=>{
        updateAppointment(entry).then(r=>{
            console.log("Updated successfully: ", r)
            refreshApp(Math.random() * 248 * Math.random())
        })
        .catch(e=>console.log("Could not update the appointment: ", e))
        setOpenEdit(false)
    }

    const defaultDate = typeof(entry.date) === "string" ? entry.date.split("T")[0] : ""

    useEffect(()=>{
        console.log("Edit-Component")
        setDone_(entry.done)
        setDeleted_(entry.deleted)
        setImportance(entry.levelOfImportance)
        setData(entry)

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
                        <input style={{width:"70%"}} type="text" id="Title_n" maxLength={150} name="title" defaultValue={data.title} onChange={editApp}/>
                        <Typography sx={{fontWeight:"bold",mt:"10px", mb:"5px"}}>Description</Typography>
                        <textarea id="Description_n" maxLength={300} style={{maxHeight:"200px"}}  name="description" defaultValue={data.description} onChange={editApp} cols={102} rows={10}></textarea> <br />
                        <Stack direction={"row"} sx={{alignItems:"center", justifyContent:"space-around"}}>
                        
                            <Typography sx={{fontWeight:"bold",mt:"10px", mb:"5px"}}>Address:</Typography>
                            <input type="text" id="Address_n" name="address" defaultValue={data.address} onChange={editApp} style={{marginLeft:"5px", width:"600px",height:"25px"}} maxLength={100} />
                            <Typography sx={{fontWeight:"bold",mt:"10px", mb:"5px"}}>Importance:</Typography>
                            <select name="levelOfImportance" id="LevelOfImportance_n" value={importance} onChange={editApp}>
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
                        <input type="date" id="Date_n" name="date" onChange={editApp} defaultValue={defaultDate}/>
                        <Typography sx={{fontWeight:"bold",mt:"10px", mb:"5px", mr:"5px",ml:"10px"}}>Time:</Typography>
                        <input type="time" id="Time_n" name="time" onChange={editApp} defaultValue={data.time}/>
                        <Typography sx={{fontWeight:"bold",mt:"10px", mb:"5px", mr:"5px",ml:"10px"}}>Done:</Typography>
                        <input style={{"marginTop":"5px"}} type="checkbox" id="Done_e"  name="done" checked={done_} onChange={editApp}/>
                        <Typography sx={{fontWeight:"bold",mt:"10px", mb:"5px", mr:"5px",ml:"10px"}}>Deleted:</Typography>
                        <input style={{"marginTop":"5px"}} type="checkbox" id="Deleted_e" name="deleted_" checked={deleted_} onChange={editApp}/>

                        </Stack>
                        <Stack direction={"row"} sx={{ml:"20px",mr:"20px",mt:"30px" ,alignItems:"center", justifyContent:"space-between"}}>
                            <Button startIcon={<CloseIcon />} onClick={e=>setOpenEdit(false)} variant="contained" color="error"sx={{width:"100px"}}>
                                Close
                            </Button>
                            <Button startIcon={<EditIcon />} onClick={updateApp} variant="contained" color="warning" sx={{width:"100px"}}>
                                Update
                            </Button>
                        </Stack>
                    
                    </Box>

            </StyledModal>
    )
}

export default Edit