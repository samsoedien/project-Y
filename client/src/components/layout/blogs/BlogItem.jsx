import React from 'react';
import PropTypes from 'prop-types';

const BlogItem = ({ blog: { headline, article } }) => {
  return (
    <div>
      <h3>{headline}</h3>
      <article>
        <p>{article}</p>
      </article>
    </div>
  );
};

BlogItem.propTypes = {
  blog: PropTypes.shape({}).isRequired,
};

export default BlogItem;
