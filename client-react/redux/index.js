import { createStore, compose, applyMiddleware } from 'redux';

// 所有的 reducer
import allReducer from './reducer/index.js';

/* 中间件相关的开始 */
// 路由信息的中间件
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createHashHistory';
const history = createHistory();
const historyMiddleware = routerMiddleware(history);
// 异步中间件
import thunk from 'redux-thunk';
// 中间件数组
let middleware = [thunk, historyMiddleware];
/* 中间件相关的结束 */

// composeEnhancers 等同于 compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
  allReducer,
  composeEnhancers(
    applyMiddleware(...middleware)
  )
);

export default store;
