import React from 'react';
import {AppBar, Button, IconButton, Toolbar, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export const Navbar = (props) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          <MenuIcon />
        </IconButton>
        <Typography component="div" variant="h6" sx={{ flexGrow: 1 }}>
          Landmark Maker
        </Typography>
        <Button color="inherit">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}