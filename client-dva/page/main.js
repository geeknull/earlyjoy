import 'babel-polyfill';
import 'weui';
import React from 'react';
import dva, {connect} from 'dva';
import {Router, Route, routerRedux, Switch} from 'dva/router';
const { ConnectedRouter } = routerRedux;
import createHashHistory from 'history/createHashHistory';
import Wrap from '../container/wrap/wrap';
import Home from '../container/home/home';
import Today from '../container/today/today'

import count from '../model/count';
import myinfo from '../model/myInfo';

const app = dva({
  history: createHashHistory(),
});

app.model(count);
app.model(myinfo);

app.router(({history}) => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Wrap>
          <Route path='/' exact component={Home}/>
          <Route path='/index' component={Home}/>
          <Route path='/home' component={Home}/>
          <Route path='/today' component={Today}/>
        </Wrap>
      </Switch>
    </ConnectedRouter>
  )
});

app.start('.doc');


