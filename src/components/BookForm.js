// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addBook } from '../redux/books/booksSlice';

// const BookForm = () => {
//   const dispatch = useDispatch();
//   const [title, setTitle] = useState('');
//   const [category, setCategory] = useState('Categories1');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (title.trim()) {
//       dispatch(addBook({ title, category }));
//       setTitle('');
//       setCategory('Categories1');
//     }
//   };

//   return (
//     <div>
//       <h2>Add New Book</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           placeholder="Enter book title"
//         />
//         <select
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//           name="mySelect"
//           id="mySelect"
//         >
//           <option value="Categories1">Categories1</option>
//           <option value="Categories2">Categories2</option>
//           <option value="Categories3">Categories3</option>
//         </select>
//         <button type="submit">Add Book</button>
//       </form>
//     </div>
//   );
// };

// export default BookForm;

// BookForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const BookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && author.trim()) {
      dispatch(addBook({ title, author }));
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
