/**
 * Created by Weil on 2017/5/10.
 */
import 'weui';
import React from 'react';
import ReactDOM from 'react-dom';

// 路由信息【react-router-dom】
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

// 创建hash路由信息【react-router-redux】
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import createHistory from 'history/createHashHistory';
const history = createHistory();

// 创建redux store【react-redux】
import { Provider } from 'react-redux';
import store from '../../redux/index.js';
window._store = store; // 方便调试 并不是好的写法

// 引入组件
import Wrap from '../../container/wrap/wrap.jsx';
import Index from '../../container/index/index.jsx';
import Today from '../../container/today/today.jsx';
import Rank from '../../container/rank/rank.jsx';
import Mine from '../../container/mine/mine.jsx';

ReactDOM.render(
  <Provider store={store}>
    {/* 等同于 HashRouter */}
    <ConnectedRouter history={history}>
      <Wrap>
        <Route path='/' exact component={Index}/>
        <Route path='/index' component={Index}/>
        <Route path='/today' component={Today}/>
        <Route path='/rank' component={Rank}/>
        <Route path='/mine' component={Mine}/>
      </Wrap>
    </ConnectedRouter>
  </Provider>
  ,document.querySelector('.doc')
);
