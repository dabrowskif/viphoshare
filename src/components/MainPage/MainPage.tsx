import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LEFT_NAVBAR_WIDTH } from '../../constants/style';

import Home from './Home/Home';
import Upload from './Upload/Upload';

function MainPage(): JSX.Element {
  return (
    <div style={{ marginTop: '80px', width: `calc(100% - ${LEFT_NAVBAR_WIDTH}px)` }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </div>
  );
}

export default MainPage;
