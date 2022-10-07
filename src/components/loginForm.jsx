import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { NavLink, useNavigate } from "react-router-dom";
import auth from "../services/authService";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function LoginForm () {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();

        const credentials = {
            email: document.getElementById('email').value,
            password: document.getElementById('password').value     // TODO optimize - binding - formcontrol
        }

        if (!credentials.email) {
            return;
        }
        if (!credentials.password) {
            return;
        }
    
        const loggedIn = auth.login(credentials); // implement with backend
        if (loggedIn) {
            toast.success('Logged in!');
            navigate('/');;
        }
        else
            toast.error('Something went wrong. Please try again');
    }


    return (
        <React.Fragment>
            <Box>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <TextField
                        id='email'
                        label='Email'
                        type='email'
                        variant='standard'
                        required={true}
                    />
                    <TextField 
                        id='password'
                        label='Password'
                        type='password'
                        variant='standard'
                        required={true}
                    />
                            
                        
                    <NavLink to='/passwordRecovery'>Can't remember password?</NavLink>

                    <Button type="submit">Log in</Button>
                        
                    <NavLink to='/register'>
                        <button>Create an account!</button>
                    </NavLink>
                </form>         
            </Box>
        </React.Fragment>
    );  
}

export default LoginForm;