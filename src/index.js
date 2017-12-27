import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router,
  Route,
  IndexRoute,
  hashHistory,
  Link,
  Switch
} from 'react-router-dom';

//components;

import Header from './components/headerComponent/header';
import Hero from './components/heroComponent/hero';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import Body from './components/bodyComponent/body';
import Experience from './components/pages/experiencePage';
import Portfolio from'./components/pages/portfolioPage';
import Contact from'./components/pages/contactPage';


const app = document.getElementById('root');

ReactDOM.render(
	<Router>
		<Switch>
			<Route exact path="/" component={App}/>
			<Route exact path="/about" component={Homepage} />
			<Route exact path="/experience" component={Experience}/>
			<Route exact path="/portfolio" component={Portfolio}/>
			<Route exact path="/contact" component={Contact}/>
		</Switch>
	</Router>, 
	app);
registerServiceWorker();
