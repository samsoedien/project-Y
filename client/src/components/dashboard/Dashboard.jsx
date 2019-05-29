import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profileActions';

import Spinner from '../layout/Spinner';

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1>Dashboard</h1>
      <p>Welcome {user && user.name}</p>
      {profile !== null ? (
        <Fragment>profile data</Fragment>
      ) : (
        <Fragment>
          <p>You have not setup a profile yet</p>
          <Link to="/create-profile">Create Profile</Link>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.shape({
    user: PropTypes.object,
  }).isRequired,
  profile: PropTypes.shape({
    profile: PropTypes.object,
    loading: PropTypes.bool,
  }).isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(
  mapStateToProps,
  { getCurrentProfile },
)(Dashboard);
