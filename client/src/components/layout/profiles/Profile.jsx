import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Loader from '../../contents/Loader';

const Profile = ({ profile, loading }) => {
  return (
    <div>
      {profile === null || loading ? (
        <Loader />
      ) : (
        <Fragment>profile info</Fragment>
      )}
    </div>
  );
};

Profile.propTypes = {
  profile: PropTypes.shape({}).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Profile;
