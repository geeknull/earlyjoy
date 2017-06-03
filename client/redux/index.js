import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createReducer from './reducer/index.js';

import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createHashHistory';
const history = createHistory();
const historyMiddleware = routerMiddleware(history);

let middleware = [thunk, historyMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// let store = createStore(
//   appReducer,
//   composeEnhancers(
//     applyMiddleware(...middleware)
//   )
// );

export default function (routerReducer) {
  return createStore(
    createReducer(routerReducer),
    composeEnhancers(
      applyMiddleware(...middleware)
    )
  )
};
