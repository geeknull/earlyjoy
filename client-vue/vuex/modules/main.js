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
    },
    myList: {
      list: [],
      status: 'loading', // init loading empty loaded
      hasMore: true,
      offset: 0,
      limit: 10,
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
    },
    getMyList ({commit, state}, action) {
      let {offset, limit} = state.myList;
      if (action === 'init') {
        offset = 0;
        limit = 10;
      }

      commit({type: CONSTANTS.MYLIST_STATUS, status: 'loading'});
      ajax({
        url: `${requestPrefix}/api/mylist`,
        method: 'post',
        data: { offset, limit },
      }).then((res) => {
        commit({
          type: CONSTANTS.GET_MYLIST,
          myList: res,
          action: action
        })
      }).catch((err) => {
        commit({type: CONSTANTS.MYLIST_STATUS, status: 'empty'});
        console.error(err);
      });
    }
  },
  mutations: {
    [CONSTANTS.GET_MYINFO] (state, payload) {
      state.myInfo = {
        ...payload.myInfo, loading: false
      };
    },
    [CONSTANTS.GET_MYLIST] (state, payload) {
      let {list, hasMore} = payload.myList;
      let newList = [...state.myList.list, ...list];

      state.myList.list = newList;
      state.myList.offset = newList.length;
      state.myList.hasMore = hasMore;

      if (list.length === 0 && hasMore === false) {
        debugger
        state.myList.status = 'empty';
      } else {
        state.myList.status = 'loaded';
      }
    },
    [CONSTANTS.MYLIST_STATUS] (state, payload) {
      state.myList.status = payload.status;
    }
  },
};

export default mainModule;
