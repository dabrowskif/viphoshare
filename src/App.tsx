import React from 'react';
import { Container } from '@mui/material';

import MainPage from './components/MainPage/MainPage';
import Navbar from './components/Navbar/Navbar';
import { LEFT_NAVBAR_WIDTH } from './constants/style';

function App(): JSX.Element {
  return (
    <Container maxWidth="lg" sx={{ display: 'flex' }}>
      <Navbar />
      <MainPage />
    </Container>
  );
}

export default App;
