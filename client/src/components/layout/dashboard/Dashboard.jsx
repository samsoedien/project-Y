import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Dashboard.css';

import Loader from '../../contents/Loader';
import DashboardActions from './DashboardActions';

const Dashboard = ({ profile, loading, user, deleteAccountCallback }) => {
  const deleteAccount = () => deleteAccountCallback();

  return loading && profile === null ? (
    <Loader />
  ) : (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <p>Welcome {user && user.name}</p>
      {profile !== null ? (
        <Fragment>
          <DashboardActions />
          <button onClick={() => deleteAccount()}>Delete Account</button>
        </Fragment>
      ) : (
        <Fragment>
          <p>You have not setup a profile yet</p>
          <Link to="/create-profile">Create Profile</Link>
        </Fragment>
      )}
    </div>
  );
};

Dashboard.propTypes = {
  deleteAccountCallback: PropTypes.func.isRequired,
  user: PropTypes.object,
  profile: PropTypes.object,
  loading: PropTypes.bool,
};

export default Dashboard;
