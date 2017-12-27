import React, { Component } from 'react';
import $ from 'jquery'; 
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// components
import Header from './components/headerComponent/header';
import Hero from './components/heroComponent/hero';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import Body from './components/bodyComponent/body';
import Experience from'./components/pages/experiencePage';
import Portfolio from'./components/pages/portfolioPage';
import Contact from'./components/pages/contactPage';
// includes
import * as scroll from './js/Scroll.js'
import './css/default.min.css';
import './'

class App extends Component {
  render() {
    return (
      <div className="App">
 		<Header/>
 			<Homepage/>
 			<Experience/>
 			<Portfolio/>
 			<Contact/>
 		<Footer/>

      </div>
    );
  }
}

export default App;
