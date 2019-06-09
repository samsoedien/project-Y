import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../actions/profileActions';

import Dashboard from '../components/layout/dashboard/Dashboard';

const DashboardContainer = ({
  profile: { profile, loading },
  auth: { user },
  getCurrentProfile,
  deleteAccount,
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  const deleteAccountCallback = () => deleteAccount();

  return (
    <div className="dashboard-container">
      <Dashboard
        profile={profile}
        loading={loading}
        user={user}
        deleteAccountCallback={deleteAccountCallback}
      />
    </div>
  );
};

DashboardContainer.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
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
  { getCurrentProfile, deleteAccount },
)(DashboardContainer);
