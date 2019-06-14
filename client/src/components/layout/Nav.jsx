import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

const Nav = ({ auth: { isAuthenticated, loading }, logoutUser }) => {
  const authLinks = (
    <ul>
      <li>
        <NavLink to="/dashboard">
          <i className="fas fa-user">Dashboard</i>
        </NavLink>
      </li>
      <li>
        <a onClick={logoutUser} href="#!">
          <i className="fas fa-sign-out-alt"> Logout</i>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    </ul>
  );
  return (
    <nav className="navbar bg-dark">
      <h1>
        <NavLink to="/">
          <i className="fas fa-code" /> Navbar
        </NavLink>
      </h1>
      <ul>
        <li>
          <NavLink to="/profiles">Profiles</NavLink>
          <NavLink to="/blogs">Blogs</NavLink>
          <NavLink to="/posts">Posts</NavLink>
        </li>
      </ul>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Nav.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { logoutUser },
)(Nav);
