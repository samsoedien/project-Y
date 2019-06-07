import axios from 'axios';
import { setAlert } from './alertActions';
import { GET_POSTS, POST_ERROR, ADD_POST } from '../constants/types';

export const getPosts = () => async dispatch => {
  try {
    const res = await axios.get('/api/posts');
    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getPost = () => async dispatch => {};

export const addPost = postData => async dispatch => {
  const config = {
    header: {
      'content-type': 'json/application',
    },
  };
  try {
    const res = await axios.post('/api/posts', postData, config);
    dispatch({
      type: ADD_POST,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
