import React from 'react';
import { Link } from 'react-router-dom';
import './TopNavbar.css';
import TopMenu from './TopMenu.jsx';
import Logo from '/Users/kindrajonson/Desktop/PoeticScience/website_files/React/poetic_science/src/Licensed_Photos/logo.png';

export default function TopNavbar() {
    return (
        <nav className='navbar'>
            <Link to='/'><img className='logo' src={Logo} alt='Ada Logo'/></Link>
            <Link to='/' className='navbar-title'>PoeticScience.net</Link>
            <div className='menu-button'><TopMenu /></div>
        </nav>
    );
}