import React, { useState } from 'react';
import {NavLink, HashRouter as Router} from 'react-router-dom';

const Navigation = () => {
    const [showNav, setShowNav] = useState(false);

    const showNavbar = () => {
        setShowNav(!showNav);
        document.documentElement.style.overflow = showNav ? '' : 'hidden';
    };

    return (
        <nav>
            <ul className="nav--app">
                <li><NavLink exact to="/" activeClassName="active--link">Home</NavLink></li>
                <li><NavLink to="/about" activeClassName="active--link">About App</NavLink></li>
                <li><NavLink to="/favorites" activeClassName="active--link">Favorites</NavLink></li>
                <li><NavLink to="/contact" activeClassName="active--link">Contact</NavLink></li>
            </ul>
            <div className="navbar--app">
            <button onClick={showNavbar} className="navbar--icon--btn">
                {showNav ? <i className="fa fa-times" /> : <i className="fa fa-bars" />}
            </button>
            {showNav && <ul className="mobile--nav--app">
                <li><NavLink onClick={showNavbar} exact to="/" activeClassName="active--link">Home</NavLink></li>
                <li><NavLink onClick={showNavbar} to="/about" activeClassName="active--link">About App</NavLink></li>
                <li><NavLink onClick={showNavbar} to="/favorites" activeClassName="active--link">Favorites</NavLink></li>
                <li><NavLink onClick={showNavbar} to="/contact" activeClassName="active--link">Contact</NavLink></li>
            </ul>}
            </div>
        </nav>
    )
}

export default Navigation;