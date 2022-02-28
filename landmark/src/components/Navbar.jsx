import React from 'react';
import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
//import { Link } from "react-router-dom";

export const Navbar = (props) => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Landmark Maker
          </Typography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}