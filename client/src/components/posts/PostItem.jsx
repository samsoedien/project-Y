import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PostItem = ({
  post: { _id, text, name, avatar, user, likes, comments, date },
}) => {
  return (
    <div>
      <p>{text}</p>
      {/* {!auth.loading && user === auth.user._id && <button>Delete post</button>} */}
    </div>
  );
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  // auth: PropTypes.object.isRequired,
};

export default PostItem;
