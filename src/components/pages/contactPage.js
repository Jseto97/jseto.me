import React, { Component } from 'react';
import Header from '../../components/headerComponent/header';
import Footer from '../../components/footerComponent/footer';
import * as actives from '../../js/Active.js'
import * as scroll from '../../js/Scroll.js'


// includes

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
      <Header/>
      <div className="contactme col-8">
      <h1>Contact</h1>
		I'm an impassioned individual looking to learn and apply my skills
		to real world problems. If you're interested in working together,
		drop me a line, I'm always looking for opportunities to save the world 	—
		from bad UX. 
		<br/>
		<br/>
		You can reach me at <a href="mailto:jsetomsc@gmail.com" target="_top">jsetomsc@gmail.com</a>
		<br/>
		<br/>
		<div className="linkCenter">
		
		<a className="icons col-1" href="https://www.linkedin.com/in/jsetoUX/">
		<i className="fa fa-linkedin"aria-hidden="true"></i> linkedin  </a>
		<a className="icons2 col-1" href="https://medium.com/@jsetomsc"> 
		<i className="fa fa-medium" aria-hidden="true"> Medium </i> </a>
		<a className="icons3 col-1" href="https://github.com/Jseto97"> 
		<i className="fa fa-github" aria-hidden="true"></i> Github</a>
 		</div>
		</div>
		<Footer/>
      </div>
    );
  }
}

export default Contact ;
