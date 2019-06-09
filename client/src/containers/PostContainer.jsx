import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getPosts,
  deletePost,
  addLike,
  removeLike,
} from '../actions/postActions';

import PostFeed from '../components/layout/posts/PostFeed';
import PostFormContainer from './PostFormContainer';

const PostContainer = ({
  post: { posts, loading },
  auth,
  getPosts,
  deletePost,
  addLike,
  removeLike,
}) => {
  const [state] = useState({
    showActions: true,
  });

  const { showActions } = state;

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const onLikeCallback = id => {
    addLike(id);
  };

  const onDeleteCallback = id => {
    deletePost(id);
  };

  return (
    <Fragment>
      <PostFeed
        posts={posts}
        loading={loading}
        auth={auth}
        showActions={showActions}
        onLikeCallback={onLikeCallback}
        onDeleteCallback={onDeleteCallback}
      />
      <PostFormContainer />
    </Fragment>
  );
};

PostContainer.propTypes = {
  getPosts: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  post: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  post: state.post,
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { getPosts, deletePost, addLike, removeLike },
)(PostContainer);
