import React from 'react';
import line from "../../images/Vector1.jpg";
import clef from "../../images/clef.png";
import shortLine from "../../images/line.png";
import PopularWorks from "./PopularWorks";


const AboutApp = () => {

    return (
        <div className="about--section">
            <div className="about--img--box">
                <img className="about--img" src={line} />
                <img className="about--img--clef" src={clef} />
                <img className="about--img--line line--1" src={shortLine} />
                <img className="about--img--line line--2" src={shortLine} />
                <img className="about--img--line line--3" src={shortLine} />
                <img className="about--img--line line--4" src={shortLine} />
                <img className="about--img--line line--5" src={shortLine} />
                <h1 className="about--title">ClassicalApp</h1>
            </div>
            <div className="about--info--box">
                <p className="about--text">Music has developed over the centuries. It has changed over the years. 
                    <strong>Classical music</strong> is a very broad term that includes almost everything written over the past 1000 years.
                </p>
                <p className="about--text">In the classics, we find songs that suit virtually every mood.</p>
                <p className="about--text">Classical music is great for break away from outside workd, concentrating and focusing on study or work. It can stimulate the brain, impove sleep, reduse stress and also strengthem the immune system.</p>
                <p className="about--text">In addithion, it is created on instruments having a natural sound, and the rhythm and tempo are adapted to our abilities. All of this makes it easier to listen to without distraction or fatigue.</p>
                <p className="about--text">Lots of works by prominent composers of classical music used in commercials, movies and playing toys</p>
                <p className="about--text">You will be surprised how many works you already know when you hear, but you do not know who the author is.</p>
                <p className="about--text about--list--text">Here are some of the world's most famous classical music melodies and everything you need to know about them.</p>
            </div>
            <PopularWorks />
        </div>
    )
};

export default AboutApp;