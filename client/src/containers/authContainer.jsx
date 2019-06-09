import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../actions/alertActions';
import { registerUser, loginUser } from '../actions/authActions';

import Register from '../components/layout/auth/Register';
import Login from '../components/layout/auth/Login';

const AuthContainer = ({
  setAlert,
  registerUser,
  loginUser,
  auth: { isAuthenticated },
  hasAccount,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    showPassword: false,
    errors: {},
  });
  const {
    name,
    email,
    password,
    passwordConfirm,
    showPassword,
    errors,
  } = formData;

  const onChangeCallback = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmitRegisterCallback = async e => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      setAlert('Passwords do not match', 'danger');
    } else {
      const userData = {
        name,
        email,
        password,
      };
      registerUser(userData);
    }
  };

  const onSubmitLoginCallback = async e => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    loginUser(userData);
  };

  const onShowPasswordCallback = () => {
    console.log('setState showpassword');
  };

  if (isAuthenticated) return <Redirect to="/dashboard" />;

  return (
    <div className="auth-container">
      {!hasAccount ? (
        <Register
          name={name}
          email={email}
          password={password}
          passwordConfirm={passwordConfirm}
          showPassword={showPassword}
          onChangeCallback={onChangeCallback}
          onSubmitRegisterCallback={onSubmitRegisterCallback}
          onShowPasswordCallback={onShowPasswordCallback}
          errors={errors}
        />
      ) : (
        <Login
          email={email}
          password={password}
          showPassword={showPassword}
          onChangeCallback={onChangeCallback}
          onSubmitLoginCallback={onSubmitLoginCallback}
          onShowPasswordCallback={onShowPasswordCallback}
          errors={errors}
        />
      )}
    </div>
  );
};

AuthContainer.defaultProps = {
  hasAccount: false,
};

AuthContainer.propTypes = {
  setAlert: PropTypes.func.isRequired,
  registerUser: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.shape({
    isAuthenticated: PropTypes.bool,
  }).isRequired,
  errors: PropTypes.shape({}).isRequired,
  hasAccount: PropTypes.bool,
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(
  mapStateToProps,
  { setAlert, registerUser, loginUser },
)(withRouter(AuthContainer));

// Does this container need withRouter??
