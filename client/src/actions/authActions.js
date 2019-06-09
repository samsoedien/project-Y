import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_PROFILE,
  USER_LOADED,
  AUTH_ERROR,
} from '../constants/types';
import { setAlert } from './alertActions';

export const registerUser = userData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.put('/api/users/register', userData, config);
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

export const loginUser = userData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.post('/api/users/login', userData, config);
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

export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get('/api/users/current');
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

export const logoutUser = () => dispatch => {
  dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: LOGOUT });
};
