import React, { Component } from 'react';
import $ from 'jquery'; 
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import logo from './logo.jpg';
import * as scroll from '../../js/Scroll.js'
import Navigation from '../../components/navbarComponent/navigation';

// includes

class Header extends Component {
  constructor(props){
      super(props)
      this.state = { active: true }
      this.onButtonClick = this.onButtonClick.bind(this);
  } 
   onButtonClick() {
    this.setState((state) => ({ active: !state.active }))
  }

  render() {

    return (


<header className={this.state.active ? 'active' : ''}>

      <Navigation/>
      
      <button className="toggle-nav" onClick={this.onButtonClick}>
          <span className="fa fa-bookmark-o" aria-hidden="true"></span>
      </button>

      <div className="divider"></div>

  </header>
    );
  }
}

export default Header;
