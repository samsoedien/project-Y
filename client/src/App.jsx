import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core';

import { loadUser } from './actions/authActions';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/wrappers/PrivateRoute';
import store from './store/store';
import theme from './theme/theme';
// import logo from './logo.svg';
import './App.scss';

import Nav from './components/layout/Nav';
import Alert from './components/layout/Alert';
import Landing from './components/layout/Landing';

// import HeaderContainer from './containers/HeaderContainer';
// import FooterContainer from './containers/FooterContainer';
import AuthContainer from './containers/AuthContainer';
import DashboardContainer from './containers/DashboardContainer';
import DeviceFormContainer from './containers/DeviceFormContainer';
import ProfileContainer from './containers/ProfileContainer';
import ProfileListContainer from './containers/ProfileListContainer';
import ProfileFormContainer from './containers/ProfileFormContainer';
import ProfileUpdateContainer from './containers/ProfileUpdateContainer';
import PostContainer from './containers/PostContainer';
// import BlogContainer from './containers/BlogContainer';
import BlogFormContainer from './containers/BlogFormContainer';
import BlogListContainer from './containers/BlogListContainer';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <Router>
          <div className="app">
            <Nav />
            <main className="app-main">
              <Alert />
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route
                  path="/register"
                  render={() => <AuthContainer hasAccount={false} />}
                />
                <Route
                  path="/login"
                  render={() => <AuthContainer hasAccount={true} />}
                />
                <Route path="/profiles" component={ProfileListContainer} />
                <Route path="/profiles/:id" component={ProfileContainer} />
                <PrivateRoute
                  path="/dashboard"
                  component={DashboardContainer}
                />
                <PrivateRoute
                  path="/add-device"
                  component={DeviceFormContainer}
                />
                <PrivateRoute
                  path="/create-profile"
                  component={ProfileFormContainer}
                />
                <PrivateRoute
                  path="/edit-profile"
                  component={ProfileUpdateContainer}
                />
                <PrivateRoute path="/posts" component={PostContainer} />
                <Route path="/blogs" component={BlogListContainer} />
                <PrivateRoute
                  path="/create-blog"
                  component={BlogFormContainer}
                />
              </Switch>
            </main>
          </div>
        </Router>
      </MuiThemeProvider>
    </Provider>
  );
};

export default App;
