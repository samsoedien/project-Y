import React from 'react';
import PropTypes from 'prop-types';

import Spinner from '../layout/Spinner';

const Blog = ({ blog, loading }) => {
  return loading ? <Spinner /> : <h2>No blog found...</h2>;
};

Blog.propTypes = {
  blog: PropTypes.shape({}).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Blog;
