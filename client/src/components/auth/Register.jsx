import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alertActions';
import { registerUser } from '../../actions/authActions';

const Register = ({ setAlert, registerUser, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const { name, email, password, passwordConfirm } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      setAlert('Passwords do not match', 'danger');
    } else {
      registerUser({ name, email, password })
    }
  };

  if (isAuthenticated) return <Redirect to="/dashboard" />;

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={e => onSubmit(e)} noValidate autoComplete="off">
        <input
          type="name"
          placeholder="Name"
          name="name"
          value={name}
          onChange={e => onChange(e)}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={e => onChange(e)}
        />
        <input
          type="password"
          placholder="Password"
          name="password"
          value={password}
          onChange={e => onChange(e)}
        />
        <input
          type="password"
          placholder="Confirm Password"
          name="passwordConfirm"
          value={passwordConfirm}
          onChange={e => onChange(e)}
        />
        <button type="submit" value="Submit">Signup</button>
      </form>
    </div>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  registerUser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, registerUser })(Register);

// TODO: add 'required' in each input 