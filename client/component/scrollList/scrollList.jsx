import './scrollList.less';
import React, { Component, Children } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';

export default class extends Component {
  constructor () {
    super();
    this.state = {
      isBindScrollEvent: false,
      status: 'init' // init wait
    };
    this.elementScrollHandlerBind = this.elementScrollHandler.bind(this);
  }

  static propTypes = {
    hasMore: PropTypes.bool, // 是否还有更多
    loading: PropTypes.bool, // 是否能够加载，请求中的状态不允许加载
    onLoad: PropTypes.func, // 加载的函数
    element: PropTypes.object, // 监听的元素
    extra: PropTypes.number, // 额外的底边距
    isEmpty: PropTypes.bool // 是否为空
  };

  static defaultProps = {
    hasMore: true,
    loading: true,
    onLoad: ()=>{},
    element: null,
    extra: 10
  };

  elementScrollHandler (e) {
    let { scrollHeight, clientHeight, scrollTop } = e.target;
    let { loading, onLoad, hasMore, extra } = this.props;

    console.log('loading:', loading, 'hasMore', hasMore);
    if ( clientHeight + scrollTop + extra >= scrollHeight && !loading && hasMore ) {
      onLoad();
    }
  }

  componentWillReceiveProps (nextProps) {
    this.tryToBindScrollEvent(nextProps.element);
  }

  componentDidMount () {
    this.tryToBindScrollEvent(this.props.element);
  }

  tryToBindScrollEvent (element) {
    let { isBindScrollEvent } = this.state;

    if ( element && isBindScrollEvent === false ) {
      element.addEventListener('scroll', this.elementScrollHandlerBind, false);
      this.setState({ isBindScrollEvent: true });
    }
  }

  componentWillUnmount () {
    let { element } = this.props;
    if ( element ) {
      element.removeEventListener('scroll', this.elementScrollHandlerBind, false);
    }
  }

  render () {
    let { loading, hasMore, isEmpty } = this.props;

    return (
      <div className="scroll-list">
        {this.props.children}
        {
          loading &&
            <div className="weui-loadmore">
              <i className="weui-loading"/>
              <span className="weui-loadmore__tips">正在加载</span>
            </div>
        }
        {
          !hasMore &&
            <div className="weui-loadmore weui-loadmore_line weui-loadmore_dot">
              <span className="weui-loadmore__tips"/>
            </div>
        }
        {
          isEmpty &&
            <div className="weui-loadmore weui-loadmore_line">
              <span className="weui-loadmore__tips">暂无数据</span>
            </div>
        }
      </div>
    );
  }
}
