import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Spinner from '../layout/Spinner';
import PostItem from './PostItem';

const PostFeed = ({ posts, loading }) => {
  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <h2>Posts</h2>
      {posts.map(post => (
        <PostItem key={post._id} post={post} />
      ))}
    </Fragment>
  );
};

PostFeed.propTypes = {};

export default PostFeed;
