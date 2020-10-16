import React, {useEffect, useState} from 'react';
import piano from '../../images/piano.png';
import FormSearchComposers from './FormSearchComposers';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Search = ({composers, setComposers, inputSearch, setInputSearch, setIsVisible, setWorks, myRef}) => {

    useEffect(() => {
        AOS.init({
          duration : 500
        });
      }, []);

    return (
        <div className="main--app">
            <div className="container--app">
                <div className="main--box" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                    <span className="title--letter letter--1">C</span>
                    <span className="title--letter letter--2">l</span>
                    <span className="title--letter letter--3">a</span>
                    <span className="title--letter letter--4">s</span>
                    <span className="title--letter letter--5">s</span>
                    <span className="title--letter letter--6">i</span>
                    <span className="title--letter letter--7">c</span>
                    <span className="title--letter letter--8">a</span>
                    <span className="title--letter letter--9">l</span>
                    <h3 className="main--title">music</h3>
                </div>
                <img className="main--img" src={piano} />
                <FormSearchComposers 
                    composers={composers}
                    setComposers={setComposers}
                    inputSearch={inputSearch}
                    setInputSearch={setInputSearch}
                    setIsVisible={setIsVisible}
                    setWorks={setWorks}
                    myRef={myRef}
                />
            </div>   
        </div>
    )
};


export default Search;