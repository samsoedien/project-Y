import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profileActions';

import CreateProfile from '../components/profiles/CreateProfile';

const ProfileFormContainer = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
    company: '',
    twitter: '',
    errors: {},
  });
  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const { company, twitter, errors } = formData;

  const onChangeCallback = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmitCallback = e => {
    e.preventDefault();
    const profileData = formData;
    createProfile(profileData, history);
  };

  return (
    <div className="profile-form-container">
      <CreateProfile
        onChangeCallback={onChangeCallback}
        onSubmitCallback={onSubmitCallback}
        company={company}
        errors={errors}
      />
    </div>
  );
};

ProfileFormContainer.propTypes = {
  createProfile: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default connect(
  null,
  { createProfile },
)(withRouter(ProfileFormContainer));
