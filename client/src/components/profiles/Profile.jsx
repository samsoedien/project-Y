import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Spinner from '../layout/Spinner';

const Profile = ({ profile, loading }) => {
  return (
    <div>
      {profile === null || loading ? (
        <Spinner />
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
