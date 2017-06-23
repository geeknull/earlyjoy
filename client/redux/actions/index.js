import * as CONSTANTS from '../actionTypes.js';
import { ajax } from '../../util/index.js';
let requestPrefix = 'http://localhost:8333';
let requestPrefix2 = 'http://localhost:8333';

// 获取我的信息
export let getMyInfo = () => (dispatch, getState) => {
  let { userName } = getState().myInfo;
  if (userName) { return void 0; }

  ajax({
    url: `${requestPrefix2}/api/myinfo`,
    method: 'get'
  }).then(res => {
    dispatch({
      type: CONSTANTS.MY_INFO,
      ...res
    });
  }).catch(err => {
    console.log(err);
  })
};

export let setMyInfo = (myInfo) => {
  return {
    type: CONSTANTS.SET_MY_INFO,
    myInfo: myInfo
  }
};

export let setGetUp = (value) => {
  return {
    type: CONSTANTS.GET_UP_TIME,
    value: value
  }
};

// 获取我的列表
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

// 获取今日详情
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

// 获取好友排名
export let getRankList = () => dispatch => {
  ajax({
    url: `${requestPrefix}/api/rankList`,
    method: 'get'
  }).then(res => {
    dispatch({
      type: CONSTANTS.RANK_LIST,
      list: res
    })
  }).catch((err) => {
    console.log(err);
  })
};

// 获取详情信息
export let getDetail = (id) => dispatch => {
  ajax({
    url: `${requestPrefix}/api/detail/${id}`,
    method: 'get'
  }).then((res) => {
    dispatch({
      type: CONSTANTS.DETAIL_INFO,
      info: res
    })
  }).catch((err) => {
    console.log(err);
  })
};

// 获取他人首页
export let getOtherUser = (id) => dispatch => {
  ajax({
    url: `${requestPrefix}/api/otherUser/${id}`,
    method: 'get'
  }).then((res) => {
    dispatch({
      type: CONSTANTS.OTHER_USER,
      info: res
    })
  }).catch((err) => {
    console.log(err);
  })
};

export default {
  getMyInfo,
  setMyInfo,
  setGetUp,
  getMyList,
  getToadyList,
  getRankList,
  getDetail,
  getOtherUser
}
