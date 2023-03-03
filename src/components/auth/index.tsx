import React, {useState} from 'react';
import {useLocation} from "react-router-dom";
import LoginPage from "./login";
import RegisterPage from "./register";
import './style.scss'
import {Box} from "@mui/material";
import axios from "axios";
import {instance} from "../../utils/axios";


const AuthRootComponent = () => {
    const location = useLocation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        //we may email :email
        const userdata = {
            email,
            password
        }
        const user = await instance.post('auth/login', userdata)
        console.log(user)
    }

    return (
        <div className='root'>
            <form className="form" onSubmit={handleSubmit}>
                <Box
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    flexDirection='column'
                    maxWidth={540}
                    margin='auto'
                    padding={5}
                    borderRadius={5}
                    boxShadow={'5px 5px 10px #ccc'}
                >
                    {location.pathname === '/login' ? <LoginPage setEmail={setEmail}
                                                                 setPassword={setPassword}/> : location.pathname
                    === '/register' ? <RegisterPage/> : null}
                </Box>
            </form>
        </div>)
};

export default AuthRootComponent;
