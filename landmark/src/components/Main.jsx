import React from 'react';
import { Paper } from '@mui/material';
import Image from '../img/world.jpg'; 

const styles = {
  paperContainer: {
    backgroundImage: `url(${Image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh',
    opacity: 0.6
  }
};

export const Main = (props) => {

  return (
    <Paper style={styles.paperContainer}>
    </Paper>
  );
}