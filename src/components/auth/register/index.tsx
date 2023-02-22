import React, {Fragment} from 'react';
import {Button, TextField, Typography} from "@mui/material";

const RegisterPage = () => {
    return (
        <>
            <Typography variant="h2" fontFamily='Poppins' textAlign='center'>
                Registration
            </Typography>
            <Typography variant="body1" marginBottom={2} fontFamily='Poppins' textAlign='center'>
                Enter data for registration
            </Typography>
            <TextField fullWidth={true} margin='normal' id="outlined-basic" label="User name" variant="outlined"
                       placeholder="Enter user name"/>
            <TextField fullWidth={true} margin='normal' id="outlined-basic" label="User name" variant="outlined"
                       placeholder="Enter user name"/>
            <TextField fullWidth={true} margin='normal' id="outlined-basic" label="Email" variant="outlined"
                       placeholder="Enter email"/>
            <TextField type="password" fullWidth={true} margin='normal' id="outlined-basic" label="Password" variant="outlined"
                       placeholder="Enter password"/>
            <TextField type="password" fullWidth={true} margin='normal' id="outlined-basic" label="Password" variant="outlined"
                       placeholder="Reenter your password"/>
            <Button sx={{fontFamily: 'Poppins', marginTop: 2, marginBottom:2, width: '60%'}} variant="contained">Register</Button>
            <Typography variant="body1" sx={{fontFamily:'Popins'}}> Have a account? <span className="incitingText">Authorisation</span>

            </Typography>
        </>
    );
};

export default RegisterPage;
