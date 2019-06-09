import React from 'react';
import PropTypes from 'prop-types';

import Loader from '../../contents/Loader';

const Blog = ({
  blog,
  loading,
  onChangeCallback,
  onCancelCallback,
  onSubmitCallback,
  onLikeCallback,
  onFlagCallback,
  onReplyCallback,
  onEditCallback,
  onDeleteCallback,
  onFavoriteCallback,
}) => {
  return loading ? <Loader /> : <h2>No blog found...</h2>;
};

Blog.propTypes = {
  blog: PropTypes.shape({}).isRequired,
  loading: PropTypes.bool.isRequired,
  onChangeCallback: PropTypes.func.isRequired,
  onCancelCallback: PropTypes.func.isRequired,
  onSubmitCallback: PropTypes.func.isRequired,
  onLikeCallback: PropTypes.func.isRequired,
  onFlagCallback: PropTypes.func.isRequired,
  onReplyCallback: PropTypes.func.isRequired,
  onEditCallback: PropTypes.func.isRequired,
  onDeleteCallback: PropTypes.func.isRequired,
  onFavoriteCallback: PropTypes.func.isRequired,
};

export default Blog;
