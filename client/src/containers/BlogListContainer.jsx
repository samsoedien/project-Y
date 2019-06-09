import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getBlogs } from '../actions/blogActions';

import BlogList from '../components/layout/blogs/BlogList';
import BlogFormContainer from './BlogFormContainer';

const BlogListContainer = ({ blog: { blogs, loading }, getBlogs }) => {
  useEffect(() => {
    getBlogs();
  }, [getBlogs]);

  return (
    <Fragment>
      <BlogList blogs={blogs} loading={loading} />
      <BlogFormContainer />
    </Fragment>
  );
};

BlogListContainer.propTypes = {
  getBlogs: PropTypes.func.isRequired,
  blog: PropTypes.shape({
    blogs: PropTypes.object,
    loading: PropTypes.bool,
  }).isRequired,
};

const mapstateToProps = state => ({
  blog: state.blog,
});

export default connect(
  mapstateToProps,
  { getBlogs },
)(BlogListContainer);
