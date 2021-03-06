// // <!-- right_nav -->
// //           <div class="right_nav_title" id="top_right_nav">Back Cover</div>
// //           <div class="right_nav_title" id="mid_right_nav">Babbage <br>&<br> His Engines</div>
// //           <div class="right_nav_title" id="bot_right_nav">Flyology</div>

// //            <!-- left_nav -->
// //            <div class="left_nav_title" id="top_left_nav" input="button" onClick="FrontCover()">Front Cover</div>
// //            <div class="left_nav_title" id="mid_left_nav">Ada Lovelace</div>
// //            <div class="left_nav_title" id="bot_left_nav">About Me</div>

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';
// import { MenuButton } from './MenuButton';
// import Logo from '/Users/kindrajonson/Desktop/PoeticScience/website_files/React/poetic_science/src/Licensed_Photos/logo.png';

// function Navbar() {
//     const [click, setClick] = useState(false);
//     const [button, setButton] = useState(true);

//     const handleClick = () => setClick(!click);
//     const closeMobileMenu = () => setClick(false);

//     const showButton = () => {
//         if (window.innerWidth <= 960) {
//             setButton(false);
//         } else {
//             setButton(true);
//         }
//     };

//     useEffect(() => {
//         showButton();
//     }, []);

//     window.addEventListener('resize', showButton);

//     return (
//         <>
//             <nav className='navbar'>
//                 <div className='navbar-container'>
//                     <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
//                         Logo 
                        
//                         {/* <i className='fab fa-typo3' /> */}
//                         <img className='logo' src={Logo} alt='Ada Logo'/>
//                         </Link>
    
//                     <div className='menu-icon' onClick={handleClick}>
//                         <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
//                     </div>
//                     <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//                         <li className='nav-item'>
//                             <Link to='/' className='nav-links' onClick={closeMobileMenu}>
//                                 Home
//                             </Link>
//                         </li>
//                         <li className='nav-item'>
//                             <Link 
//                             to='/services' 
//                             className='nav-links' 
//                             onClick={closeMobileMenu}
//                             >
//                                 Services
//                             </Link>
//                         </li>
//                         <li className='nav-item'>
//                             <Link 
//                             to='/products' 
//                             className='nav-links' 
//                             onClick={closeMobileMenu}
//                             >
//                                 Products
//                             </Link>
//                         </li>

//                         <li>
//                             <Link 
//                             to='/sign-up' 
//                             className='nav-links-mobile' 
//                             onClick={closeMobileMenu}
//                             >
//                                 Sign Up
//                             </Link>
//                         </li>
//                     </ul>
//                     {button && <MenuButton buttonStyle='btn--outline'>SIGN UP</MenuButton>}
//                 </div>
//             </nav>
//         </>
//     );
// }

// export default Navbar;