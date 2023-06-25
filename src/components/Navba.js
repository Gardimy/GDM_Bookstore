import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navba.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => (
  <nav className="NavBarContainer">
    <ul className="Navbar">
      <h1>Bookstore CMS</h1>
      <li><NavLink className="bookslink" to="/">Books</NavLink></li>
      <li><NavLink to="/Categories">Categories</NavLink></li>
    </ul>
    <div className="faUser"><NavLink className="user-circle" to="/User"><FontAwesomeIcon icon={faUser} /></NavLink></div>
  </nav>
);

export default Navbar;
