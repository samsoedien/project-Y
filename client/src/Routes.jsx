import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/routing/PrivateRoute';

// import LandingContainer from './containers/LandingContainer';
import AuthContainer from './containers/AuthContainer';
import Landing from './components/layout/Landing';
import Dashboard from './components/dashboard/Dashboard';
import ProfileFormContainer from './containers/ProfileFormContainer';
import ProfileUpdateContainer from './containers/ProfileUpdateContainer';
import ProfileListContainer from './containers/ProfileListContainer';
import ProfileContainer from './containers/ProfileContainer';

const Routes = () => (
  <Fragment>
    <Route exact path="/" component={Landing} />
    <Switch>
      <Route
        exact
        path="/register"
        render={() => <AuthContainer hasAccount={false} />}
      />
      <Route
        exact
        path="/login"
        render={() => <AuthContainer hasAccount={true} />}
      />
      <Route exact path="/profiles" component={ProfileListContainer} />
      <Route exact path="/profiles/:id" component={ProfileContainer} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <PrivateRoute
        exact
        path="/create-profile"
        component={ProfileFormContainer}
      />
      <PrivateRoute
        exact
        path="/edit-profile"
        component={ProfileUpdateContainer}
      />
    </Switch>
  </Fragment>
);

export default Routes;
