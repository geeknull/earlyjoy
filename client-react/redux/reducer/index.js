import * as CONSTANTS from '../actionTypes.js';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import myInfo from './myInfo.js';
import listReducers from './listReducers.js';

// 获取排行列表
let rankList = (state = [], action) => {
  switch ( action.type ) {
    case CONSTANTS.RANK_LIST:
      return action.list;
  }

  return state;
};

// 详情处理
let detail = (state={}, action) => {
  switch (action.type) {
    case CONSTANTS.DETAIL_INFO:
      return Object.assign({}, state, action.info);
  }
  return state;
};

// 获取他人信息
let otherInfo = (state={list: []}, action) => {
  switch (action.type) {
    case CONSTANTS.OTHER_USER:
      return Object.assign({}, state, action.info);
    case CONSTANTS.OTHER_USER_CLEAR:
      return Object.assign({}, {
        avatar: null,
        continued: null,
        getupTime: null,
        rank: null,
        uid: null,
        userName: null
      });
  }

  return state;
};

export default combineReducers({
  myInfo: myInfo,
  rankList: rankList,
  detail: detail,
  otherInfo: otherInfo,
  ...listReducers, // myListInfo, todayListInfo
  routing: routerReducer
});
