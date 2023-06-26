import React from 'react';
import { useState } from 'react';
import { Container, Grid, Typography, Box, Button, AppBar, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

export default () => {
    const [openLogin, setOpenLogin] = useState(false);
    const [openSignup, setOpenSignup] = useState(false);

    const handleLoginClick = () => {
        setOpenLogin(true);
    };

    const handleSignupClick = () => {
        setOpenSignup(true);
    };

    return (
        <>
        <AppBar position='static'>
            <Grid container padding={'1em'} className="Navbar">
                <Grid item xs={2}>
                    <Typography> ICON </Typography>
                    <Typography> </Typography>
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
                <DialogContent>Please enter your details below to log into your StackZ account.</DialogContent>
                <TextField autoFocus id="username" label="username" type="email" sx={{ml: 1, mr:1}}></TextField>
                <TextField autoFocus id="password" label="password" type="password" sx={{ml: 1, mr:1, mt: 2}}></TextField>
                <DialogActions>
                    <Button>Cancel</Button>
                    <Button>Login</Button>
                </DialogActions>
            </Dialog>
        </AppBar>
        </>
    )
};