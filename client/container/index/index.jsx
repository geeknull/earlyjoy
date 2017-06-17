import './index.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions/index.js';

@connect((state) => {
  return {
    cntData: state.cnt
  }
},{...actions})
export default class extends Component {
  constructor () {
    super();
    this.state = {

    };
  }

  clickHandler () {
    this.props.setCnt();
  }


  render () {
    let { cnt } = this.props.cntData;

    return (
        <div className="page-wrap main-page" ref="mainPage">
          首页
          <br/>
          <span>使用 react global state(redux store) 切换路由后数据还在</span>
          <br/>
          <button onClick={this.clickHandler.bind(this)}>点击数量加一</button>
          <br/>
          <span>数量：</span><span>{cnt}</span>
        </div>
    )
  }
}
