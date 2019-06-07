import React from 'react';
import PropTypes from 'prop-types';

const PostForm = ({ text, onChangeCallback, onSubmitCallback }) => {
  const onChange = e => {
    onChangeCallback(e);
  };

  const onSubmit = e => {
    onSubmitCallback(e);
  };

  return (
    <div>
      <h1>post form</h1>
      <form onSubmit={e => onSubmit}>
        <textarea
          name="text"
          value={text}
          cols="30"
          rows="5"
          placeholder="Create a post"
          required
          onChange={e => onChange}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

PostForm.propTypes = {
  text: PropTypes.string.isRequired,
  onChangeCallback: PropTypes.func.isRequired,
  onSubmitCallback: PropTypes.func.isRequired,
};

export default PostForm;
