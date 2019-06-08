import React from 'react';
import PropTypes from 'prop-types';
import './PostFeed.css';

import Spinner from '../layout/Spinner';
import PostItem from './PostItem';

const PostFeed = ({
  posts,
  loading,
  auth,
  showActions,
  onLikeCallback,
  onDeleteCallback,
}) => {
  const onLikeHandleClick = id => {
    onLikeCallback(id);
  };

  const onDeleteHandleClick = id => {
    onDeleteCallback(id);
  };

  return loading ? (
    <Spinner />
  ) : (
    <div className="post-feed">
      <h2>Posts</h2>
      {posts.map(post => (
        <PostItem
          key={post._id}
          post={post}
          auth={auth}
          showActions={showActions}
          onLikeHandleClick={onLikeHandleClick}
          onDeleteHandleClick={onDeleteHandleClick}
        />
      ))}
    </div>
  );
};

PostFeed.propTypes = {
  posts: PropTypes.shape({
    text: PropTypes.string,
  }).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default PostFeed;
