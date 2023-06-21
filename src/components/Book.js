// import React from 'react';
// import PropTypes from 'prop-types';

// const Book = ({ id, title, onDelete }) => {
//   const handleDelete = () => {
//     onDelete(id);
//   };

//   return (
//     <div>
//       <h3>{title}</h3>
//       <button className="btn" type="button" onClick={handleDelete}>Delete</button>
//     </div>
//   );
// };

// Book.propTypes = {
//   title: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
//   onDelete: PropTypes.string.isRequired,
// };

// export default Book;

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
      <p>{author}</p>
      <button className="btn" type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Book;
