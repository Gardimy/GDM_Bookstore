import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/Book.css';

function Book({ title, author, onDelete }) {
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = () => {
    setIsDeleted(true);
    onDelete();
  };

  if (isDeleted) {
    return null; // Render nothing if the book is deleted
  }

  return (
    <div className="Bookcontainer">
      <div className="book1">
        <h3>{title}</h3>
        Action
        <h4>
          {title}
          The Hunger Games
        </h4>
        <p>
          {'Suzann Collins '}
          {author}
        </p>
        {'64% '}
        <button className="btn" type="button" onClick={handleDelete}>Delete</button>
      </div>
      <div className="book1">
        <h3>{title}</h3>
        Science finction
        <h4>
          {title}
          Dune
        </h4>
        <p>
          {'Suzann Collins '}
          {author}
        </p>
        {'8% '}
        <button className="btn" type="button" onClick={handleDelete}>Delete</button>
      </div>
      <div className="book1">
        <h3>{title}</h3>
        Economy
        <h4>
          {title}
          Capital in the Twenty-First Century
        </h4>
        <p>
          {'Suzann Collins '}
          {author}
        </p>
        {'0% '}
        <button className="btn" type="button" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Book;
