import * as CONSTANTS from '../actionTypes.js';
import { ajax } from '../../util/index.js';
import listActions from './listActions.js';
let requestPrefix = 'http://localhost:8333';
let requestPrefix2 = 'http://localhost:8333';

// 获取我的信息
export let getMyInfo = () => (dispatch, getState) => {
  let { userName } = getState().myInfo;
  if (userName) { return void 0; }

  // 请求开始阶段
  dispatch({ type: CONSTANTS.MY_INFO_LOADING, loading: true });

  ajax({
    url: `${requestPrefix2}/api/myinfo`,
    method: 'get'
  }).then(res => {
    dispatch({
      type: CONSTANTS.MY_INFO,
      loading: false,
      ...res
    });
  }).catch(err => {
    dispatch({ type: CONSTANTS.MY_INFO_LOADING, loading: false });
    console.log(err);
  })
};


// 恢复个人信息
export let recoverMyInfo = (myInfo) => {
  return {
    type: CONSTANTS.RECOVER_MYINFO,
    myInfo: myInfo
  }
};

// 设置起床时间
export let setGetUp = (value) => {
  return {
    type: CONSTANTS.GET_UP_TIME,
    value: value
  }
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

// 获取他人信息
export let getOtherUser = (id) => dispatch => {
  ajax({
    url: `${requestPrefix}/api/otheruser/${id}`,
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

// 清空他人信息
export let clearOtherUser = (id) => {
  return {
    type: CONSTANTS.OTHER_USER_CLEAR,
    uid: id
  }
};

export default {
  getMyInfo,
  recoverMyInfo,
  setGetUp,
  getDetail,
  getOtherUser,
  clearOtherUser,
  ...listActions
}
