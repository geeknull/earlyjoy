import './today.less';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions/index.js';
import FeedCard from '../../component/feedCard/feedCard.jsx';
import ScrollList from '../../component/scrollList/scrollList.jsx';

@connect((state) => ({
  todayListInfo: state.todayListInfo
}), {
  ...actions
})
export default class extends Component {
  constructor () {
    super();
    this.state = {

    };
  }

  componentWillMount () {
    let isToadyListIsInit = this.props.todayListInfo.isInit;
    !isToadyListIsInit && this.props.getToadyList();
  }

  render () {
    let { list, hasMore, loading, isEmpty } = this.props.todayListInfo;

    return (
      <div className="page-wrap today-page" ref="todayPage">
        <ScrollList
          element={this.refs.todayPage}
          onLoad={this.props.getToadyList}
          hasMore={hasMore}
          loading={loading}
          isEmpty={isEmpty}
        >
          <div className="today-list">
            {
              list.map((item, index) => {
                return (
                  <FeedCard
                    key={index}
                    route="/detail/222"
                    item={item}
                  />
                )
              })
            }
          </div>
        </ScrollList>
      </div>
    )
  }
}
