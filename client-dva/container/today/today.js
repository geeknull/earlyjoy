import React, { Component } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';

@connect()
export default class extends Component {
  constructor () {
    super();
    this.state = {

    };
  }

  componentWillMount () {
  }

  render () {
    return (
      <div className="page-wrap">
        today
      </div>
    )
  }
}
import './today.less';
