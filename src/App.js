import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Heroi from './Components/Heroi';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="heroi/:id" element={<Heroi />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
