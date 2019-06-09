import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getBlogs } from '../actions/blogActions';

import BlogList from '../components/layout/blogs/BlogList';

const BlogListContainer = ({ getBlogs }) => {
  useEffect(() => {
    getBlogs();
  }, [getBlogs]);

  return <BlogList />;
};

BlogListContainer.propTypes = {
  getBlogs: PropTypes.func.isRequired,
};

const mapstateToProps = state => ({
  blog: state.blog,
});

export default connect(
  mapstateToProps,
  { getBlogs },
)(BlogListContainer);
