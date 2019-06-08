import axios from 'axios';

import { GET_BLOGS, BLOG_ERROR } from '../constants/types';

export const getBlogs = () => async dispatch => {
  try {
    const res = await axios.get('/api/blogs');
    dispatch({
      type: GET_BLOGS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: BLOG_ERROR,
      payload: err.response.data,
    });
  }
};

export const getBlog = blogId => async dispatch => {};

export const createBlog = (blogData, history) => async dispatch => {};
