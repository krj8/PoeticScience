import React, { useRef } from 'react';
import './RightMenu.css';
import { useDetectOutsideClick } from './useDetectOutsideClick.js';

export default function RightMenu() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);
  return (
        <div className="right-menu-container">
          <button onClick={onClick} className="left-menu-trigger">
            <span>Next Chapters</span>
          </button>
          <nav
            ref={dropdownRef}
            className={`right-menu ${isActive ? "active" : "inactive"}`}
          >
            <ul>
              <li>
                <a href="/babbage">Babbage</a>
              </li>
              <div className='right-line'></div>
              <li>
                <a href="/back_cover">Back Cover</a>
              </li>
            </ul>
          </nav>
        </div>
  );
}