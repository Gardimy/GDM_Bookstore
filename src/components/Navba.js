import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navba.css';

const Navbar = () => (
  <nav className="NavBarContainer">
    <ul className="Navbar">
      <h1>Bookstore CMS</h1>
      <li><NavLink to="/">Books</NavLink></li>
      <li><NavLink to="/Categories">Categories</NavLink></li>
    </ul>
  </nav>
);

export default Navbar;
