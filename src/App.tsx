import { ThemeProvider } from '@mui/material';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { EscapeRoomBookingPage } from './pages/EscapeRoomBookingPage';
import { LandingPage } from './pages/LandingPage';
import theme from './theme';

export const AppContext = React.createContext<undefined | { apiKey: string }>(undefined);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppContext.Provider value={{ apiKey: '6136dfa9997a76b07c271e1a902b30' }}>
          <Routes>
            <Route path="/szabaduloszoba" element={<EscapeRoomBookingPage />} />
            <Route index element={<LandingPage />} />
          </Routes>
        </AppContext.Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
