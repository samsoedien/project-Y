import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ message }) => (
  <div role="alert" className="alert">
    {message}
  </div>
);

Alert.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Alert;
