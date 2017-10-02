/**
 * Created by Weil on 2017/7/9.
 */
import * as CONSTANTS from '../actionTypes.js';
import cloneDeep from 'lodash.clonedeep';

let defaultListInfo = {
  list: [], offset: 0, limit: 10,
  hasMore: true, loading: false, isEmpty: false, isInit: false
};

// 个人状态列表
let myListInfo = (state = cloneDeep(defaultListInfo), action) => {
  switch (action.type) {
    case CONSTANTS.MY_LIST:
      let newList = [...state.list, ...action.list];

      return Object.assign({}, state, {
        list: newList,
        offset: action.list.length + state.offset,
        hasMore: action.hasMore,
        loading: false,
        isEmpty: newList.length === 0,
        isInit: true
      });
    case CONSTANTS.MY_LIST_LOADING:
      return Object.assign({}, state, {
        loading: action.loading
      })
  }

  return state;
};

// 获取今日列表
let todayListInfo = (state = cloneDeep(defaultListInfo), action) => {
  switch (action.type) {
    case CONSTANTS.TODAY_LIST:
      let newList = [...state.list, ...action.list];
      return Object.assign({}, state, {
        list: newList,
        offset: action.list.length + state.offset,
        hasMore: action.hasMore,
        loading: false,
        isEmpty: newList.length === 0,
        isInit: true
      });
    case CONSTANTS.TODAY_LIST_LOADING:
      return Object.assign({}, state, {
        loading: action.loading
      })
  }

  return state;
};

// 排行榜的列表
let rankListInfo = (state = cloneDeep(defaultListInfo), action) => {
  switch (action.type) {
    case CONSTANTS.RANK_LIST:
      let newList = [...state.list, ...action.list];
      return Object.assign({}, state, {
        list: newList,
        offset: action.list.length + state.offset,
        hasMore: action.hasMore,
        loading: false,
        isEmpty: newList.length === 0,
        isInit: true
      });
    case CONSTANTS.RANK_LIST_LOADING:
      return Object.assign({}, state, {
        loading: action.loading
      })
  }

  return state;
};

// 他人的状态列表信息
let otherListInfo = (state = cloneDeep(defaultListInfo), action) => {
  switch (action.type) {
    case CONSTANTS.OTHER_LIST:
      let newList = [...state.list, ...action.list];
      return Object.assign({}, state, {
        list: newList,
        offset: state.offset + action.list.length,
        hasMore: action.hasMore,
        loading: false,
        isEmpty: newList.length === 0,
        isInit: true
      });
    case CONSTANTS.OTHER_LIST_LOADING:
      return Object.assign({}, state, {
        loading: action.loading
      });
    case CONSTANTS.OTHER_LIST_CLEAR:
      return cloneDeep(defaultListInfo);
  }

  return state;
};

export default {
  myListInfo, // 我的状态个人列表
  todayListInfo, // 今日列表
  rankListInfo, // 排行榜列表
  otherListInfo // 他人状态列表
}
