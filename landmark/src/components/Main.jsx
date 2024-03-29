import React from 'react';
import { Button, Paper, Typography } from '@mui/material';
import Image from '../img/world.jpg'; 

export const Main = (props) => {
  return (
    <Paper 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundImage: `url(${Image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        opacity: "0.8"
      }}
    > 
      <Typography component="div" variant="h4" sx={{color: "darkblue", fontFamily: "Jura"}}>
        Landmark Maker
      </Typography>
      <Typography component="div" variant="h5" sx={{color: "black", fontFamily: "Jura"}}>
        A CRUD tool for your Points of Interests
      </Typography>
      <Button variant="contained" sx={{margin: "1em"}}>
        Register Now
      </Button>
    </Paper>
  );
}