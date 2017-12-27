import React, { Component } from 'react';
import Header from '../../components/headerComponent/header';
import Hero from '../../components/heroComponent/hero';
import Footer from '../../components/footerComponent/footer';
import * as scroll from '../../js/Scroll.js'


// includes

class Homepage extends Component {
  render() {
    return (
      <div className="Homepage">
      <Header/>
      <Hero/>
      <Footer/>
      </div>
    );
  }
}

export default Homepage;
