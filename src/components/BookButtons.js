import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook, removeBook } from '../redux/books/booksSlice';

const BookButtons = () => {
  const dispatch = useDispatch();

  const handleAddBook = () => {
    const newBook = {
      item_id: 'item4',
      title: 'New Book',
      author: 'Author',
      category: 'Fiction',
    };
    dispatch(addBook(newBook));
  };

  const handleRemoveBook = () => {
    const bookIdToRemove = 'item1'; // Replace with the actual book ID you want to remove
    dispatch(removeBook(bookIdToRemove));
  };

  return (
    <div>
      <button type="button" onClick={handleAddBook}>Add Book</button>
      <button type="button" onClick={handleRemoveBook}>Remove Book</button>
    </div>
  );
};

export default BookButtons;
