import React from 'react'
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <div className='header'>
            <div className='menuLinks'>
                <div className='homeMenu'><Link to="/">Home</Link></div>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className='appHeading'>
                Universities
            </div>
        </div>

    )};
export default Header;