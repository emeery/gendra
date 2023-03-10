import * as React from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from './components/Header';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { useSelector } from 'react-redux';
import Items from './components/Items';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const items= useSelector(state=> state.items)
  console.log(items);
  return (
    <ThemeProvider theme={darkTheme}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Items />} />
        </Routes>
      </BrowserRouter>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;


