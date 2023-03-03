import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const CreateModal = ({visible, handleClose, user}: any) => {

    const handleSubscribe = (e: any) => {
        e.preventDefault()
        console.log(e)
        handleClose()

    }
    return (
        <Dialog open={visible} onClose={handleClose}>
            <Box onSubmit={(e) => console.log(e)} component="form">
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        name="firstName"
                        value={user?.firstName}
                        label="Email Address"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type={"submit"} >Subscribe</Button>
                </DialogActions>
            </Box>

        </Dialog>
    );
};

export default CreateModal;
