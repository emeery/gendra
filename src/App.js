import * as React from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";

import List from './components/List';
import Header from './components/Header';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  
  return (
      // <React.Fragment>

<ThemeProvider theme={darkTheme}>
<Header/>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />} />
        </Routes>
        </BrowserRouter>
        <CssBaseline />
    </ThemeProvider>
      // </React.Fragment>
      /* <Router>
        <Header/>
        <Provider theme={darkTheme}>
        <Routes>
          <Route path="/" element={<List />} />
        </Routes>
        </ThemeProvider>
      </Router> */
      
  );
}

export default App;


