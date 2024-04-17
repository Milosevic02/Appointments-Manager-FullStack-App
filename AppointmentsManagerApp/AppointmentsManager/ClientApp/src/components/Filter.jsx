import { Button, Stack, Typography, FormGroup, FormControlLabel, Checkbox, Autocomplete, Box, TextField } from "@mui/material";
import React,{useState} from "react";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from "@mui/x-date-pickers";
import ClearIcon from '@mui/icons-material/Clear';
const Filter = () =>{
    const periods = ["Default","Today","This Week","Last Week"]
    const importances = ["All","Very High","High","Medium","Normal","Low","Very Low"]
    const [value, setValue] = React.useState(periods[0]);
    const [inputValue, setInputValue] = React.useState('');
    const [importance,setImportance] = React.useState();
    const [inputImportanceValue,setInputImportanceValue] = React.useState('');
    return(
        <Stack alignItems={"center"} justifyContent={"space-around"} direction={"row"} pt={3} pl={5}>
            <Typography variant="h6">Filter:</Typography>
            <Button variant="outlined" startIcon={<ClearIcon />} color="error" sx={{
                height:"23px"
            }}> Clear</Button>
            <FormGroup row>
                <FormControlLabel value={"all"} control={<Checkbox/>}labelPlacement="top" label="All" />
                <FormControlLabel value={"done"} control={<Checkbox/>}labelPlacement="top" label="Done" />
                <FormControlLabel value={"delete"} control={<Checkbox/>}labelPlacement="top" label="Deleted" />
            </FormGroup>
            <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                setValue(newValue);
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
                    <DatePicker  label="Date picker" />
                </DemoContainer>
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer sx={{width:200}} components={['TimePicker']}>
                    <TimePicker label="Time picker" />
                </DemoContainer>
            </LocalizationProvider>
            
            <Autocomplete
                value={importance}
                onChange={(event, newValue) => {
                setImportance(newValue);
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