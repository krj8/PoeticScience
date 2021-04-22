import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './TopMenu.css';
import { useDetectOutsideClick } from './useDetectOutsideClick.js';
import Self from '/Users/kindrajonson/Desktop/PoeticScience/website_files/React/poetic_science/src/Licensed_Photos/123.jpg';

export default function TopMenu() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
        <div className="menu-container">
          <button onClick={onClick} className="menu-trigger">
            <span>About Me</span>
            <img src={Self} alt='self'/>

            <nav ref={dropdownRef} className={`menu ${isActive ? "active" : "inactive"}`}>
              <ul>
                <li><Link to="/about_me/resume">Resume</Link></li>
                <div className='line'></div>
                <li><Link to="/about_me/portfolio">Portfolio</Link></li>
              </ul>
            </nav>
          </button>
        </div>
  );
}