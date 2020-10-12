import React, { useRef, useState } from 'react';
import {HashRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './navigation/Navigation';
import AboutApp from './about_app/AboutApp';
import Favorites from "./favorites/Favorites";
import Search from './search/Search';
import Footer from './footer/Footer';
import Composers from './composers/Composers';
import './App.scss';
import logo from '../images/clef.jpg';

const Home = () => {
  const [inputSearch, setInputSearch] = useState('');
  const [composers, setComposers] = useState([]);
  const [works, setWorks] = useState([]);

  const myRef = useRef();
  
  return (
    <>
      <Search 
        composers={composers}
        setComposers={setComposers}
        inputSearch={inputSearch}
        setInputSearch={setInputSearch}
        setWorks={setWorks}
        myRef={myRef}
      />
      <div>
        <Composers 
          composers={composers}
          setWorks={setWorks}
          inputSearch={inputSearch}
          works={works}
          myRef={myRef}
        />
      </div>
    </>
  )
};

function App() {

  return (
    <main>
      <div className="dashboard--app">
        <div className="container--app container--search">
          <div className="header--app">
            <a className="logo--box" href="/">
              <img className="logo--img" src={logo}/>
              <span className="logo--text">ClassicalApp</span>
            </a>
            <Router>
              <Navigation />
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about/app" component={AboutApp}/>
                <Route path="/about/favorites" component={Favorites}/>
                <Route path="/contact" component={Footer}/>
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
