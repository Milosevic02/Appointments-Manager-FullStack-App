import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const Delete = ({openDelete,setOpenDelete}) =>{
    const handleClickOpen = () => {
      setOpenDelete(true);
    };
  
    const handleClose = () => {
      setOpenDelete(false);
    };
    return(
    <React.Fragment>
        <Dialog
            open={openDelete}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>{"Warning deleting the Appointment"}</DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
                Are you sure you want to delete the Appointmnet?
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose}>Abort</Button>
            <Button onClick={handleClose}>Sure</Button>
            </DialogActions>
        </Dialog>
        </React.Fragment>
    )
}

export default Delete