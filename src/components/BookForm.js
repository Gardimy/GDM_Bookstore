import React, { useState } from 'react';
import PropTypes from 'prop-types';

const BookForm = ({ onCreate }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onCreate(title);
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter book title" />
      <button type="submit">Add Book</button>
    </form>
  );
};

BookForm.propTypes = {
  onCreate: PropTypes.string.isRequired,
};

export default BookForm;

// import React, { useState } from 'react';
// import PropTypes from 'prop-types';

// function BookForm({ onAddBook }) {
//   const [title, setTitle] = useState('');
//   const [author, setAuthor] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (title === author) {
//       const newBook = {
//         id: Date.now(),
//         title,
//         author,
//       };
//       onAddBook(newBook);
//       setTitle('');
//       setAuthor('');
//     }
//   };

//   return (
//     <div>
//       <h2>Add Book</h2>
//       <form onSubmit={handleSubmit}>
// eslint-disable-next-line max-len
//         <input type="text" placeholder="Name" required onChange={(e) => setTitle(e.target.value)} />
// eslint-disable-next-line max-len
//         <input type="text" placeholder="Author" required onChange={(e) => setTitle(e.target.value)} />
//         <select name="mySelect" id="mySelect">
//           <option value="Categories1">Categories1</option>
//           <option value="Categories2">Categories2</option>
//           <option value="Categories3">Categories3</option>
//         </select>
//         <button type="submit">Add</button>
//       </form>
//     </div>
//   );
// }

// BookForm.propTypes = {
//   onAddBook: PropTypes.func.isRequired,
// };

// export default BookForm;
