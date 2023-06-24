import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  id, title, author, onDelete,
}) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div>
      <h3>{title}</h3>
      {author && <p>{author}</p>}
      <button className="btn" type="button" onClick={handleDelete}>
        Delete
      </button>
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
