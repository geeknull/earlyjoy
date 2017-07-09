/**
 * Created by Weil on 2017/7/9.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class extends Component {
  constructor () {
    super();
  }

  static propTypes = {
    userName: PropTypes.string,
    avatar: PropTypes.string,
    getupTime: PropTypes.string,
    rank: PropTypes.number,
    continued: PropTypes.number,
    uid: PropTypes.number,

  };

  static defaultProps = {
    userName: null,
    avatar: null,
    getupTime: null,
    rank: null,
    continued: null,
    uid: null,
  };

  render () {
    let { userName, avatar, getupTime, rank, continued, uid } = this.props;

    return (
      <div className="_user-info-wrap">
        <img className="avatar" src={avatar}/>
        <div className="user-name">{userName}</div>
        <div className="rank-wrap">
          <span>{`在好友中排名第${rank}名`}，</span>
          <span>{`坚持了${continued}天`}。</span>
        </div>
      </div>
    )
  }
}
import './userInfo.less';

