import React, { Component } from 'react';


// includes

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="foot"> 
        <span> Built With React</span>
        <span className="footcopy"> <i className="fa fa-copyright" aria-hidden="true"> JSeto 2017</i></span> 
        </div> 
      </footer>
    );
  }
}

export default Footer;
