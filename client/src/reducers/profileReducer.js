import {
  GET_PROFILE,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  GET_PROFILES,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
} from '../constants/types';

const initialState = {
  profile: null,
  profiles: [], // was null
  repos: [], // not implemented
  loading: false,
  error: {},
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        repos: [],
        loading: false,
      };
    default:
      return state;
  }
}
// case PROFILE_LOADING:
//   return {
//     ...state,
//     loading: true,
//   };
// case GET_PROFILE:
//   return {
//     ...state,
//     profile: payload,
//     loading: false,
//   };
// case GET_PROFILES:
//   return {
//     ...state,
//     profiles: payload,
//     loading: false,
//   };
// case CLEAR_CURRENT_PROFILE:
//   return {
//     ...state,
//     profile: null,
//   };
