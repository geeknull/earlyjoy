/**
 * Created by Weil on 2017/7/9.
 */
import * as CONSTANTS from '../actionTypes.js';
import { ajax } from '../../util/index.js';
import Config from '@/config';
let requestPrefix = Config.requestPrefix;

// 获取我的状态列表
export let getMyList = () => (dispatch, getState)=> {
  let {limit, offset, hasMore} = getState().myListInfo;
  if ( !hasMore ) { return void 0; }

  // 请求开始阶段
  dispatch({ type: CONSTANTS.MY_LIST_LOADING,  loading: true });

  // 请求中
  ajax({
    url: `${requestPrefix}/api/mylist`,
    method: 'post',
    data: { offset, limit }
  }).then(res => {
    // 请求结束
    dispatch({
      type: CONSTANTS.MY_LIST,
      list: res.list,
      hasMore: res.hasMore,
      loading: false
    })
  }).catch(err => {
    // 请求结束
    dispatch({ type: CONSTANTS.MY_LIST_LOADING, loading: false });
    console.log(err);
  })
};

// 获取今日列表
export let getToadyList = () => (dispatch, getState) => {
  let {limit, offset, hasMore} = getState().todayListInfo;
  if ( !hasMore ) { return void 0; }

  dispatch({type: CONSTANTS.TODAY_LIST_LOADING, loading: true});
  ajax({
    url: `${requestPrefix}/api/todaylist`,
    method: 'post',
    data: { offset, limit }
  }).then(res => {
    dispatch({
      type: CONSTANTS.TODAY_LIST,
      list: res.list,
      hasMore: res.hasMore,
      loading: false
    });
  }).catch((err) => {
    dispatch({type: CONSTANTS.TODAY_LIST_LOADING, loading: false});
    console.log(err);
  });
};

// 获取好友排行列表
export let getRankList = () => (dispatch, getState) => {
  let {limit, offset, hasMore} = getState().rankListInfo;
  if ( !hasMore ) { return void 0; }

  dispatch({type: CONSTANTS.RANK_LIST_LOADING, loading: true});
  ajax({
    url: `${requestPrefix}/api/rankList`,
    method: 'post',
    data: { offset, limit }
  }).then(res => {
    dispatch({
      type: CONSTANTS.RANK_LIST,
      list: res.list,
      hasMore: res.hasMore,
      loading: false
    })
  }).catch((err) => {
    dispatch({type: CONSTANTS.RANK_LIST_LOADING, loading: false});
    console.log(err);
  })
};

// 获取他人的状态列表
export let getOtherList = (uid) => (dispatch, getState) => {
  let {offset, limit, hasMore} = getState().otherListInfo;
  debugger
  if ( !hasMore ) { return void 0; }

  // 请求之前设置loading状态
  dispatch({type: CONSTANTS.OTHER_LIST_LOADING, loading: true});

  // 发起请求
  ajax({
    url: `${requestPrefix}/api/otherlist/${uid}`,
    method: 'POST',
    data: { offset, limit }
  }).then((res) => {
    // 请求结束
    dispatch({
      type: CONSTANTS.OTHER_LIST,
      list: res.list,
      hasMore: res.hasMore,
      loading: false
    })
  }).catch((err) => {
    // 请求结束
    dispatch({type: CONSTANTS.OTHER_LIST_LOADING, loading: false});
  });
};

export default {
  getMyList,
  getToadyList,
  getRankList,
  getOtherList
}
