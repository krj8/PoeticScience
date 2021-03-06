import React from 'react';
import './MenuButton.css';
import { Link } from 'react-router-dom';

// https://letsbuildui.dev/articles/building-a-dropdown-menu-component-with-react-hooks
const DropdownMenu = () => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);
  
    return (
      <div className="menu-container">
        <button onClick={onClick} className="menu-trigger">
          <span>About Me</span>
          <i className='fas fa-times' />
        </button>
        <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
          <ul>
            <li><a href="/messages">Messages</a></li>
            <li><a href="/trips">Trips</a></li>
            <li><a href="/saved">Saved</a></li>
          </ul>
        </nav>
      </div>
    );
  };

// const STYLES = ['btn--primary', 'btn--outline'];

// const SIZES = ['btn--medium', 'btn--large'];

// export const MenuButton = ({
//     children, 
//     type, 
//     onClick, 
//     buttonStyle, 
//     buttonSize
// }) => {
//     const checkButtonStyle = STYLES.includes(buttonStyle) 
//     ? buttonStyle 
//     : STYLES[0];

//     const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

//     return (
//         <Link to='/sign-up' className='btn-mobile'>
//             <button
//             className={`btn ${checkButtonStyle} ${checkButtonSize}`}
//             onClick={onClick}
//             type={type}
//             >
//                 {children}
//             </button>
//         </Link>
//     );
// };