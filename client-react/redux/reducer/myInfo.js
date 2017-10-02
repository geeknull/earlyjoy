/**
 * Created by Weil on 2017/7/9.
 */
import * as CONSTANTS from '../actionTypes.js';

// 个人信息
let defaultMyInfo = {
  userName: null,
  avatar: null,
  getupTime: null,
  rank: null,
  continued: null,
  uid: null,
  loading: false
};
let myInfo = (state = defaultMyInfo, action) => {
  switch (action.type) {
    case CONSTANTS.MY_INFO:
      // 获取个人信息
      return Object.assign({}, state, {
        userName: action.userName,
        avatar: action.avatar,
        getupTime: action.getupTime,
        rank: action.rank,
        continued: action.continued,
        uid: action.uid,
        loading: action.loading
      });
    case CONSTANTS.MY_INFO_LOADING:
      // 设置loading状态
      return Object.assign({}, state, {
        loading: action.loading
      });
    case CONSTANTS.GET_UP_TIME:
      // 设置起床时间
      return Object.assign({}, state, {
        getupTime: action.value
      });
    case CONSTANTS.RECOVER_MYINFO:
      // 通过时间旅行设置个人信息
      return Object.assign({}, state, {
        ...action.myInfo
      })
  }

  return state;
};

export default myInfo;
