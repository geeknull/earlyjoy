import React, { Component } from 'react';

export default class extends Component {
  constructor () {
    super();
    this.state = {
      cnt: 0
    };
  }

  componentWillMount () {

  }

  clickHandler () {
    this.setState({
      cnt: this.state.cnt+1
    })
  }

  render () {
    let { cnt } = this.state;

    return (
      <div className="page-wrap today-page" ref="todayPage">
        今日列表
        <br/>
        <span>使用 react local state 切换路由后数据就不见了</span>
        <button onClick={this.clickHandler.bind(this)}>点击数量加一</button>
        <br/>
        <span>数量：</span><span>{cnt}</span>
      </div>
    )
  }
}
import './today.less';
