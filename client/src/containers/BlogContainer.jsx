import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getBlog, deleteBlog, getBlogs } from '../actions/blogActions';

import Blog from '../components/blogs/Blog';

const BlogContainer = ({
  blog: { blog, loading },
  getBlog,
  deleteBlog,
  match,
}) => {
  useEffect(() => {
    getBlog(match.params.id);
  }, [getBlog]);

  const onDeleteBlogCallback = id => {
    deleteBlog(id);
  };

  return (
    <Blog
      blog={blog}
      loading={loading}
      onDeleteBlogCallback={onDeleteBlogCallback}
    />
  );
};

BlogContainer.propTypes = {
  getBlog: PropTypes.func.isRequired,
  deleteBlog: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  blog: state.blog,
});

export default connect(
  mapStateToProps,
  { getBlog, deleteBlog },
)(BlogContainer);
