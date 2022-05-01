import React from 'react';
import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";

export const Navbar = (props) => {

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography component="div" variant="h6" sx={{ flexGrow: 0.1 }}>
          Landmark Maker
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Typography component="div" variant="h7"> 
            Add a Landmark
          </Typography>
        </Box>
        <Button color="inherit">
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}