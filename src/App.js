import { Routes, Route } from 'react-router-dom';
import Book from './components/Book';
import Navbar from './components/Navba';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Book />} />
        {/* <Route path="Categories" element={<Categories />} /> */}
      </Routes>
    </>
  );
}

export default App;
