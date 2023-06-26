import React from 'react';
import { useState } from 'react';
import { Container, Grid, Typography, Box, Button, AppBar, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { useTheme } from '@emotion/react';
import axios from 'axios';

export default () => {
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


    const [userName, setUserName] = useState("");
    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
    }
    
    const [password, setPassword] = useState("");
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }


    
    const handleLogin = async () => {
        console.log(userName)
        await axios.post('http://localhost:5000/login', {
            username: userName,
            password: password
        }, {headers: {'Content-Type': 'application/json'}}).then(res => {console.log(res)})
        .catch( error => {console.log(error)});
    }

    const theme = useTheme();
    console.log(theme)
    return (
        <>
        <AppBar position='static'>
            <Grid container alignItems='center' padding={'1em'} className="Navbar">
                <Grid item xs={2}>
                    <Typography> ICON </Typography>
                </Grid>
                <Grid item xs={10}>
                    <Box display={'flex'} justifyContent={'flex-end'}>
                        <Button sx={{mr:1}} variant={'contained'} onClick={handleLoginClick}>Login</Button>
                        <Button variant={'outlined'} onClick={handleSignupClick}>Sign up</Button>
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
        </AppBar>
        </>
    )
};