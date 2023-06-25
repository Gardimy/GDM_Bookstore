import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Book.css';

const Book = ({
  id, title, author, onDelete,
}) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="bookContainer">
      <div className="bookInfo">
        <span className="categorie Text-Style-11">
          Action
        </span>
        <span className="title Text-Style-5">
          {title}
        </span>
        <div className="author Text-Style-8">
          {author && <p>{author}</p>}
        </div>

        <div className="btn-container-book">
          <button className="btn-book-item" type="button">
            Comment
          </button>
          <button
            className="btn-book-item"
            type="button"
            onClick={handleDelete}
          >
            Remove
          </button>
          <button className="btn-book-item" type="button">
            Edit
          </button>
        </div>
      </div>
      <span className="circle" data-percent="17" />
      <div className="percent">
        <div className="percent-number Text-Style-2">
          64%
        </div>
        <div className="percent-completed Text-Style-2">
          Completed
        </div>
      </div>
      <div className="Line-2" />
      <div className="Update-book">
        <div className="current-chapter Text-Style-2">
          Current Chapter
        </div>
        <div className="chapter Text-Style-1">
          Chapter 17
        </div>
        <button className="btn-update rectangle-1 Text-Style" type="button">
          UPDATE PROGRESS
        </button>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Book;
