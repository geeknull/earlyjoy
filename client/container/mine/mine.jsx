import React, { Component } from 'react';
import {ajax} from "../../util/index";

export default class extends Component {
  constructor (props) {
    super();
    this.state = {
      // status:''
    };
  }

  componentDidMount(){
    ajax({
      method:'POST',
      url:'http://localhost:8333/api/login',
      // data:{
      //   username:'',
      //   password:''
      // }
    }).then(res=>{
      // console.log(res);
      // let {status} = res;
      // debugger
    }).catch(err=>{
      debugger
    })
  }

  render () {

    return (
      <div className="page-wrap mine-page">
        <h3>个人中心</h3>
          <img src='' />
        <input type="text" placeholder='昵称'  />
        <input type="text" placeholder='起床目标时间' />
        <div className='mine-btn-wrap'>確認修改</div>
      </div>
    )
  }
}
import './mine.less';
