import React from 'react';
import PropTypes from 'prop-types';
import { NavLink as Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

// import ScrollWrapper from '../wrappers/ScrollWrapper';
// import './Navbar.css';

const Navbar = ({
  user,
  isAuthenticated,
  isOpen,
  onNavbarToggleCallback,
  onLogoutCallback,
  onHomepage,
}) => {
  const onNavbarToggle = () => {
    onNavbarToggleCallback();
  };

  const onLogout = e => {
    e.preventDefault();
    onLogoutCallback();
  };

  const handleScroll = scrollDistance => {
    const navElement = document.getElementById('myNav');
    if (scrollDistance > 80) {
      navElement.classList.add('navbar--shrink');
    } else {
      navElement.classList.remove('navbar--shrink');
    }
  };
  
  const guestLinks = (
    <nav>
      <ul>
        <li><Link tag={Link} to="/register" className="navbar__list__item__link">Signup</Link></li>
        <li><Link tag={Link} to="/login" className="navbar__list__item__link">Login</Link></li>
      </ul>
    </nav>
  );

  const authLinks = (
    <nav>
      <ul>
        {' '}
        {user.name}
        <li onClick={onLogout}><Link tag={Link} to="/home" className="navbar__list__item__link--dropdown">Logout</Link></li>
      </ul>
    </nav>
  );


  return (
    <nav className="header__nav">
      <ul className="navbar__list">
        <li className="navbar__list__item"><a href="/home" tag={Link} className="navbar__list__item__link">Home</a></li>   
      </ul>
      {isAuthenticated ? authLinks : guestLinks}
    </nav>
  );
};

Navbar.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  onNavbarToggleCallback: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onLogoutCallback: PropTypes.func.isRequired,
  onHomepage: PropTypes.bool.isRequired,
};

export default Navbar;
