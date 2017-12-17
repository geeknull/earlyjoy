import React, { Component } from 'react';
import {ajax} from '../../util/index';

export default class extends Component {
  constructor () {
    super();
    this.state = {
    list:[],
    hasMore:false
    };
  }

  componentWillMount () {
    ajax({
      method:'POST',
      url:'http://localhost:8333/api/ranklist',
      data:{
        offset:0,
        limit:10
      }
    }).then(res=>{
      console.log(res);
      let {list,hasMore}=res;
      this.setState({list,hasMore})
    }).catch(error=>{
      console.log(error);
    })
  }

  render () {
    let {list,hasMore} = this.state;
    return (
      <div className="page-wrap rank-page" ref="rankPage">
        <ul className="rank-list">
          {
            list.map((item, index) => {
              let { avatar, continued,rank, userName } = item;

              return (
                <li className="rank-item" key={index}>
                  <div className="rank-level">{rank}</div>
                  <img src={avatar} className="rank-avatar"/>
                  <div className="rank-user-name">用户名：{userName}</div>
                  <div className="rank-continued">{continued}天</div>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
import './rank.less';
