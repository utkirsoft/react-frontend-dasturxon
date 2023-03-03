import React, {Fragment} from 'react';
import {Button, TextField, Typography} from "@mui/material";

const LoginPage = (props: any) => {
    const {setEmail, setPassword} = props
    const name = 'Alex'
    return (
        <Fragment>
            <Typography variant="h2" fontFamily='Poppins' textAlign='center'>
                Authorization
            </Typography>
            <Typography variant="body1" marginBottom={2} fontFamily='Poppins' textAlign='center'>
                Enter email and password
            </Typography>
            <TextField fullWidth={true} margin='normal' label="Email" variant="outlined"
                       onChange={(e) => setEmail(e.target.value)}
                       placeholder="Enter email"/>
            <TextField fullWidth={true} margin='normal' label="Password" variant="outlined"
                       onChange={(e) => setPassword(e.target.value)}
                       placeholder="Enter password"/>
            <Button type="submit" sx={{fontFamily: 'Poppins', marginTop: 2, marginBottom: 2, width: '60%'}}
                    variant="contained">Enter</Button>
            <Typography variant="body1" sx={{fontFamily: 'Poppins'}}> Have not account? <span
                className="incitingText">Registration</span>

            </Typography>
        </Fragment>
    );
};

export default LoginPage;
