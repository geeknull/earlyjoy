import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class extends Component {
  constructor () {
    super();
  }

  render () {
    return (
      <ul className="footer">
        <li className="footer-item">
          <Link to="/index">
            <span className="iconfont icon-zhuye" title="主页"/>
            <span className="footer-item-text">主页</span>
          </Link>
        </li>
        <li className="footer-item">
          <Link to="/today">
            <span className="iconfont icon-liebiao" title="今日列表"/>
            <span className="footer-item-text">今日列表</span>
          </Link>
        </li>
        <li className="footer-item">
          <Link to="/rank">
            <span className="iconfont icon-paixingbang" title="排行榜"/>
            <span className="footer-item-text">排行榜</span>
          </Link>
        </li>
        <li className="footer-item">
          <Link to="/mine">
            <span className="iconfont icon-gerenzhongxin" title="个人中心"/>
            <span className="footer-item-text">个人中心</span>
          </Link>
        </li>
      </ul>
    )
  }
}
import './index.less';
