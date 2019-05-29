import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import profileReducer from './profileReducer';
// import postReducer from './postReducer';
import alertReducer from './alertReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
  // post: postReducer,
  alert: alertReducer,
});
