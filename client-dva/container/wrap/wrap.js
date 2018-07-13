import './wrap.less';
import React, { Component } from 'react';
import Header from '../../component/header/header';
import Footer from '../../component/footer/footer';
import { connect } from 'dva';

@connect((state) => {
  return {
    routing: state.routing
  }
})
export default class extends Component {
  constructor () {
    super();
    this.state = {

    };
  }

  componentDidMount () {
  }

  render () {
    return (
      <div className="app-container">
        <Header/>
        {this.props.children}
        <Footer/>
      </div>
    )
  }
}
