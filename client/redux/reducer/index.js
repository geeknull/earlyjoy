import * as CONSTANTS from '../actionTypes.js';
import { combineReducers } from 'redux';
import cloneDeep from 'lodash.clonedeep';

// 个人信息
let myInfo = (state = {}, action) => {
  switch (action.type) {
    case CONSTANTS.MY_INFO:
      return Object.assign({}, state, {
        userName: action.userName,
        avatar: action.avatar,
        getupTime: action.getupTime,
        rank: action.rank,
        continued: action.continued
      });
    case CONSTANTS.GET_UP_TIME:
      return Object.assign({}, state, {
        getupTime: action.value
      });
    case CONSTANTS.SET_MY_INFO:
      return Object.assign({}, state, {
        ...action.myInfo
      })
  }

  return state;
};


let defaultListInfo = {
  list: [], hasMore: true, offset: 0, limit: 10, loading: false, isEmpty: false
};

// 个人列表 TODO clone
let myListInfo = (state = cloneDeep(defaultListInfo), action) => {
  switch (action.type) {
    case CONSTANTS.MY_LIST:
      let newList = [...state.list, ...action.list];

      return Object.assign({}, state, {
        list: newList,
        hasMore: action.hasMore,
        offset: action.list.length + state.offset,
        loading: false,
        isEmpty: newList.length === 0
      });
    case CONSTANTS.MY_LIST_LOADING:
      return Object.assign({}, state, {
        loading: action.loading
      })
      // return [...state, ...action.list]
  }

  return state;
};

let mainPageInitState = {
  name: '',
  avatar: '',
  recently: [],
  isInit: false
};
let mainPage = (state = mainPageInitState, action) => {
  switch ( action.type ) {
    case CONSTANTS.INDEX_LIST:
      return Object.assign({}, state, {
        name: action.name,
        avatar: action.avatar,
        recently: action.recently,
        getupTime: action.getupTime,
        isInit: true
      })
  }

  return state; // init 会走到这里
};

// 获取今日列表
let todayListInfo = (state = cloneDeep(defaultListInfo), action) => {
  switch ( action.type ) {
    case CONSTANTS.TODAY_LIST:
      // return Object.assign({}, state, action.list);
      // return action.list
      let newList = [...state.list, ...action.list];
      return Object.assign({}, state, {
        list: newList,
        hasMore: action.hasMore,
        offset: action.list.length + state.offset,
        loading: false,
        isEmpty: newList.length === 0
      });
    case CONSTANTS.TODAY_LIST_LOADING:
      return Object.assign({}, state, {
        loading: action.loading
      })
  }

  return state;
};

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
  }

  return state;
};

export default function (routerReducer) {
  return combineReducers({
    myInfo: myInfo,
    myListInfo: myListInfo,
    mainPage: mainPage,
    todayListInfo: todayListInfo,
    rankList: rankList,
    detail: detail,
    otherInfo: otherInfo,
    routing: routerReducer
  });
};
