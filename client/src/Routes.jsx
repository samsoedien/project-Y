import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRouteWrapper from './helpers/PrivateRouteWrapper';
import PrivateRoute from './components/routing/PrivateRoute';

// import LandingContainer from './containers/LandingContainer';
import AuthContainer from './containers/AuthContainer';
import Landing from './components/layout/Landing';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profiles/CreateProfile';
import Profiles from './components/profiles/Profiles';

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
      <Route exact path="/profiles" component={Profiles} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/create-profile" component={CreateProfile} />
    </Switch>
  </Fragment>
);

export default Routes;
