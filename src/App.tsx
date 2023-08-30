import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { darkMode } from './styles/themes';
import { GlobalStyle } from './styles/globalStyle';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (

    <ThemeProvider theme={ darkMode }>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/carteira" element={ <Wallet /> } />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
