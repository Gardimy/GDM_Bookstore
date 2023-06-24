import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

const BookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const id = uuid();
  const category = 'Fiction';
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && author.trim()) {
      dispatch(addBook({
        title, author, category, item_id: id,
      }));
      setTitle('');
      setAuthor('');
    }
  };
  return (
    <div>
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter book title"
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Enter author name"
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};
export default BookForm;
