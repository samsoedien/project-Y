import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRouteWrapper from './helpers/PrivateRouteWrapper';

// import LandingContainer from './containers/LandingContainer';
import AuthContainer from './containers/AuthContainer';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

const Routes = () => (
  <Fragment>
    <Route exact path="/" component={Landing} />
    <Switch>
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
    </Switch>

    {/* <Route exact path="/" component={LandingContainer} /> */}
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
  </Fragment>
);

export default Routes;