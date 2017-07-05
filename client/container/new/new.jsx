import './new.less';
import React, { Component } from 'react';
import { formatDate } from '../../lib/date.js';

export default class extends Component {
  constructor () {
    super();
    this.state = {

    };
  }

  getNowTime () {
    let date = new Date();
    return `${date.getHours()}:${date.getMinutes()}`;
  }

  render () {
    return (
      <div className="new-page">
        <div className="new-page-inner">

          <div className="weui-cells__title">图片状态</div>
          <div className="weui-cells">
            <div className="weui-cell file-up-wrap">
              <div className="weui-cell__bd">
                <div className="weui-uploader__input-box">
                  <input type="file" className="weui-uploader__input"/>
                </div>
                <div className="file-up-tip">
                  <span>上传文件不大于10MB，最好为正方形</span>
                </div>
              </div>
            </div>
          </div>

          <div className="weui-cells__title">时间</div>
          <div className="weui-cells">
            <div className="weui-cell">
              <div className="weui-cell__hd">
                <div className="weui-label">当前时间</div>
              </div>
              <div className="weui-cell__bd">
                <input className="weui-input" type="text" onChange={()=>{}} disabled={true} value={formatDate(Date.now())}/>
              </div>
            </div>
            <div className="weui-cell">
              <div className="weui-cell__hd">
                <div className="weui-label">起床时间</div>
              </div>
              <div className="weui-cell__bd">
                <input className="weui-input" type="text" onChange={()=>{}} disabled={true} value={'8:30'}/>
              </div>
            </div>
            <div className="weui-cell">
              <div className="weui-cell__hd">
                <div className="weui-label">状态</div>
              </div>
              <div className="weui-cell__bd">
                <input className="weui-input" type="text" onChange={()=>{}} disabled={true} value={'准时起床'}/>
              </div>
            </div>
          </div>

          <div className="weui-cells__title">说点什么</div>
          <div className="weui-cells">
            <div className="weui-cell">
              <div className="weui-cell__bd">
                <textarea className="weui-textarea" placeholder="说说你的状态吧"></textarea>
              </div>
            </div>
          </div>

          <div className="ensure-btn-wrap">
            <button className="weui-btn weui-btn_primary">确定打卡</button>
          </div>
        </div>
      </div>
    )
  }
}
