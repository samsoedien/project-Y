import axios from 'axios';

import { GET_BLOGS, ADD_BLOG, BLOG_ERROR } from '../constants/types';

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

export const createBlog = (blogData, history) => async dispatch => {
  const config = {
    header: {
      'content-type': 'json/application',
    },
  };
  try {
    const res = await axios.post('/api/blogs', blogData, config);
    dispatch({
      type: ADD_BLOG,
      payload: res.data,
    });
    history.push('/blogs');
  } catch (err) {
    dispatch({
      type: BLOG_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const updateBlog = () => async dispatch => {};
export const deleteBlog = () => async dispatch => {};
export const favoriteBlog = () => async dispatch => {};
export const addBlogComment = () => async dispatch => {};
export const editBlogComment = () => async dispatch => {};
export const deleteBlogComment = () => async dispatch => {};
export const likeBlogComment = () => async dispatch => {};
export const flagBlogComment = () => async dispatch => {};
