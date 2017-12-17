import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions/index.js';
import {ajax} from '../../../client/util/index'
import {Link} from 'react-router-dom'

@connect((state) => {
  return {
    cntData: state.cnt
  }
},{...actions})
export default class extends Component {
  constructor () {
    super();
    this.state = {
      userName:"",
      avatar:"",
      list:[],
      hasMore:true
    };
  }

  componentDidMount(){
    ajax({
      url:'http://localhost:8333/api/myinfo',
      method:'get'
    }).then(res=>{
      let {userName,avatar} = res;
      this.setState({userName,avatar})
      // debugger
    }).catch(err=>{
      debugger
    });
    ajax({
      url:'http://localhost:8333/api/mylist',
      method:'post',
      data:{offset:1,limit:10}
    }).then(res=>{
      let {list,hasMore} = res;
      console.log(res);
      this.setState({list,hasMore});
      console.log(list);
      // debugger
    }).catch(err=>{
      debugger
    })
  }


  render () {
    let { cnt } = this.props.cntData;
    let {userName,avatar}=this.state;
    return (
      <div className="page-wrap main-page" ref="mainPage">
        <div className="user-info-wrap">
          <img className="user-avatar" src={avatar}/>
          <p className="user-name">{userName}</p>
        </div>
        <div>
          <Link  className="add"  to="/NewPage">
            <div>+</div>
            <span>添加今日状态</span>
          </Link>
        </div>
        <ul className="list">
          {
            this.state.list.map((item,index)=>(
              <li key={index}>
                <img src={item.img} alt=""/>
                <p>{item.text}</p>
                <span>{item.time}</span>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}
import './index.less';
