import React, { useRef } from 'react';
// import { Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
// import { Switch } from 'react-router-dom';
import './LeftMenu.css';
import { useDetectOutsideClick } from './useDetectOutsideClick.js';

// import FrontCover from '/Users/kindrajonson/Desktop/PoeticScience/website_files/React/poetic_science/src/components/FrontCover.js';
// import Flyology from '/Users/kindrajonson/Desktop/PoeticScience/website_files/React/poetic_science/src/components/Flyology.js';

export default function LeftMenu() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
          <div className="left-menu-container">
            <div onClick={onClick} className='left-ribbon'>
              <div className='left-menu-trigger'>
                <span className='left-text'>Previous Chapters</span>
              </div>
            </div>
          
            <nav ref={dropdownRef} className={`left-menu ${isActive ? "active" : "inactive"}`}>
              <ul>
                <li><a href="/flyology">Flyology</a></li>
                <div className='left-line'></div>
                <li><a href="/intro">Front Cover</a></li>
              </ul>

          {/* <div className="content">
            <Route path="/intro" component={FrontCover} />
            <Route path="/flyology" component={Flyology} />
          </div> */}
          {/* </Switch> */}
          </nav>
        </div>
        // </Switch>
  );
}