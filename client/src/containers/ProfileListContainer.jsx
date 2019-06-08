import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProfiles } from '../actions/profileActions';

import ProfileList from '../components/profiles/ProfileList';

const ProfileListContainer = ({
  getProfiles,
  profile: { profiles, loading },
}) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  return (
    <div className="profile-container">
      <ProfileList profiles={profiles} loading={loading} />
    </div>
  );
};

ProfileListContainer.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.shape({
    profiles: PropTypes.object,
    loading: PropTypes.bool,
  }).isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile,
});

export default connect(
  mapStateToProps,
  { getProfiles },
)(ProfileListContainer);
