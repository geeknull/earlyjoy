import './feedCard.less';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class extends Component {
  constructor () {
    super();
  }

  static propTypes = {
    item: PropTypes.object,
    route: PropTypes.string
  };

  static defaultProps = {
    item: {},
    route: ''
  };

  render () {
    let { img, text, time } = this.props.item;
    let { route } = this.props;

    return (
      <Link to={route}>
        <div className="weui-cells feed-card-item">
          <div className="img-wrap">
            <img src={img}/>
          </div>
          <div className="info">
            <span className="text">{text}</span>
            <span className="time">{time}</span>
          </div>
        </div>
      </Link>
    )
  }
}
