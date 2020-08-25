import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className="header">
                <div className="header__logo">
                    <h1><a href="/">Velile Consultants</a></h1>
                </div>
            </div>
            <div class="menu">
                <div className="menu__main">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/events">Events</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;