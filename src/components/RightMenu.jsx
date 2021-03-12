// ToDo: Turn around/mirror 'Next Chapters' right menu
// Make Previous & Next Chapters menus work
// Attach ChapterMenus to page, so move correctly when window is resized



import React, { useRef } from 'react';
import './RightMenu.css';
import RightRibbon from './RightRibbon.js';
import { useDetectOutsideClick } from './useDetectOutsideClick.js';

export default function RightMenu() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);
  return (
          <div className="right-menu-container">
            <div onClick={onClick} className='right-ribbon'>
              <div className='right-menu-trigger'>
                <span className='right-text'>Next Chapters</span>
              </div>
            </div>

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