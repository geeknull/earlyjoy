import * as CONSTANTS from '../actionTypes.js';
import { ajax } from '../../util/index.js';
let requestPrefix = 'http://localhost:8333';

// 设置 Cnt 的 action
export let setCnt = (cnt) => {
  return {
    type: CONSTANTS.ADD_CNT
  }
};

let getTodayList=()=>{
  return function () {

  }
};

export default {
  setCnt
}
