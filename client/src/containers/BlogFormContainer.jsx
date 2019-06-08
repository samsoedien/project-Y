import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createBlog } from '../actions/blogActions';

import BlogForm from '../components/blogs/BlogForm';

const BlogFormContainer = ({ createBlog, history }) => {
  const [formData, setFormData] = useState({
    headline: '',
    article: '',
    errors: {},
  });

  const { headline, article } = formData;

  const onChangeCallback = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmitCallback = e => {
    e.preventDefault();
    const blogData = {
      headline,
      article,
    };
    createBlog(blogData, history);
  };

  return (
    <BlogForm
      headline={headline}
      article={article}
      onChangeCallback={onChangeCallback}
      onSubmitCallback={onSubmitCallback}
    />
  );
};

BlogFormContainer.propTypes = {
  createBlog: PropTypes.func.isRequired,
};

export default connect(
  null,
  { createBlog },
)(withRouter(BlogFormContainer));
