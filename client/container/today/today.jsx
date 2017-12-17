import React, {Component} from 'react';
import {ajax} from '../../util/index';
import {Link} from 'react-router-dom';

export default class extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      hasMore: false
    };
  }

  componentDidMount() {
    ajax({
      url: 'http://localhost:8333/api/todaylist',
      method: 'post',
      data: {
        offset: 0,
        limit: 10
      }
    }).then(res => {
      let {list, hasMore} = res;
      this.setState({list, hasMore});
    }).catch(err => {
      console.log(err);
    })
  }

  /*img: "http://localhost:8333/static/img/avatar/benqijiemu.jpg"
  isLike: true
  like: 12
  status: "ontime"
  text: "又是新的一天0"
  time: "2017.05.22"
  uid: 333
  userName: "漂流瓶"*/

  render() {
    console.log(this.state);
    let {list, hasMore} = this.state;
    return (
      <div className="page-wrap today-page" ref="todayPage">
        <div className="today-list">
          {
            list.map((item, index) => (
              <Link key={index} to='/'>
                <div className='list-item'>
                  <img src={item.img} alt=""/>
                  <div className='list-item-content'>
                    <div className='list-item-top'>
                      <p>{item.userName}</p>
                      <p
                        className={item.status === 'ontime' ? 'ontime' : 'outtime'}>{item.status === 'ontime' ? '没有迟到' : '起床迟到'}</p>
                      <p className='time'>{item.time}</p>
                    </div>
                    <div className='list-item-bottom'>
                      <span>{item.text}</span>
                      <span>like</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          }
        </div>
      </div>
    )
  }
}
import './today.less';
