import React from 'react';
import PropTypes from 'prop-types';

import Loader from '../../contents/Loader';

const Blog = ({ blog, loading }) => {
  return loading ? <Loader /> : <h2>No blog found...</h2>;
};

Blog.propTypes = {
  blog: PropTypes.shape({}).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Blog;
