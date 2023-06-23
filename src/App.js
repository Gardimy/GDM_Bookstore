import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CategoriesPage from './components/Categories';
import Navbar from './components/Navba';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
    </>
  );
}

export default App;
