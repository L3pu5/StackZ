import React from 'react';
import { useState } from 'react';
import { Container, Grid, Typography, Box, Button, AppBar, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { useTheme } from '@emotion/react';
import axios from 'axios';
import logoImage from '../../assets/Stack_green.png';

const API_ENDPOINT = "http://localhost:5000";


export default (props) => {
    const [openLogin, setOpenLogin] = useState(false);
    const handleLoginClick = () => {
        setOpenLogin(true);
    };
    const handleLoginCancel = () =>{
        setOpenLogin(false);
    }

    const [openSignup, setOpenSignup] = useState(false);
    const handleSignupClick = () => {
        setOpenSignup(true);
    };
    const handleSignUpCancel = () =>{
        setOpenSignup(false);
    }



    const [userName, setUserName] = useState("");
    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
    }
    
    const [password, setPassword] = useState("");
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    
    const handleLogin = async () => {
        await axios.post(API_ENDPOINT + '/login', {
            username: userName,
            password: password
        }, {headers: {'Content-Type': 'application/json'}, withCredentials: true}).then(res => {
            if(res.status === 201){
                props.setSession(userName);
                setOpenLogin(false);
            }
        })
        .catch( error => {console.log(error)});
    }

        
    const handleSignUp = async () => {
        await axios.post(API_ENDPOINT + '/signup', {
            username: userName,
            password: password
        }, {headers: {'Content-Type': 'application/json'}, withCredentials: true}).then(res => {
            if(res.status === 201){
                props.setSession(userName);
                setOpenSignup(false);
            }
        })
        .catch( error => {console.log(error)});
    }

            
    const handleLogout= async () => {
        await axios.post(API_ENDPOINT + '/logout', {}, {headers: {'Content-Type': 'application/json'}, withCredentials: true}).then(res => {
            if(res.status === 201){
                props.setSession(null);
            }
        })
        .catch( error => {console.log(error)});
    }

    const theme = useTheme();
    return (
        <>
        <AppBar position='static'>
            <Grid container alignItems='center' padding={'1em'} className="Navbar">
                <Grid item xs={2}>
                    <img src={logoImage} align='center' height='40'></img>
                </Grid>
                <Grid item xs={10}>
                    <Box display={'flex'} justifyContent={'flex-end'} alignItems={'center'}>
                        {props.session === null ? 
                        <>
                            <Button sx={{mr:1}} variant={'contained'} onClick={handleLoginClick}>Login</Button>
                            <Button variant={'outlined'} onClick={handleSignupClick}>Sign up</Button>
                        </> : 
                        <>
                            <Typography sx={{mr:1}}>{props.session}</Typography>
                            <Button variant='contained' onClick={handleLogout}>Logout</Button>
                        </>} 
                        </Box>
                </Grid>
            </Grid>
            
            <Dialog open={openLogin}>
                <DialogTitle>Login</DialogTitle>
                <DialogContent>Please enter your details below to log into your <span style={{color: theme.palette.primary.main}}>StackZ</span> account.</DialogContent>
                <TextField autoFocus id="username" label="username" type="email" sx={{ml: 1, mr:1}} value={userName} onChange={(e) => handleUserNameChange(e)}></TextField>
                <TextField id="password" label="password" type="password" sx={{ml: 1, mr:1, mt: 2}} value={password} onChange={(e) => handlePasswordChange(e)}></TextField>
                <DialogActions>
                    <Button onClick={handleLoginCancel}>Cancel</Button>
                    <Button onClick={handleLogin}>Login</Button>
                </DialogActions>
            </Dialog>

            <Dialog open={openSignup}>
                <DialogTitle>SignUp</DialogTitle>
                <DialogContent>Please enter your details below to log into your <span style={{color: theme.palette.primary.main}}>StackZ</span> account.</DialogContent>
                <TextField autoFocus id="username" label="username" type="email" sx={{ml: 1, mr:1}} value={userName} onChange={(e) => handleUserNameChange(e)}></TextField>
                <TextField id="password" label="password" type="password" sx={{ml: 1, mr:1, mt: 2}} value={password} onChange={(e) => handlePasswordChange(e)}></TextField>
                <DialogActions>
                    <Button onClick={handleSignUpCancel}>Cancel</Button>
                    <Button onClick={handleSignUp}>Sign Up</Button>
                </DialogActions>
            </Dialog>
        </AppBar>
        </>
    )
};