// import React from 'react';
// import PropTypes from 'prop-types';
// import Book from './Book';

// const BookList = ({ books, onDelete }) => (
//   <div>
//     {books.map((book) => (
//       <Book key={book.id} id={book.id} title={book.title} onDelete={onDelete} />
//     ))}
//   </div>
// );

// BookList.propTypes = {
//   books: PropTypes.string.isRequired,
//   onDelete: PropTypes.string.isRequired,
// };

// export default BookList;
import React, { useState } from 'react';
import BookForm from './BookForm';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [bookId, setBookId] = useState(1);

  const handleCreateBook = (title, author) => {
    const newBook = { id: bookId, title, author };
    setBooks([...books, newBook]);
    setBookId(bookId + 1);
  };

  const handleDeleteBook = (id) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };

  return (
    <div>
      <h1>Book List</h1>
      <BookForm onCreate={handleCreateBook} />
      <BookList books={books} onDelete={handleDeleteBook} />
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <p>
              Title:
              {' '}
              {book.title}
            </p>
            <p>
              Author:
              {' '}
              {book.author}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
