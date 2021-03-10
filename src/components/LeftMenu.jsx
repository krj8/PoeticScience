import React, { useRef } from 'react';
import './LeftMenu.css';
import Ribbon from './Ribbon.js';
import { useDetectOutsideClick } from './useDetectOutsideClick.js';

export default function LeftMenu() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);
  return (
        <div className="left-menu-container">
          {/* <button onClick={onClick} className="left-menu-trigger">
            {/* <image className='ribbon' /> */}
            {/* <span>Previous Chapters</span>
          </button> */}
          <Ribbon onClick={onClick} className="left-menu-trigger">
        </Ribbon>
          <nav
            ref={dropdownRef}
            className={`left-menu ${isActive ? "active" : "inactive"}`}
          >
            <ul>
              <li>
                <a href="/flyology">Flyology</a>
              </li>
              <div className='left-line'></div>
              <li>
                <a href="/front_cover">Front Cover</a>
              </li>
            </ul>
          </nav>
        </div>
  );
}