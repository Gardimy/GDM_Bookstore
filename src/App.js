import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/Home';
import CategoriesPage from './components/Categories';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/categories" element={<CategoriesPage />} />
    </Routes>
  );
}

export default App;
