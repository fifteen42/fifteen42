import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Challenge from './pages/Challenge';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/challenge" element={<Challenge />} />
    </Routes>
  );
}

export default App;
