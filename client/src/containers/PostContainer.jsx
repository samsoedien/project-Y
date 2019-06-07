import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from '../actions/postActions';

import PostFeed from '../components/posts/PostFeed';
import PostFormContainer from './PostFormContainer';

const PostContainer = ({ posts, getPosts }) => {
  useEffect(() => {
    getPosts();
    console.log(posts);
  }, [getPosts]);

  return (
    <div className="post-container">
      <h1>hi</h1>
      {/* <PostFeed posts={posts} loading={loading} /> */}
      <PostFormContainer />
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
