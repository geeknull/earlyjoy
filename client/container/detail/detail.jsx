import './detail.less';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions/index.js';
import { Link } from 'react-router-dom';

@connect((state) => ({
  detail: state.detail
}), { ...actions })
export default class extends Component {
  constructor () {
    super();
  }

  componentWillMount () {
    let detailId = this.props.match.params.id;
    this.props.getDetail(detailId);
  }

  render () {
    let { detail: {
      img, userName, userId, rank, continued, time, like, liked
    }} = this.props;

    console.log(this.props.detail.time);

    return (
      <div className="page-wrap detail-page">
        <div className="avatar-wrap">
          <img src={img}/>
        </div>
        <div className="weui-form-preview detail-info">
          <div className="weui-form-preview__hd">
            <div className="weui-form-preview__item">
              <div className="weui-form-preview__label">昵称</div>
              <div className="weui-form-preview__value detail-time">{userName}</div>
            </div>
          </div>
          <div className="weui-form-preview__bd">
            <div className="weui-form-preview__item">
              <div className="weui-form-preview__label">
                起床时间
              </div>
              <div className="weui-form-preview__value">
                {time}
              </div>
            </div>
            <div className="weui-form-preview__item">
              <div className="weui-form-preview__label">
                好友排名
              </div>
              <div className="weui-form-preview__value">
                第{rank}名
              </div>
            </div>
            <div className="weui-form-preview__item">
              <div className="weui-form-preview__label">
                连续起床天数
              </div>
              <div className="weui-form-preview__value">
                {continued}天
              </div>
            </div>
            <div className="weui-form-preview__item">
              <div className="weui-form-preview__label">
                赞
              </div>
              <div className="weui-form-preview__value">
                {like}个
              </div>
            </div>
          </div>
          <div className="weui-form-preview__ft">
            <div className="like-wrap">
              {
                liked ?
                  <span className="like-inner">
                    <i className="iconfont icon-zan"></i>
                    <span>取消赞</span>
                  </span>
                  :
                  <span className="like-inner">
                    <i className="iconfont icon-zan1"></i>
                    <span>点赞</span>
                  </span>
              }
            </div>
          </div>
        </div>

        <div className="detail-btn-wrap">
          <Link to='/new'>
            <button className="weui-btn weui-btn_primary">他的主页</button>
          </Link>
        </div>
      </div>
    )
  }
}
