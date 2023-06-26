import React from 'react';
import {ThemeProvider} from '@mui/material/styles';
import { Box, Button, Typography, Container, CssBaseline, Paper, Dialog, Transitions } from '@mui/material';
import logoImage from './assets/Stack_green.png';
import theme from './theme/theme.js';
import './style.css';

import Navbar from './components/navbar/Navbar.js';
import Footer from './components/footer/Footer.js';

export default () => {
    return <ThemeProvider theme={theme}>
            <CssBaseline></CssBaseline>
            <Navbar></Navbar>
            <Container maxWidth="xs" sx={{alignSelf: 'center', marginTop: '5vh'}}>
                <Paper sx={{minHeight: '60vh', borderRadius: '0.9em', p: 2}}>
                    <Typography style={{color: theme.palette.primary.main}} align='center' variant='h3'>StackZ</Typography>
                    <Container sx={{mt: 5, mb: 5}}>
                        <img src={logoImage} align='center' height='300'></img>
                    </Container>
                    <Typography marginTop='auto' align='center'>A simple flash card memory app.</Typography>
                </Paper>
            </Container>
            <Footer></Footer>
        </ThemeProvider>
}