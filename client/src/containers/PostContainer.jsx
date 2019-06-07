import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from '../actions/postActions';

import PostFeed from '../components/posts/PostFeed';

const PostContainer = ({ posts: { posts, loading }, getPosts }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <div className="post-container">
      <PostFeed posts={posts} loading={loading} />
    </div>
  );
};

PostContainer.propTypes = {
  getPosts: PropTypes.func.isRequired,
  posts: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  posts: state.posts,
  // auth: state.auth
});

export default connect(
  mapStateToProps,
  { getPosts },
)(PostContainer);
