import './mine.less';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions/index.js';

@connect(state => ({
  myInfo: state.myInfo
}), { ...actions })
export default class extends Component {
  constructor (props) {
    super();
    this.state = {

    };
    this.myInfoBak = null;
  }

  componentWillMount () {
    let { userName } = this.props.myInfo;
    if ( userName ) {
      this.myInfoBak = this.props.myInfo;
    }
    this.props.getMyInfo();
  }

  componentWillUpdate (nextProps, nextState) {
    let { userName } = nextProps.myInfo;
    if ( userName && !this.myInfoBak ) {
      this.myInfoBak = nextProps.myInfo;
    }
  }

  componentWillUnmount () {
    let { userName, avatar, getupTime } = this.props.myInfo;

    if ( userName ) {
      console.log('componentWillUnmount', this.myInfoBak);
      this.props.recoverMyInfo(this.myInfoBak);
    }
  }

  render () {
    let { userName, avatar, getupTime } = this.props.myInfo;
    console.log('xx');

    return (
      <div className="page-wrap mine-page">
        <div className="avatar-wrap">
          <img src={avatar}/>
        </div>
        <div className="user-name">
          {userName}
        </div>
        <div className="weui-cells">
          <div className="weui-cell">
            <div className="weui-cell__hd">
              <label className="weui-label">起床时间</label>
            </div>
            <div className="weui-cell__bd">
              <input type="text" className="weui-input"
                     value={getupTime || ''}
                     placeholder="请输入起床时间"
                     onChange={(e) => { this.props.setGetUp(e.target.value) }}
              />
            </div>
          </div>
          <div className="weui-cell weui-cell_select weui-cell_select-after">
            <div className="weui-cell__hd">
              <label className="weui-label">性别</label>
            </div>
            <div className="weui-cell__bd">
              <select name="sex" className="weui-select">
                <option value="none">暂未选择</option>
                <option value="male">男</option>
                <option value="female">女</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mine-btn-wrap">
          <button className="weui-btn weui-btn_primary">确定修改</button>
        </div>
      </div>
    )
  }
}
