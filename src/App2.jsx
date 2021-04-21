// Menu/s don't close when RightMenu option is clicked
// All menus click in unison
// Page doesn't stop loading

import React, { useRef } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import './App2.css';

// TopNavBar
import Logo from '/Users/kindrajonson/Desktop/PoeticScience/website_files/React/poetic_science/src/Licensed_Photos/logo.png';

// TopMenu, LeftMenu, RightMenu
import { useDetectOutsideClick } from './components/useDetectOutsideClick.js';
import Self from '/Users/kindrajonson/Desktop/PoeticScience/website_files/React/poetic_science/src/Licensed_Photos/123.jpg';

// Content
import HomePage from './components/Home.js';
import FrontCover from './components/FrontCover.js';
import Flyology from './components/Flyology.js';
import Resume from './components/Resume.js';
import Portfolio from './components/Portfolio.js';
import Babbage from './components/Babbage.js';
import BackCover from './components/BackCover.js';



export default function App2() {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive); 

  return(
    <Switch>
      <body>
        {/* App Frame */}
        <div>
          {/* TopNavbar */}
          <nav className='TopNavBar'>
            <NavLink to='/'><img className='logo' src={Logo} alt='Ada Logo'/></NavLink>
            <NavLink to='/' className='navbar-title'>PoeticScience.net</NavLink>
          
            {/* TopMenu */}
            <div className='MenuButton'>
              <div className='menu-container'>
                
                <button onClick={onClick} className="menu-trigger">
                  <span>About Me</span>
                  <img src={Self} alt='selfie'/>
                </button>

                <nav ref={dropdownRef} className={`menu ${isActive ? "active" : "inactive"}`}>
                  <ul>
                    <li><NavLink to="/about_me/resume">Resume</NavLink></li>
                      <div className='line'></div>
                    <li><NavLink to="/about_me/portfolio">Portfolio</NavLink></li>
                  </ul>
                </nav>
              </div>
            </div>
          </nav>


          {/* Background */}
          <div className="background">

            {/* LeftMenu */}
            <div className="LeftMenu"> 
              <div className="left-menu-container">
                <div onClick={onClick} className='left-ribbon'>
                  <div className='left-menu-trigger'>
                    <span className='left-text'>Previous Chapters</span>
                  </div>
                </div>
              
                <nav ref={dropdownRef} className={`left-menu ${isActive ? "active" : "inactive"}`}>
                  <ul>
                    <li><NavLink to="/flyology">Flyology</NavLink></li>
                      <div className='left-line'></div>
                    <li><NavLink to="/intro">Front Cover</NavLink></li>
                  </ul>
                </nav>
              </div>
            </div>

            {/* RightMenu */}
            <div className="RightMenu"> 
              <div className="right-menu-container">
                <div onClick={onClick} className='right-ribbon'>
                  <div className='right-menu-trigger'>
                    <span className='right-text'>Next Chapters</span>
                  </div>
                </div>

                <nav ref={dropdownRef} className={`right-menu ${isActive ? "active" : "inactive"}`}>
                  <ul>
                    <li><NavLink to="/babbage">Babbage</NavLink></li>
                      <div className='right-line'></div>
                    <li><NavLink to="/outro">Back Cover</NavLink></li>
                  </ul>
                </nav>
              </div>
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
      </div>
    </body> 
  </Switch>
  )
}