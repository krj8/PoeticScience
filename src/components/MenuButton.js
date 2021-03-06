import React from 'react';
import './MenuButton.css';
import { Link } from 'react-router-dom';


const STYLES = ['ddm--primary', 'ddm--outline'];

const SIZES = ['ddm--medium', 'ddm--large'];

export const MenuButton = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) 
    ? buttonStyle 
    : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to='/sign-up' className='ddm-mobile'>
            <button
            className={`ddm ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            >
                {children}
            </button>
        </Link>
    );
};