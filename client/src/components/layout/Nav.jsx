import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className="navbar bg-dark">
    <h1>
      <Link to="/"><i className="fas fa-code"></i> Navbar</Link>
    </h1>
    <ul>
      <li><Link to="/profiles">Profiles</Link></li>
      <li><Link to="/register">Register</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
  </nav>
);

export default Nav;
