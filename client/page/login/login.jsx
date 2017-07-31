import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { ajax } from '../../util/index.js';

let Login =  class extends Component {
  constructor () {
    super();
    this.state = {
      username: null,
      password: null
    }
  }

  userNameHandler (e) {
    let username = e.target.value;
    this.setState({ username });
  }

  passwordHandler (e) {
    let password = e.target.value;
    this.setState({ password });
  }

  loginHandler () {
    let { username, password } = this.state;

    if ( username && password ) {
      ajax({
        url: 'http://localhost:8333/api/login',
        method: 'post',
        data: { username, password }
      }).then((val) => {
        alert(JSON.stringify(val));
        location.href = 'http://localhost:8333';
      }).catch((err) => {
        console.log(err);
      });
    } else {
      alert('请输入账号密码');
    }
  }

  render () {
    return (
      <div className="login-page">
        <div className="login-title">
          <h3>登陆早起打卡</h3>
        </div>
        <div className="weui-cells__title">账号</div>
        <div className="weui-cells">
          <div className="weui-cell">
            <div className="weui-cell__bd">
              <input type="text" className="weui-input"
                     placeholder="请输入账号"
                     onChange={this.userNameHandler.bind(this)}
              />
            </div>
          </div>
        </div>

        <div className="weui-cells__title">密码</div>
        <div className="weui-cells">
          <div className="weui-cell">
            <div className="weui-cell__bd">
              <input type="password" className="weui-input"
                     placeholder="请输入账号"
                     onChange={this.passwordHandler.bind(this)}
              />
            </div>
          </div>
        </div>

        <div className="weui-btn-area">
          <a className="weui-btn weui-btn_primary"
             onClick={this.loginHandler.bind(this)}
          >
            确定
          </a>
        </div>
      </div>
    )
  }
};

ReactDOM.render(<Login/>, document.querySelector('.doc'));
import 'weui';
import './login.less';

