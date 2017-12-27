import React, { Component } from 'react';
import $ from 'jquery'; 
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import logo from './logo.jpg';
import * as scroll from '../../js/Scroll.js'

// includes

class Navigation extends Component {

  render() {

    return (


    <nav>

          <ul className="nav">
              <li className="logo"> 
               <a><img src={logo} /> </a>
              </li>
              <li className="loud"><Link to="/about">About</Link></li>
              <li className="loud"><Link to="/experience">Experience</Link></li>
              <li className="loud"><Link to="/portfolio">Portfolio</Link></li>
              <li className="loud"><Link to="/contact">Contact</Link></li>
          </ul>
    </nav>

    );
  }
}

export default Navigation;
