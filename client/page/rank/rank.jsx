import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import actions from '../../redux/actions/index.js';
import ScrollList from '@/component/scrollList/scrollList.jsx';

@connect((state) => ({
  rankListInfo: state.rankListInfo
}), { ...actions })
export default class extends Component {
  constructor () {
    super();
    this.state = {

    };
  }

  componentWillMount () {

  }

  componentDidMount () {
    let isRankListInit = this.props.rankListInfo.isInit;
    !isRankListInit && this.props.getRankList();
  }

  render () {
    let {
      list, offset, limit,
      hasMore, loading, isEmpty, isInit
    } = this.props.rankListInfo;

    return (
      <div className="page-wrap rank-page" ref="rankPage">
        <ScrollList
          hasMore={hasMore}
          loading={loading}
          onLoad={this.props.getRankList}
          element={this.refs.rankPage}
          isEmpty={isEmpty}
        >
          <ul className="rank-list">
            {
              list.map((item, index) => {
                let { avatar, continued, getupTime ,rank, uid ,userName } = item;

                return (
                  <Link to={`/user/${uid}`} key={index}>
                    <li className="rank-item">
                      <div className="rank-level">{rank}</div>
                      <img src={avatar} className="rank-avatar"/>
                      <div className="rank-user-name">{userName}</div>
                      <div className="rank-continued">{continued}天</div>
                    </li>
                  </Link>
                )
              })
            }
          </ul>
        </ScrollList>
      </div>
    )
  }
}
import './rank.less';
