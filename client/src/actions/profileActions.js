import axios from 'axios';
import { setAlert } from './alertActions';

import {
  GET_PROFILE,
  PROFILE_ERROR,
  GET_PROFILES,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  GET_ERRORS,
  SET_CURRENT_USER,
} from '../constants/types';

export const getCurrentProfile = () => async dispatch => {
  try {
    const res = await axios.get('/api/profiles');
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// // Profile Loading
// export const setProfileLoading = () => ({ type: PROFILE_LOADING });

// // Get Current Profile
// export const getCurrentProfile = () => dispatch => {
//   dispatch(setProfileLoading());
//   axios
//     .get('/api/profiles')
//     .then(res =>
//       dispatch({
//         type: GET_PROFILE,
//         payload: res.data,
//       }),
//     )
//     .catch(err =>
//       dispatch({
//         type: GET_PROFILE,
//         payload: {},
//       }),
//     );
// };

// // Get Profile by Handle
// export const getProfileByHandle = handle => dispatch => {
//   dispatch(setProfileLoading());
//   axios
//     .get(`/api/profiles/handle/${handle}`)
//     .then(res =>
//       dispatch({
//         type: GET_PROFILE,
//         payload: res.data,
//       }),
//     )
//     .catch(err =>
//       dispatch({
//         type: GET_PROFILE,
//         payload: null,
//       }),
//     );
// };

// // Create Profile
// export const createProfile = (profileData, history) => dispatch => {
//   axios
//     .post('/api/profiles', profileData)
//     .then(res => history.push('/dashboard'))
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data,
//       }),
//     );
// };

// // Add experience
// export const addExperience = (expData, history) => dispatch => {
//   axios
//     .post('/api/profiles/experience', expData)
//     .then(res => history.push('/dashboard'))
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data,
//       }),
//     );
// };

// // Delete Experience
// export const deleteExperience = id => dispatch => {
//   axios
//     .delete(`/api/profiles/experience/${id}`)
//     .then(res =>
//       dispatch({
//         type: GET_PROFILE,
//         payload: res.data,
//       }),
//     )
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data,
//       }),
//     );
// };

// // Get all profiles
// export const getProfiles = () => dispatch => {
//   dispatch(setProfileLoading());
//   axios
//     .get('/api/profiles/all')
//     .then(res =>
//       dispatch({
//         type: GET_PROFILES,
//         payload: res.data,
//       }),
//     )
//     .catch(err =>
//       dispatch({
//         type: GET_PROFILES,
//         payload: null,
//       }),
//     );
// };

// // Delete account & profile
// export const deleteAccount = () => dispatch => {
//   // if (window.confirm('Are you sure? This can NOT be undone!')) {
//   axios
//     .delete('/api/profiles')
//     .then(res =>
//       dispatch({
//         type: SET_CURRENT_USER,
//         payload: {},
//       }),
//     )
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data,
//       }),
//     );
//   // }
// };

// // Clear profile
// export const clearCurrentProfile = () => ({
//   type: CLEAR_CURRENT_PROFILE,
// });
