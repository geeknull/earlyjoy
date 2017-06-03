/**
 * Created by Weil on 2017/5/10.
 */
import 'weui';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import createStore from './redux/index.js';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import createHistory from 'history/createHashHistory';
const history = createHistory();

import Index from './container/index/index.jsx';
import Today from './container/today/today.jsx';
import Rank from './container/rank/rank.jsx';
import Mine from './container/mine/mine.jsx';
import Wrap from './container/wrap/wrap.jsx';
import New from './container/new/new.jsx';
import Detail from './container/detail/detail.jsx';
import User from './container/user/user.jsx';

let store = createStore(routerReducer);
window._store = store;

ReactDOM.render(
  <Provider store={store}>
    {/*HashRouter*/}
    <ConnectedRouter history={history}>
      <Wrap>
        <Route path='/' exact component={Index}/>
        <Route path='/index' component={Index}/>
        <Route path='/today' component={Today}/>
        <Route path='/rank' component={Rank}/>
        <Route path='/mine' component={Mine}/>
        <Route path='/new' component={New}/>
        <Route path='/detail/:id' component={Detail}/>
        <Route path='/user/:id' component={User}/>
      </Wrap>
    </ConnectedRouter>
  </Provider>
  ,document.querySelector('.doc')
);
