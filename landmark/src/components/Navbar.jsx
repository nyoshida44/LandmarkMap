import { React, useState } from 'react';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export const Navbar = (props) => {

  const [login, setLogin] = useState(false);

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
        {login === false ? (
          <Button color="inherit" onClick={(() => setLogin(true))}>Login</Button>
        ) : (
          <Button color="inherit" onClick={(() => setLogin(false))}>Logout</Button>
        )}
      </Toolbar>
    </AppBar>
  );
}