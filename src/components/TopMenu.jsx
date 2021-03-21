// ToDo: Keep 'About Me' from going to two lines when window size decreases

import React, { useRef } from 'react';
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
            <img src={Self} />
          </button>
          <nav
            ref={dropdownRef}
            className={`menu ${isActive ? "active" : "inactive"}`}
          >
            <ul>
              <li>
                <a href="/portfolio">Portfolio</a>
              </li>
              <div className='line'></div>
              <li>
                <a href="/resume">Resume</a>
              </li>
            </ul>
          </nav>
        </div>
  );
}