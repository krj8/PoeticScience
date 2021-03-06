import React, { useRef } from 'react';
import './DropdownMenu.css';
import { useDetectOutsideClick } from './useDetectOutsideClick';


// https://letsbuildui.dev/articles/building-a-dropdown-menu-component-with-react-hooks
const DropdownMenu = () => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);
  
    useEffect(() => {
        const pageClickEvent = (e) => {
             // If the active element exists and is clicked outside of
            if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
                setIsActive(!isActive);
            }
        };

    //   If menu is active, listens for clicks
        if (isActive) {
            window.addEventListener('click', pageClickEvent);
        }

        return () => {
            window.removeEventListener('click', pageClickEvent);
        }

      }, [isActive]);

    return (
      <div className="menu-container">
        <button onClick={onClick} className="menu-trigger">
          <span>About Me</span>
          <i className='fas fa-times' />
        </button>
        <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
          <ul>
            <li><a href="/summary">Summary</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/resume">Resume</a></li>
          </ul>
        </nav>
      </div>
    );
  };