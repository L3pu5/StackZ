import { Container, Grid, Typography, Box, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import React from 'react';

import './style.css';

export default () => {
    return <>
        <Box sx={{display: 'flex',  flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}} className="footer">
                <IconButton href="https://github.com/L3pu5" sx={{mr:1}}>
                    <GitHubIcon></GitHubIcon>
                </IconButton>
                <Typography align='center' variant='h6' color={'#888'}>By L3pu5 Hare</Typography>
        </Box>
    </>
}