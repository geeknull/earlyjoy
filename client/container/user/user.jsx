import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions/index.js';
import FeedCard from '../../component/feedCard/feedCard.jsx';

@connect(state => ({
  otherInfo: state.otherInfo
}), { ...actions })
export default class extends Component {
  constructor () {
    super();
  }

  componentWillMount () {
    let userId = this.props.match.params.id;

    this.props.getOtherUser(userId)
  }

  render () {
    let { userName, avatar, list } = this.props.otherInfo;

    return (
      <div className="page-wrap user-page">
        <div className="avatar-wrap">
          <img src={avatar}/>
        </div>
        <div className="user-name">{userName}</div>
        <div className="user-list">
          {
            list.map((item, index) => {
              return (
                <FeedCard
                  key={index}
                  route="/new"
                  item={item}
                />
              );
            })
          }
        </div>
      </div>
    )
  }
}
import './user.less';
