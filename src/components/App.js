import React from 'react';
import {HashRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import Navigation from './navigation/Navigation';
import AboutApp from './about_app/AboutApp';
import Search from './search/Search';
import Footer from './footer/Footer';
import './App.scss';
import logo from '../images/clef.jpg';

const Home = () => null;

function App() {
  return (
    <div className="dashboard--app">
      <div className="container--app">
        <div className="header--app">
          <div className="logo--box">
            <img className="logo--img" src={logo}/>
            <span className="logo--text">ClassicalApp</span>
          </div>
          <Router>
            <Navigation />
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/about/app" component={AboutApp}/>
              <Route path="/contact" component={Footer}/>
            </Switch>
          </Router>
        </div>
        <Search />
      </div>
    </div>
  );
}

export default App;
