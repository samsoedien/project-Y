import React from 'react';
import PropTypes from 'prop-types';

const BlogForm = ({
  headline,
  article,
  onChangeCallback,
  onSubmitCallback,
}) => {
  const onChange = e => onChangeCallback(e);

  const onSubmit = e => onSubmitCallback(e);

  return (
    <div>
      <h2>blog form</h2>
      <form onSubmit={e => onSubmit(e)}>
        <input
          name="headline"
          value={headline}
          placeholder="Headline"
          onChange={e => onChange(e)}
        />
        <br />
        <textarea
          name="article"
          value={article}
          placeholder="Write your article"
          onChange={e => onChange(e)}
        />
        <button type="submit" value="Submit">
          Submit
        </button>
      </form>
    </div>
  );
};

BlogForm.propTypes = {};

export default BlogForm;
