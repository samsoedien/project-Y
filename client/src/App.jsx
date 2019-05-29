import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import jwtDecode from 'jwt-decode';
import { MuiThemeProvider } from '@material-ui/core';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/authActions';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { clearCurrentProfile } from './actions/profileActions';
import store from './store/store';
import theme from './theme/theme';
import logo from './logo.svg';
import './App.css';
// import './App.scss';

import Routes from './Routes';
import Navbar from './components/layout/Navbar';
import HeaderContainer from './containers/HeaderContainer';
// import FooterContainer from './containers/FooterContainer';

import Alert from './components/layout/Alert';
import Nav from './components/layout/Nav';
import Landing from './components/layout/Landing';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}


// // Check for token
// if (localStorage.jwtToken) {
//   // Set auth token header auth
//   setAuthToken(localStorage.jwtToken);
//   // Decode token and get user info and exp
//   const decoded = jwtDecode(localStorage.jwtToken);
//   // Set user and isAuthenticated
//   store.dispatch(setCurrentUser(decoded));

//   // Check for expired token
//   const currentTime = Date.now() / 1000;
//   if (decoded.exp < currentTime) {
//     // Logout user
//     store.dispatch(logoutUser());
//     // Clear current Profile
//     store.dispatch(clearCurrentProfile());
//     // Redirect to login
//     window.location.href = '/login';
//   }
// }

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Nav />
          <main className="app-main">
            <Alert />
            <Routes />
          </main>
        </Fragment>
      </Router>
    </Provider>
  );
}
// const App = () => (
//   <Provider store={store}>
//     <MuiThemeProvider theme={theme}>
//       <Router>
//         <div className="app">
//           <HeaderContainer />
//           {/* <Switch>
//             <Route exact path="/home" component={HeaderContainer} />
//             <Route path="/" render={() => <HeaderContainer onHomepage={false} />} />
//           </Switch> */}
//           <main className="app-main">
//             <Routes />
//           </main>
//           {/* <FooterContainer /> */}
//         </div>
//       </Router>
//     </MuiThemeProvider>
//   </Provider>
// );

export default App;
