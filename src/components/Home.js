import React, { useState } from 'react';
import BookList from './BookList';
import BookForm from './BookForm';

const Home = () => {
  const [books, setBooks] = useState([]);

  const handleCreateBook = (title) => {
    const newBook = { id: Date.now(), title };
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  const handleDeleteBook = (id) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };

  return (
    <div>
      <h2>Home Page</h2>
      <BookForm onCreate={handleCreateBook} />
      <BookList books={books} onDelete={handleDeleteBook} />
    </div>
  );
};

export default Home;

// import React from 'react';
// import Navbar from './Navba';
// import BookForm from './BookForm';

// function HomePage() {
//   return (
//     <div>
//       <Navbar />
//       <BookForm />
//     </div>
//   );
// }

// export default HomePage;
