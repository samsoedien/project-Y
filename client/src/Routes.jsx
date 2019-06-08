import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/wrappers/PrivateRoute';

// import LandingContainer from './containers/LandingContainer';
import AuthContainer from './containers/AuthContainer';
import Landing from './components/layout/Landing';
import DashboardContainer from './containers/DashboardContainer';
import ProfileFormContainer from './containers/ProfileFormContainer';
import ProfileUpdateContainer from './containers/ProfileUpdateContainer';
import ProfileListContainer from './containers/ProfileListContainer';
import ProfileContainer from './containers/ProfileContainer';

import PostContainer from './containers/PostContainer';
import BlogListContainer from './containers/BlogListContainer';
import BlogFormContainer from './containers/BlogFormContainer';

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
      <PrivateRoute exact path="/dashboard" component={DashboardContainer} />
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
      <PrivateRoute exact path="/posts" component={PostContainer} />
      <Route exact path="/blogs" component={BlogListContainer} />
      <PrivateRoute exact path="/create-blog" component={BlogFormContainer} />
    </Switch>
  </Fragment>
);

export default Routes;
