import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../actions/profileActions';

import ProfileForm from '../components/profiles/ProfileForm';

const ProfileUpdateContainer = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history,
}) => {
  const [formData, setFormData] = useState({
    company: '',
    twitter: '',
    errors: {},
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  useEffect(() => {
    getCurrentProfile();

    setFormData({
      company: loading || !profile.company ? '' : profile.company,
      twitter: loading || !profile.social ? '' : profile.social.twitter,
    });
  }, [loading, getCurrentProfile]);

  const { company, twitter, errors } = formData;

  const onChangeCallback = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmitCallback = e => {
    e.preventDefault();
    const profileData = {
      company,
    };
    createProfile(profileData, history, true);
  };

  return (
    <div className="profile-update-container">
      <ProfileForm
        onChangeCallback={onChangeCallback}
        onSubmitCallback={onSubmitCallback}
        company={company}
        twitter={twitter}
        displaySocialInputs={displaySocialInputs}
        toggleSocialInputs={toggleSocialInputs}
        errors={errors}
      />
    </div>
  );
};

ProfileUpdateContainer.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile,
});

export default connect(
  mapStateToProps,
  { createProfile, getCurrentProfile },
)(withRouter(ProfileUpdateContainer));
