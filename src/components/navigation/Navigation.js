import React from 'react';
import {HashRouter as Router, Switch, Route, NavLink} from 'react-router-dom';

const Navigation = () => {

    return (
        <nav>
            <ul className="nav--app">
                <li><NavLink exact to="/" activeClassName="active--link">Search</NavLink></li>
                <li><NavLink to="/about/app" activeClassName="active--link">About App</NavLink></li>
                <li><NavLink to="/contact" activeClassName="active--link">Contact</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navigation;