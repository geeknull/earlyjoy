import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import main from './modules/main.js';
import today from './modules/today.js';
import rank from './modules/rank.js';


let store = new Vuex.Store({
  modules: {
    main, today, rank
  }
});
if (window) {
  window._store = store; // 这样做不好 但是嘿嘿嘿😝
}
export default store;
