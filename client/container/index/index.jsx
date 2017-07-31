import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions/index.js';
import { Link } from 'react-router-dom';
import ScrollList from '../../component/scrollList/scrollList.jsx';
import FeedCard from '../../component/feedCard/feedCard.jsx';
import UserInfo from '@/component/userInfo/userInfo.jsx';

@connect((state) => {
  return {
    myInfo: state.myInfo,
    myListInfo: state.myListInfo
  }
},{...actions})
export default class extends Component {
  constructor () {
    super();
    this.state = {

    };
  }

  componentWillMount () {
  }

  componentDidMount () {
    let { userName, loading: isLoadingMyInfo } = this.props.myInfo;
    let isMyListInit = this.props.myListInfo.isInit;

    !userName && this.props.getMyInfo();
    !isMyListInit && this.props.getMyList();
  }

  render () {
    let { list, hasMore, loading, isEmpty } = this.props.myListInfo;

    return (
        <div className="page-wrap main-page" ref="mainPage">
          <UserInfo {...this.props.myInfo} />
          <Link to='/new'>
            <div className="new-wrap weui-cells">
                <span className="add-icon">+</span>
                <span className="add-text">添加今日状态</span>
            </div>
          </Link>
          <div className="weui-cells__title">最近状态</div>
          <ScrollList
            element={this.refs.mainPage}
            onLoad={this.props.getMyList}
            hasMore={hasMore}
            loading={loading}
            isEmpty={isEmpty}
          >
            <div className="recently-wrap">
              {
                list.map((item, index) => {
                  return (
                    <FeedCard route="/detail/222" item={item} key={index}/>
                  )
                })
              }
            </div>
          </ScrollList>
        </div>
    )
  }
}
import './index.less';
