import * as CONSTANTS from '../actionTypes.js';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

let initCntData = {
  cnt: 0,
};

let cnt = (state = initCntData, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_CNT:
      return Object.assign({}, state, {
        cnt: state.cnt+1
      });
  }

  return state;
};

// export default function () {
//   return combineReducers({
//     cnt: cnt,
//     routing: routerReducer
//   });
// };

export default combineReducers({
  cnt: cnt,
  routing: routerReducer // react-router-redux 中的路由信息
});
