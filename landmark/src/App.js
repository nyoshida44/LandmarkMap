import React from 'react';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import { Navbar } from './components/Navbar';
import { Main } from './components/Main';

let theme = createTheme();
theme = responsiveFontSizes(theme);

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Main />
      </ThemeProvider>
    </div>
  );
}

export default App;
