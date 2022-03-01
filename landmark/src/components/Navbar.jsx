import React from 'react';
import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
//import { Link } from "react-router-dom";

export const Navbar = (props) => {

  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{  display: 'flex', flexDirection: 'row', flexGrow: 1 }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Landmark Maker
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Add a Landmark
          </Typography>
        </Box>
        <Button color="inherit">Logout</Button>
      </Toolbar>
    </AppBar>
  );
}