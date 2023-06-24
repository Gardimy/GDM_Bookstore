import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addBook } from '../redux/books/booksSlice';
import '../styles/BookForm.css';

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
    <div className="Formcontainer">
      <div className="Line" />
      <div className="Title Text-Style-10">
        ADD NEW BOOK
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Book title"
        />
        <input
          className="Auth"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Enter author name"
        />
        <select className="Lesson-Panel Title" name="mySelect" id="mySelect">
          <option value="Category">category</option>
          <option value="Category">category1</option>
          <option value="Category">Category2</option>
          <option value="Category">category3</option>
          <option value="Category">category4</option>
          <option value="Category">Category5</option>
        </select>
        <button className="btn-update rectangle-1 Text-Style" type="submit"> ADD BOOK</button>
      </form>
    </div>
  );
};
export default BookForm;
