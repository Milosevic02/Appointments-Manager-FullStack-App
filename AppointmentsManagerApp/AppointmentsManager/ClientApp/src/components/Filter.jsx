import { Button, Stack, Typography, FormGroup, FormControlLabel, Checkbox, Autocomplete, Box, TextField } from "@mui/material";
import React,{useState} from "react";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from "@mui/x-date-pickers";
import ClearIcon from '@mui/icons-material/Clear';
import { filter, getAppointments } from "./Lib";
const Filter = ({setDataList}) =>{

    const filterApp = (e) => {
        let name_ = e.target.name;
        let v_ = e.target.value;
    
        if (name_ === "All" || name_ === "Done" || name_ === "Deleted") {
          v_ = e.target.checked;
          filter[name_] = v_;
        }

        if (name_ === "All" && v_) {
            filter["Done"] = false;
            filter["Deleted"] = false;
        } else if (name_ === "Done" && v_) {
            filter["All"] = false;
            filter["Deleted"] = false;
        } else if (name_ === "Deleted" && v_) {
            filter["All"] = false;
            filter["Done"] = false;
        }
    
        if (name_ === "period") {
          // 1 = today, 2 = this week, 3 = last week
          let sd_ = new Date(), ed_ = new Date();
          const dayNum = sd_.getDay();
    
          if (v_ === "1") {
            sd_.setDate(dayNum - 1)
          }
    
          if (v_ === "2") {
            let startDaysInSec = (dayNum - 1) * 24 * 60 * 60 * 1000;
            let endDaysInSec = (7 - dayNum) * 24 * 60 * 60 * 1000;
    
            sd_ = new Date(Date.now() - startDaysInSec);
            ed_ = new Date(Date.now() + endDaysInSec);
          }
    
          if (v_ === "3") {
            let startDaysInSec = dayNum * 24 * 60 * 60 * 1000;
            let endDaysInSec = (6 + dayNum) * 24 * 60 * 60 * 1000;
    
            ed_ = new Date(Date.now() - startDaysInSec);
            sd_ = new Date(Date.now() - endDaysInSec);
          }
    
          filter.StartDate = v_ === '4' ? null : sd_;
          filter.EndDate = v_ === '4' ? null : ed_;
          filter.SpecifiedDate = null
        }
    
        if (name_ === "SpecifiedDate") {
          filter.SpecifiedDate = new Date(v_);
          filter.StartDate = null
          filter.EndDate = null
        }
    
        if (name_ === "SpecifiedTime") {
          filter.SpecifiedTime = v_;
        }
    
        if (name_ === "LevelOfImportance") {
          filter.LevelOfImportance = Number(v_) === 9 ? null : Number(v_);
        }
    
        // fetch data with filter
        getAppointments(filter).then(r => {
          if (r.length < 1) {
            console.log("Filter result is empty!")
            //ALERT
          }
          setDataList(r)
        }).catch(e => console.log("Error getting data on filter: ", e))
      }
    const periods = ["Default","Today","This Week","Last Week"]
    const importances = ["All","Very High","High","Medium","Normal","Low","Very Low"]
    const [value, setValue] = React.useState(periods[0]);
    const [inputValue, setInputValue] = React.useState('');
    const [importance,setImportance] = React.useState();
    const [inputImportanceValue,setInputImportanceValue] = React.useState('');
    return(
        <Stack alignItems={"center"} justifyContent={"space-around"} direction={"row"} pt={3} pl={5}>
            <Typography variant="h6">Filter:</Typography>
            <Button onClick={()=> window.location.reload()} variant="outlined" startIcon={<ClearIcon />} color="error" sx={{
                height:"23px"
            }}> Clear</Button>
            <FormGroup row>
                <FormControlLabel onChange={filterApp} value={"all"} control={<Checkbox/>}labelPlacement="top" label="All" name="All" />
                <FormControlLabel onChange={filterApp} value={"done"} control={<Checkbox/>}labelPlacement="top" label="Done" name = "Done" />
                <FormControlLabel onChange={filterApp} value={"delete"} control={<Checkbox/>}labelPlacement="top" label="Deleted" name="Deleted"/>
            </FormGroup>
            <Autocomplete
    value={value}
    name="period"
    onChange={(event, newValue) => {
        setValue(newValue);
        filterApp(event); // Call filterApp with event
    }}
    inputValue={inputValue}
    onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
    }}
    id="period"
    options={periods}
    sx={{ width: 170 }}
    renderInput={(params) => <TextField  {...params} label="Period" />}
/>

<LocalizationProvider  dateAdapter={AdapterDayjs}>
    <DemoContainer sx={{width:200}} components={['DatePicker']}>
        <DatePicker
            label="Date picker"
            name="SpecifiedDate"
            onChange={(newValue) => {
                filterApp({target: {name: 'SpecifiedDate', value: newValue}}); // Call filterApp with event-like object
            }}
        />
    </DemoContainer>
</LocalizationProvider>

<LocalizationProvider  dateAdapter={AdapterDayjs}>
    <DemoContainer name="SpecifiedTime" sx={{width:200}} components={['TimePicker']}>
        <TimePicker
            label="Time picker"
            onChange={(newValue) => {
                filterApp({target: {name: 'SpecifiedTime', value: newValue}}); // Call filterApp with event-like object
            }}
        />
    </DemoContainer>
</LocalizationProvider>

<Autocomplete
    value={importance}
    name="LevelOfImportance"
    onChange={(event, newValue) => {
        setImportance(newValue);
        filterApp({target: {name: 'LevelOfImportance', value: newValue}}); // Call filterApp with event-like object
    }}
    inputValue={inputImportanceValue}
    onInputChange={(event, newInputValue) => {
        setInputImportanceValue(newInputValue);
    }}
    id="importance"
    options={importances}
    sx={{ width: 170 }}
    renderInput={(params) => <TextField {...params} label="Importance" />}
/>





        </Stack>
    )
}

export default Filter