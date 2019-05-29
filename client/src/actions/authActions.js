import axios from 'axios';
import jwtDecode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  USER_LOADED,
  AUTH_ERROR,
  CLEAR_PROFILE,
  GET_ERRORS,
  SET_CURRENT_USER,
} from '../constants/types';
import { setAlert } from './alertActions';

export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get('/api/auth');
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

export const registerUser = ({ name, email, password }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ name, email, password });
  try {
    const res = await axios.post('/api/users', body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

export const loginUser = (email, password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ email, password });
  try {
    const res = await axios.post('/api/users', body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const logoutUser = () => dispatch => {
  dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: LOGOUT });
};

// // Register User
// export const registerUser = (userData, history) => dispatch => {
//   axios
//     .post('/api/users/register', userData)
//     .then(res => history.push('/login'))
//     .catch(err => dispatch({
//       type: GET_ERRORS,
//       payload: err.response.data,
//     }));
// };

// Set logged in user
export const setCurrentUser = decoded => ({
  type: SET_CURRENT_USER,
  payload: decoded,
});

// // Login - Get User Token
// export const loginUser = userData => dispatch => {
//   axios
//     .post('/api/users/login', userData)
//     .then(res => {
//       // Save to localStorage
//       const { token } = res.data;
//       // Set token to ls
//       localStorage.setItem('jwtToken', token);
//       // Set token to Auth header
//       setAuthToken(token);
//       // Decode token to get user data
//       const decoded = jwtDecode(token);
//       // Set current user
//       dispatch(setCurrentUser(decoded));
//     })
//     .catch(err => dispatch({
//       type: GET_ERRORS,
//       payload: err.response.data,
//     }));
// };

// // Log user out
// export const logoutUser = () => dispatch => {
//   // Remove token from localStorage
//   localStorage.removeItem('jwtToken');
//   // Remove auth header for future requests
//   setAuthToken(false);
//   // Set current user to {} which will set isAuthenticated to false
//   dispatch(setCurrentUser({}));
// };
