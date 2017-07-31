import React, { Component } from 'react';
import Header from '../../component/header/index.jsx';
import Footer from '../../component/footer/index.jsx';

export default class extends Component {
  constructor () {
    super();
    this.state = {

    };
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
import './wrap.less';
