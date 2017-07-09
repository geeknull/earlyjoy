import React, { Component } from 'react';
import { connect } from 'react-redux';

@connect(state => ({
  routing: state.routing
}))
export default class extends Component {
  constructor () {
    super();
  }

  getTitle () {
    let { location: { pathname } } = this.props.routing;
    return `同步路由信息 ${pathname}`;
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
import './index.less';
