import React, { Component } from 'react';
import * as actives from '../../js/Active.js'
import Footer from '../../components/footerComponent/footer';




// includes

class Hero extends Component {
  render() {
    return (
      <div className="hero" id="about">

          <h1><span>Se·to</span> Definition</h1>
          <h3> <span> /Sētō/ </span> <i className="fa fa-volume-up" aria-hidden="true"></i> </h3>
          <div className="About col-sm-8 col-md-8 col-lg-8">
              <span><strong>1. Designer</strong></span>
              <p> A passionate designer, I always take a hollistic approach to
              every challenge I meet. Utilizing my unique skillset of Design and 
              Development, my ambition is to create innovative projects
              to solve issues and pepetuate the best UX.</p>
              <span><strong>2. Developer</strong></span>
              <p> With experience as a front-end Developer at Livegauge
              and Sears Canada, I'm an adaptable candidate with a growth mindset,
              hungry to take on the challenges of today, and build lasting
              solutions for those of tommorow. </p>
              <span><strong>3. UX Guru</strong></span>
              <p> From ordering food online, to 
              getting on the bus in the morning, heading off to work; our world 
              is surrounded by experiences. Naturally those experiences come
              with problems and pain points. As a UX designer my job is to create
              a seamless journey from start to finish. More than just creating pretty
              webpages, User experience design is a complex process that leaves
              a trail of questions, luckily I'm
              here to provide answers.</p>
          </div>
      </div>
    );
  }
}

export default Hero;
