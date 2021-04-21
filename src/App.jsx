// Add whole app frame and menus to App.jsx page, including Switch

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App2.css';

import HomePage from './components/Home.js';
import FrontCover from './components/FrontCover.js';
import Flyology from './components/Flyology.js';
import Resume from './components/Resume.js';
import Portfolio from './components/Portfolio.js';
import Babbage from './components/Babbage.js';
import BackCover from './components/BackCover.js';


export default function App() {
  return(
    <Switch>
      <body>
        <div>
            {/* TopNavbar */}





            {/* Background */}

            {/* LeftMenu */}

            {/* Right Menu */}

            {/* <ul className="left_menu">
              <li><NavLink exact to="/intro">Front Cover</NavLink></li>
              <li><NavLink to="/flyology">Flyology</NavLink></li>
            </ul> */}
        
            {/* <ul className="right_menu">
              <li><NavLink to="/babbage">Babbage</NavLink></li>
              <li><NavLink to="/outro">Back Cover</NavLink></li>
            </ul> */}
          </div>
        </div>

        <div className="content">
        {/* when url path is ____ render _____ component */}
          <Route exact path="/" component={HomePage} />
          <Route path="/about_me/resume" component={Resume} />
          <Route path="/about_me/portfolio" component={Portfolio} />
          <Route path="/intro" component={FrontCover} />
          <Route path="/flyology" component={Flyology} />
          <Route path="/babbage" component={Babbage} />
          <Route path="/outro" component={BackCover} />
        </div>
      </body> 
    </Switch>
  )
}