import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

const initialState = {};

const middleware = [thunk];

// const enhancers = [];
// const isDevelopment = process.env.NODE_ENV === 'development';
// if (isDevelopment && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__) {
//   enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
// }

// const store = createStore(
//   rootReducer,
//   initialState,
//   compose(
//     applyMiddleware(...middleware),
//     ...enhancers,
//   ),
// );

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(...middleware),
  ),
);

export default store;
