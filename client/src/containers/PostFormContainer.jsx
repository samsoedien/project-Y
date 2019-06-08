import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../actions/postActions';

import PostForm from '../components/posts/PostForm';

const PostFormContainer = ({ addPost }) => {
  const [text, setText] = useState('');

  const onChangeCallback = e => setText(e.target.value);

  const onSubmitCallback = e => {
    e.preventDefault();

    const postData = {
      text,
    };

    addPost(postData);
    setText('');
  };

  return (
    <div className="post-form-container">
      <PostForm
        text={text}
        onChangeCallback={onChangeCallback}
        onSubmitCallback={onSubmitCallback}
      />
    </div>
  );
};

PostFormContainer.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(
  null,
  { addPost },
)(PostFormContainer);
