import React from 'react';
import Navbar from './Navba';
import Book from './Book';
import BookForm from './BookForm';

function HomePage() {
  return (
    <div>
      <Navbar />
      <Book />
      <BookForm />
    </div>
  );
}

export default HomePage;
