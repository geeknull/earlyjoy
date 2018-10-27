import {ajax} from "../util";

export default {
  namespace: 'myinfo',
  state: {
    userName: null,
    avatar: null,
    continued: null,
    getupTime: null,
    rank: null,
    uid: null,
  },
  reducers: {
    userName (state, {payload}) {
      // console.log(arguments);
      // debugger
      return {
        ...state,
        ...payload
      }
    }
  },
  effects: {
    *getUserName({payload}, {call, put}) {
      let getUserNameAPI = () => {
        // console.log(arguments);
        return ajax({
          url: `//localhost:8333/api/myinfo`,
          method: 'get'
        }).then(res => {
          return res;
        }).catch(err => {debugger});
      };

      let res = yield call(getUserNameAPI, 123, 111, 111)
      // debugger
      // console.log(payload, res);
      // yield put({type: 'count/add', payload: 'add'});
      yield put({type: 'userName', payload: res})
    },
  }
}
