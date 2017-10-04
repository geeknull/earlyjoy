import 'weui';
import Vue from 'vue';
import VueRouter from 'vue-router';

import Wrap from '../../container/wrap.vue';
import Frame from '../../container/frame/frame.vue';
import Index from '../../container/index/index.vue';
import Today from '../../container/today/today.vue';
import Rank from '../../container/rank/rank.vue';
import Mine from '../../container/mine/mine.vue';

Vue.use(VueRouter);
let router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Frame,
      redirect: '/index',
      children: [
        {
          path: 'index',
          component: Index
        },
        {
          path: 'today',
          component: Today
        },
        {
          path: 'rank',
          component: Rank
        },
        {
          path: 'mine',
          component: Mine
        },
      ]
    }
  ]
});

new Vue({
  el: '.doc',
  router,
  render: h => h(Wrap)
});
