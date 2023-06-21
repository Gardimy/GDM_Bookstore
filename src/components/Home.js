// import React, { useState } from 'react';
// import BookList from './BookList';
// import BookForm from './BookForm';

// const Home = () => {
//   const [books, setBooks] = useState([]);

//   const handleCreateBook = (title, author) => {
//     const newBook = { id: Date.now(), title, author };
//     setBooks((prevBooks) => [...prevBooks, newBook]);
//   };

//   const handleDeleteBook = (id) => {
//     setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
//   };

//   return (
//     <div>
//       <BookForm onCreate={handleCreateBook} />
//       <BookList books={books} onDelete={handleDeleteBook} />
//     </div>
//   );
// };

// export default Home;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookList from './BookList';
import BookForm from './BookForm';
import { addBook, deleteBook } from '../redux/books/booksSlice';

const Home = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  const handleCreateBook = (title, author) => {
    const newBook = { id: Date.now(), title, author };
    dispatch(addBook(newBook));
  };

  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <div>
      <BookForm onCreate={handleCreateBook} />
      <BookList books={books} onDelete={handleDeleteBook} />
    </div>
  );
};

export default Home;
