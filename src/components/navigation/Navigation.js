import React, { useState } from 'react';
import {HashRouter as Router, NavLink} from 'react-router-dom';

const Navigation = () => {
    const [showNav, setShowNav] = useState(false);

    const showNavbar = () => setShowNav(prev => !prev);

    return (
        <nav>
            <ul className="nav--app">
                <li><NavLink exact to="/" activeClassName="active--link">Home</NavLink></li>
                <li><NavLink to="/about/app" activeClassName="active--link">About App</NavLink></li>
                <li><NavLink to="/about/favorites" activeClassName="active--link">Favorites</NavLink></li>
                <li><NavLink to="/contact" activeClassName="active--link">Contact</NavLink></li>
            </ul>
            <div className="navbar--app">
            <button onClick={showNavbar} className="navbar--icon--btn">
                {(showNav !== true) ? <i className="fa fa-bars"></i> : <i className="fa fa-times"></i>}
            </button>
            {showNav && <ul className={showNav ?  "mobile--nav--app" : "mobile--nav--app mobile--nav--hide"}>
                <li><NavLink onClick={showNavbar} exact to="/" activeClassName="active--link">Home</NavLink></li>
                <li><NavLink onClick={showNavbar} to="/about/app" activeClassName="active--link">About App</NavLink></li>
                <li><NavLink onClick={showNavbar} to="/about/favorites" activeClassName="active--link">Favorites</NavLink></li>
                <li><NavLink onClick={showNavbar} to="/contact" activeClassName="active--link">Contact</NavLink></li>
            </ul>}
            </div>
        </nav>
    )
}

export default Navigation;