import React, { Component } from 'react';
import Header from '../../components/headerComponent/header';
import Footer from '../../components/footerComponent/footer';
import * as actives from '../../js/Active.js'
import * as scroll from '../../js/Scroll.js'


// includes

class Portfolio extends Component {
  render() {
    return (
      <div className="Portfolio">
      <Header/>
      <div className="portpage">
      <h1> OOPS! This page is currently under construction,
      Please check back soon! 
      <i className="fa fa-hand-peace-o" aria-hidden="true"></i></h1>
      </div>
      <Footer/>
      </div>
    );
  }
}

export default Portfolio ;
