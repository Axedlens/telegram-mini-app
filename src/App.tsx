import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import WebApp from '@twa-dev/sdk';

// Pages
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import Earn from './pages/Earn';
import Invite from './pages/Invite';
import Wallet from './pages/Wallet';
import Navigation from './components/Navigation';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#1a1a1a',
      paper: '#2d2d2d',
    },
  },
});

function App() {
  useEffect(() => {
    // Initialize Telegram WebApp
    WebApp.ready();
    WebApp.expand();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <div style={{ 
          maxWidth: '100%', 
          minHeight: '100vh',
          background: theme.palette.background.default,
          color: theme.palette.text.primary 
        }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/earn" element={<Earn />} />
            <Route path="/invite" element={<Invite />} />
            <Route path="/wallet" element={<Wallet />} />
          </Routes>
          <Navigation />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
