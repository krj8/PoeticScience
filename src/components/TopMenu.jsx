// ToDo: Keep 'About Me' from going to two lines when window size decreases

import React, { useRef } from 'react';
import './TopMenu.css';
import { useDetectOutsideClick } from './useDetectOutsideClick.js';

export default function TopMenu() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
        <div className="menu-container">
          <button onClick={onClick} className="menu-trigger">
            <span>About Me</span>
            <i class="fas fa-ghost"></i>
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