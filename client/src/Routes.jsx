import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRouteWrapper from './helpers/PrivateRouteWrapper';

// import LandingContainer from './containers/LandingContainer';
import AuthContainer from './containers/AuthContainer';

const Routes = () => (
    <Fragment>
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