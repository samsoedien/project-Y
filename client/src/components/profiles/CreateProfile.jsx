import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profileActions';

const CreateProfile = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
    company: '',
    twitter: '',
  });
  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const { company, twitter } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history);
  };

  return (
    <form onSubmit={e => onSubmit(e)}>
      <h1>Create Profile</h1>
      <input
        type="text"
        placeholder="Company"
        name="company"
        value={company}
        onChange={e => onChange(e)}
      />
      <button onClick={() => toggleSocialInputs(!displaySocialInputs)}>
        Add Social Networks
      </button>

      {displaySocialInputs && (
        <Fragment>
          <p>Social Networks</p>
          <input
            type="text"
            placeholder="Twitter"
            name="twitter"
            value={twitter}
            onChange={e => onChange(e)}
          />
        </Fragment>
      )}

      <button type="submit">Submit</button>
    </form>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default connect(
  null,
  { createProfile },
)(withRouter(CreateProfile));
