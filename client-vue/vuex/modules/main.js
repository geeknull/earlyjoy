import * as CONSTANTS from '../mutation-types.js';
import {ajax} from '@/util/util.js';
let requestPrefix = 'http://localhost:8333';

let mainModule = {
  state: {
    myInfo: {
      userName: null,
      avatar: null,
      getupTime: null,
      rank: null,
      continued: null,
      uid: null,
      loading: true
    }
  },
  getters: {

  },
  actions: {
    getMyInfo ({commit, state}) {
      ajax({
        url: `${requestPrefix}/api/myinfo`,
        method: 'get'
      }).then(res => {
        commit({
          type: CONSTANTS.GET_MYINFO,
          myInfo: res
        });
      }).catch(err => {
        console.log(err);
      })
    }
  },
  mutations: {
    [CONSTANTS.GET_MYINFO] (state, payload) {
      state.myInfo = {
        ...payload.myInfo, loading: false
      };
    }
  },
};

export default mainModule;
