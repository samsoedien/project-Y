import { combineReducers } from 'redux';
import alertReducer from './alertReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import profileReducer from './profileReducer';
import postReducer from './postReducer';
import blogReducer from './blogReducer';

export default combineReducers({
  alert: alertReducer,
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
  post: postReducer,
  blog: blogReducer,
});
