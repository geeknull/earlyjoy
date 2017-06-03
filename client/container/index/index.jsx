import './index.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions/index.js';
import { Link } from 'react-router-dom';
import ScrollList from '../../component/scrollList/scrollList.jsx';
import FeedCard from '../../component/feedCard/feedCard.jsx';

@connect((state) => {
  return {
    myInfo: state.myInfo,
    myListInfo: state.myListInfo,
    mainPage: state.mainPage
  }
},{...actions})
export default class extends Component {
  constructor () {
    super();
    this.state = {

    };
  }

  componentWillMount () {
    this.props.getMyInfo();
    this.props.getMyList();
  }

  componentDidMount () {
    // console.log(this.refs);
    // debugger
  }

  render () {
    let {
      myInfo: { userName, avatar, getupTime, rank, continued }
    } = this.props;

    let { list, hasMore, loading, isEmpty } = this.props.myListInfo;

    return (
        <div className="page-wrap main-page" ref="mainPage">
          <div className="my-avatar">
            <img src={avatar}/>
          </div>
          <div className="my-name">{userName}</div>
          <div className="get-up-wrap">
            <span>{getupTime}</span>
          </div>
          <Link to='/new'>
            <div className="new-wrap weui-cells">
                <span className="add-icon">+</span>
                <span className="add-text">添加今日状态</span>
            </div>
          </Link>
          <div className="weui-cells__title">最近七天</div>
          <ScrollList
            element={this.refs.mainPage}
            onLoad={this.props.getMyList}
            hasMore={hasMore}
            loading={loading}
            isEmpty={isEmpty}
          >
            <ul className="recently-wrap">
              {
                list.map((item, index) => {
                  return (
                    <FeedCard route="/detail/222" item={item} key={index}/>
                  )
                })
              }
            </ul>
          </ScrollList>
        </div>
    )
  }
}
