import React from 'react';
import PropTypes from 'prop-types';

import Loader from '../../contents/Loader';
import BlogItem from './BlogItem';

const BlogList = ({ blogs, loading }) => {
  return loading ? (
    <Loader />
  ) : (
    <div className="blog-list">
      <h2>Blogs</h2>
      {blogs.length > 0 ? (
        blogs.map(blog => <BlogItem key={blog._id} blog={blog} />)
      ) : (
        <h4>No blogs found</h4>
      )}
      }
    </div>
  );
};

BlogList.propTypes = {
  blogs: PropTypes.shape({}).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default BlogList;
