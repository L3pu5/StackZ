import React from 'react';
import {ThemeProvider} from '@mui/material/styles';
import { Box, Button, Typography, Container, CssBaseline, Paper, Dialog, Transitions } from '@mui/material';
import theme from './theme/theme.js';
import './style.css';

import Navbar from './components/navbar/Navbar.js';
import Footer from './components/footer/Footer.js';

console.log(theme);

export default () => {
    return <ThemeProvider theme={theme}>
            <CssBaseline></CssBaseline>
            <Navbar></Navbar>
            <Container maxWidth="xs" sx={{alignSelf: 'center', marginTop: '5vh'}}>
                <Paper sx={{minHeight: '70vh', borderRadius: '0.9em'}}>
                    <Typography align='center' variant='h3'>StackZ</Typography>
                    <Typography align='center'>A simple flash card memory app!</Typography>
                </Paper>
            </Container>
            <Footer></Footer>
        </ThemeProvider>
}