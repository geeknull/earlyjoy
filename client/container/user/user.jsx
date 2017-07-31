import './user.less';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions/index.js';
import FeedCard from '../../component/feedCard/feedCard.jsx';
import UserInfo from '@/component/userInfo/userInfo.jsx';
import ScrollList from '@/component/scrollList/scrollList.jsx';

let obj = {
  x: 'x',
  y: 'x',
};

@connect(state => ({
  otherInfo: state.otherInfo,
  otherListInfo: state.otherListInfo
}), { ...actions })
export default class extends Component {
  constructor () {
    super();
  }

  componentWillMount () {
    let uid = this.props.match.params.id;
    this.props.getOtherUser(uid);
    this.props.getOtherList(uid);
  }

  render () {
    let { list, hasMore, isEmpty, loading } = this.props.otherListInfo;
    return (
      <div className="page-wrap user-page" ref="userPage">
        <UserInfo {...this.props.otherInfo} />
        <ScrollList
          element={this.refs.userPage}
          onLoad={this.props.getOtherList.bind(this, this.props.match.params.id)}
          hasMore={hasMore}
          isEmpty={isEmpty}
          loading={loading}
        >
          <div className="user-list">
            {
              list.map((item, index) => {
                return (
                  <FeedCard key={index} item={item} route={'/detail/222'}/>
                )
              })
            }
          </div>
        </ScrollList>
      </div>
    )
  }
}
