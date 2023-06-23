import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks, addBook, deleteBook } from '../redux/books/booksSlice';
import BookList from './BookList';
import BookForm from './BookForm';

const Home = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleCreateBook = (title, category) => {
    const newBook = { title, category };
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
