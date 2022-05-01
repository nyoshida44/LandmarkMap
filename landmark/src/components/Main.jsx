import React from 'react';
import { Paper, Typography } from '@mui/material';
import Image from '../img/world.jpg'; 
import { blue } from '@mui/material/colors';

const styles = {
  paperContainer: {
    backgroundImage: `url(${Image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh',
    opacity: 0.5
  }
};

export const Main = (props) => {

  return (
    <Paper style={styles.paperContainer} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Typography component="div" variant="h3" color="blue" >
        Landmark Maker
      </Typography>
    </Paper>
  );
}