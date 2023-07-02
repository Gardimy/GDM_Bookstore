import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks, deleteBook } from '../redux/books/booksSlice';
import Book from './Book';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const status = useSelector((state) => state.books.status);
  const error = useSelector((state) => state.books.error);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleDeleteBook = async (id) => {
    dispatch(deleteBook(id)).then(() => {
      dispatch(fetchBooks());
    });
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return (
      <div>
        Error:
        {' '}
        {error}
      </div>
    );
  }

  return (
    <div>
      {books && books.map((book) => (
        <Book
          key={book.item_id}
          id={book.item_id}
          category={book.category}
          title={book.title}
          author={book.author}
          onDelete={handleDeleteBook}
        />
      ))}
    </div>
  );
};

export default BookList;
