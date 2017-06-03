import './rank.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import actions from '../../redux/actions/index.js';

@connect((state) => ({
  rankList: state.rankList
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
    this.props.getRankList();
  }

  render () {
    let { rankList } = this.props;

    return (
      <div className="page-wrap rank-page">
        <ul className="rank-list">
          {
            rankList.map((item, index) => {
              let { img, userName, userId, rank, continued } = item;

              return (
              <Link to='/user/222' key={index}>
                <li className="rank-item">
                  <div className="rank-level">{rank}</div>
                  <img src={img} className="rank-avatar"/>
                  <div className="rank-user-name">{userName}</div>
                  <div className="rank-continued">{continued}天</div>
                </li>
              </Link>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
