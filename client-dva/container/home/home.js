import React, { Component } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';

@connect((state) => {
  return {
    myinfo: state.myinfo,
    count: state.count,
  };
})
export default class extends Component {
  constructor () {
    super();
    this.state = {

    };
  }

  componentWillMount () {
    this.props.dispatch({
      type: 'myinfo/getUserName',
      payload: 123,
    });
  }

  render () {
    let {userName} = this.props.myinfo;
    return (
      <div className="page-wrap">
        123
        {userName}
      </div>
    )
  }
}
import './home.less';
