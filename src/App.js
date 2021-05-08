import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Heroi from './Components/Heroi';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="heroi/:id" element={<Heroi />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
