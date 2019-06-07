import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './PostFeed.css';

import Spinner from '../layout/Spinner';
import PostItem from './PostItem';

const PostFeed = ({ posts, loading }) => {
  return loading ? (
    <Spinner />
  ) : (
    <div className="post-feed">
      <h2>Posts</h2>
      {/* {posts}
      {posts.map(post => (
        <PostItem key={post._id} post={post.text} />
      ))} */}
    </div>
  );
};

PostFeed.propTypes = {
  posts: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default PostFeed;
