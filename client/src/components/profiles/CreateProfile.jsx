import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const CreateProfile = props => {
  const [formData, setFormData] = useState({
    company: '',
  });
  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const { company } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <form>
      <h1>Create Profile</h1>
      <input type="text" />
      <button onClick={() => toggleSocialInputs(!displaySocialInputs)}>
        Add Social Networks
      </button>

      {displaySocialInputs && (
        <Fragment>
          <p>Social Networks</p>
        </Fragment>
      )}

      <button type="submit">Submit</button>
    </form>
  );
};

CreateProfile.propTypes = {};

export default CreateProfile;
