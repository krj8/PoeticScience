import React, { useRef } from 'react';
import './DropdownMenu.css';
import { useDetectOutsideClick } from './useDetectOutsideClick.js';

function DropdownMenu() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="container">
      <div className="menu-container">
        <button onClick={onClick} className="menu-trigger">
          <span>About Me</span>
          <img
            src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg"
            alt="dropdownMenu"
          />
        </button>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <ul>
            <li>
              <a href="/summary">Summary</a>
            </li>
            <li>
              <a href="/portfolio">Portfolio</a>
            </li>
            <li>
              <a href="/resume">Resume</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default DropdownMenu;