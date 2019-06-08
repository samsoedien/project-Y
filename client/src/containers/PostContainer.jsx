import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from '../actions/postActions';

import PostFeed from '../components/posts/PostFeed';
import PostFormContainer from './PostFormContainer';

const PostContainer = ({ post: { posts, loading }, getPosts }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <div className="post-container">
      <PostFeed posts={posts} loading={loading} />
      <PostFormContainer />
    </div>
  );
};

PostContainer.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  post: state.post,
});

export default connect(
  mapStateToProps,
  { getPosts },
)(PostContainer);
