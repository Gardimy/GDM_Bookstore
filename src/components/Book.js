import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ id, title, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div>
      <h3>{title}</h3>
      <button className="btn" type="button" onClick={handleDelete}>Delete</button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.string.isRequired,
};

export default Book;

// import React, { useState } from 'react';
// import PropTypes from 'prop-types';

// function Book({ title, author }) {
//   const [isDeleted, setDeleted] = useState(false);

//   const handleDelete = () => {
//     setDeleted(true);
//   };

//   if (isDeleted) {
//     return null; // Don't render the deleted book
//   }

//   return (
//     <div>
//       <h3>{title}</h3>
//       <p>{author}</p>
//       <button className="btn" type="button" onClick={handleDelete}>Delete</button>
//     </div>
//   );
// }

// Book.propTypes = {
//   title: PropTypes.string.isRequired,
//   author: PropTypes.string.isRequired,
// };

// export default Book;
