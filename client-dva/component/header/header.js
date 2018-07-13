import './header.less';
import React, { Component } from 'react';
import { connect } from 'dva';

@connect((state) => {
  return {
    routing: state.routing
  }
})
export default class extends Component {
  constructor () {
    super();
    debugger
  }

  getTitle () {
    // let { location: { pathname } } = this.props.routing;
    console.log(this.props.routing, 'header.js router change');
    let pathname = '';
    switch (pathname) {
      case '/index':
        return '首页';
        break;
      default:
        return '我是早鸟';
    }
  }

  render () {
    return (
      <div className="header">
        <div className="inner">
          {this.getTitle()}
        </div>
      </div>
    )
  }
}
