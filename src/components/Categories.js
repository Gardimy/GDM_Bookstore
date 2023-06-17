import React, { useState } from 'react';
import BookList from './BookList';
import BookForm from './BookForm';

const CategoriesPage = () => {
  const [books, setBooks] = useState([]);

  const handleAddBook = (title) => {
    const newBook = { id: Date.now(), title };
    setBooks([...books, newBook]);
  };

  const handleDeleteBook = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  return (
    <div>
      <BookForm onSubmit={handleAddBook} />
      <BookList books={books} onDelete={handleDeleteBook} />
    </div>
  );
};

export default CategoriesPage;
