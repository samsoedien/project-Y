import React from 'react';
import PropTypes from 'prop-types';

const Loader = props => (
  <div>
    <svg viewBox="-75 -75 150 150">
      <title>Loading...</title>
      <circle cx="0" cy="0" r="37.5" />
    </svg>
  </div>
);

Loader.propTypes = {};

export default Loader;
