import React, { Component } from 'react';
import Header from '../../components/headerComponent/header';
import Footer from '../../components/footerComponent/footer';
import * as actives from '../../js/Active.js'
import * as scroll from '../../js/Scroll.js'
import {Timeline, TimelineEvent} from 'react-event-timeline';





// includes

class Experience extends Component {
  render() {
    return (
      <div className="ExperiencePage">
      <Header/>
      <div className="Experience">
      <h1> Experience </h1>
      <a className="resume" href="file.doc">resume <i class="fa fa-file-pdf-o" aria-hidden="true"></i></a>
          <Timeline className="timeStyles">
            <TimelineEvent title="2017-Current"
                           subtitle="University of Waterloo"
                           icon={<i className='material-icons md-18'>launch</i>}
                           iconColor='black'
            >
                <h5>Teaching Assistant - Digital Media & Branding</h5>
                <h6>Tools Used: Adobe Suite, Illustrator, Photoshop, After-Effects</h6>

                <p className="smol">Over the course of four months, I worked as a leader, mentor and role model
                to first year students as a Teaching assistant to Professor Greg Smith, at the 
                University of Waterloo. 
                <br/>
                <br/>
                Through leading tutorials, presentations and online office hours
                I've honed my communication, time managment and leaderships skills, evolving beyond just a designer
                but an impassioned mentor and advocate of my craft.</p>

            </TimelineEvent>
            <TimelineEvent 
                title="2017"
                subtitle="Sears Initium Commerce Lab"
                icon={<i className="material-icons">web</i>}
                iconColor='black'
            >
                <h5>Front-End Developer</h5>
                <h6>Tech Stack: ReactJS, Salesforce Demandware, ISML, CSS/HTML/JS</h6>

                <ul className="smol">
                <br/>
                	<li> Devloped in a team environment through the use of agile methodologies,
                	participated in daily stand-ups
                	and sprint planning</li>
                	<li>Normalized development environments, working extensively with
                	Salesforce Demandware to streamline the development process </li>
                	<li>Developed modular and reusable components in the creation of a new POS Checkout system
                	written in ReactJS. Overhauling legacy system's in response to site load time and
                	cart bounce rates</li>
                	<li>Worked on global navigation for Project Blue Sky, multiple microsite format
                	for Sears main webpage utilizing ISML templating and DS script</li>
                	<li>Worked closely with the design team to apply UX principles in development,
                		worked towards consilidation of user research data and application towards
                		a better User Experience</li>

             </ul>
            </TimelineEvent>
            <TimelineEvent 
                title="2016"
                subtitle="Livegauge Physicalytics Inc"
                icon={<i className="material-icons">equalizer</i>}
                iconColor='black'
            >
                <h5>Data-Solutions Architect</h5>
                <h6>Tech Stack: ArCGIS, PowerMap, SQL, JQuery, CSS/HTML/JS</h6>

                <ul className="smol">
                <br/>
                	<li> Data Synthesization, Visualization and Processing along with 
                	technical support and client relationship development.</li>
                	<li>Utilized ArcGIS Software for visualization and analyzation of 
                	geo-spatial data aswell as powermap forinteractive client presentations </li>
                	<li>Devloped strategies to map and sythesize over 32 million demographic data
                	points per month. Lead Designer on Telus Data visulization project, creating
                	client facing interactive presentations to map real-time event data and derive
                	tangible insights for future development.</li>
                	<li>Findings were presented at 2016 Environics Canada Data onference </li>

             	</ul>
            </TimelineEvent>
    </Timeline>
    </div>

    <Footer/>

      </div>
    );
  }
}

export default Experience ;
