import React, { useState } from 'react';
import PropTypes from 'prop-types';

function BookForm({ onAdd }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === '') {
      return;
    }

    const newBook = {
      id: Date.now(),
      title: 'The Hunger Game',
      author: 'Suzanne Collins',
    };

    onAdd(newBook);
    setTitle('');
  };

  return (
    <div>
      <h1>Add Book</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add book"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

BookForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default BookForm;
