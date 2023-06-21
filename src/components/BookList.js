import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookList = ({ books, onDelete }) => (
  <div>
    {books.map((book) => (
      <Book key={book.id} id={book.id} title={book.title} onDelete={onDelete} />
    ))}
  </div>
);

BookList.propTypes = {
  books: PropTypes.string.isRequired,
  onDelete: PropTypes.string.isRequired,
};

export default BookList;

// import React from 'react';
// import { useSelector } from 'react-redux';

// const BooksList = () => {
//   const books = useSelector((state) => state.books);

//   return (
//     <div>
//       <h2>Books List</h2>
//       {books.map((book) => (
//         <div key={book.item_id}>
//           <h3>{book.title}</h3>
//           <p>
//             Author:
//             {' '}
//             {book.author}
//           </p>
//           <p>
//             Category:
//             {' '}
//             {book.category}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BooksList;
