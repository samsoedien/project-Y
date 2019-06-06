import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './ProfileList.css';

import Spinner from '../layout/Spinner';
import ProfileItem from './ProfileItem';

const ProfileList = ({ profiles, loading }) => {
  return (
    <div className="profile-list">
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h2>Profiles</h2>
          <div>
            {profiles.length > 0 ? (
              profiles.map(profile => (
                <ProfileItem key={profile._id} profile={profile} />
              ))
            ) : (
              <h4>No profiles found...</h4>
            )}
          </div>
        </Fragment>
      )}
    </div>
  );
};

ProfileList.propTypes = {
  profiles: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default ProfileList;
