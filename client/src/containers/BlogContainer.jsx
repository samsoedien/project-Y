import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getBlog,
  updateBlog,
  deleteBlog,
  favoriteBlog,
  addBlogComment,
  editBlogComment,
  deleteBlogComment,
  likeBlogComment,
  flagBlogComment,
} from '../actions/blogActions';

import Blog from '../components/layout/blogs/Blog';

const BlogContainer = ({
  blog: { blog, loading },
  getBlog,
  updateBlog,
  deleteBlog,
  favoriteBlog,
  addBlogComment,
  editBlogComment,
  deleteBlogComment,
  likeBlogComment,
  flagBlogComment,
  match,
}) => {
  useEffect(() => {
    getBlog(match.params.id);
  }, [getBlog]);

  const [formData, setFormData] = useState({
    editable: false,
    isFavorited: false,
    isLiked: false,
    isFlagged: false,
    comment: '',
    errors: {},
  });

  const onChangeCallback = e => {};
  const onCancelCallback = e => {};
  const onSubmitCallback = e => {};
  const onLikeCallback = id => {};
  const onFlagCallback = id => {};
  const onReplyCallback = id => {};
  const onEditCallback = id => {};

  const onDeleteCallback = id => {
    deleteBlog(id);
  };

  const onFavoriteCallback = id => {};

  return (
    <Blog
      blog={blog}
      loading={loading}
      onChangeCallback={onChangeCallback}
      onCancelCallback={onCancelCallback}
      onSubmitCallback={onSubmitCallback}
      onLikeCallback={onLikeCallback}
      onFlagCallback={onFlagCallback}
      onReplyCallback={onReplyCallback}
      onEditCallback={onEditCallback}
      onDeleteCallback={onDeleteCallback}
      onFavoriteCallback={onFavoriteCallback}
    />
  );
};

BlogContainer.propTypes = {
  blog: PropTypes.shape({
    blogs: PropTypes.object,
    loading: PropTypes.bool,
  }).isRequired,
  getBlog: PropTypes.func.isRequired,
  updateBlog: PropTypes.func.isRequired,
  deleteBlog: PropTypes.func.isRequired,
  favoriteBlog: PropTypes.func.isRequired,
  addBlogComment: PropTypes.func.isRequired,
  editBlogComment: PropTypes.func.isRequired,
  deleteBlogComment: PropTypes.func.isRequired,
  likeBlogComment: PropTypes.func.isRequired,
  flagBlogComment: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  blog: state.blog,
});

export default connect(
  mapStateToProps,
  {
    getBlog,
    updateBlog,
    deleteBlog,
    favoriteBlog,
    addBlogComment,
    editBlogComment,
    deleteBlogComment,
    likeBlogComment,
    flagBlogComment,
  },
)(BlogContainer);
