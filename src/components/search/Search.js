import React from 'react';
import piano from '../../images/piano.png';
import Form from './Form';


const Search = () => {

    return (
        <div className="main--app">
            <div className="main--box">
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
            <Form />
        </div>
    )
};


export default Search;