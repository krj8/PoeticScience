// <!-- right_nav -->
//           <div class="right_nav_title" id="top_right_nav">Back Cover</div>
//           <div class="right_nav_title" id="mid_right_nav">Babbage <br>&<br> His Engines</div>
//           <div class="right_nav_title" id="bot_right_nav">Flyology</div>

//            <!-- left_nav -->
//            <div class="left_nav_title" id="top_left_nav" input="button" onClick="FrontCover()">Front Cover</div>
//            <div class="left_nav_title" id="mid_left_nav">Ada Lovelace</div>
//            <div class="left_nav_title" id="bot_left_nav">About Me</div>

import React from 'react';
import { Link } from 'react-router-dom';
import './TopNavbar.css';
import TopMenu from './TopMenu.jsx';
import Logo from '/Users/kindrajonson/Desktop/PoeticScience/website_files/React/poetic_science/src/Licensed_Photos/logo.png';

export default function TopNavbar() {
    return (
        <nav className='navbar'>
            <Link to='/'>
                <img className='logo' src={Logo} alt='Ada Logo'/>
            </Link>
            <Link to='/' className='navbar-title'>
                {/* PoeticScience.net */}
                Hi, Mom & Dad!
            </Link>
            <div className='menu-button'>
                <TopMenu />
            </div>
        </nav>
    );
}