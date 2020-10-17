import React, {useEffect} from 'react';
import PopularWorks from "./PopularWorks";
import AOS from 'aos';


const AboutApp = () => {

    useEffect(() => {
        AOS.init({
          duration : 500
        });
    }, []);

    return (
        <div className="about--section">
            <div className="about--img--box">
                <div className="player--box">
                    <span className="player--line player--line-2"></span>
                    <span className="player--line player--line-3"></span>
                    <span className="player--line player--line-6"></span>
                    <span className="player--line player--line-4"></span>
                    <span className="player--line player--line-3"></span>
                    <span className="player--line player--line-2"></span>
                    <span className="player--line player--line-1"></span>
                    <span className="player--line player--line-1"></span>
                    <span className="player--line player--line-2"></span>
                    <span className="player--line player--line-5"></span>
                    <span className="player--line player--line-3"></span>
                    <span className="player--line player--line-2"></span>
                    <span className="player--line player--line-2"></span>
                    <span className="player--line player--line-1"></span>
                    <span className="player--line player--line-1"></span>
                    <span className="player--line player--line-3"></span>
                    <span className="player--line player--line-2"></span>
                    <span className="player--line player--line-1"></span>
                    <span className="player--line player--line-1"></span>
                    <span className="player--line player--line-3"></span>
                    <span className="player--line player--line-3"></span>
                    <span className="player--line player--line-2"></span>
                    <span className="player--line player--line-2"></span>
                    <span className="player--line player--line-1"></span>
                    <span className="player--line player--line-1"></span>
                    <span className="player--line player--line-3"></span>
                    <span className="player--line player--line-5"></span>
                    <span className="player--line player--line-4"></span>
                </div>
                <div className="house--box" data-aos="zoom-in-down">
                    <span className="house--line house--line-1"></span>
                    <span className="house--line house--line-2"></span>
                    <span className="house--line house--line-3"></span>
                    <span className="house--line house--line-4"></span>
                    <span className="house--line house--line-5"></span>
                    <span className="house--line house--line-6"></span>
                    <span className="house--line house--line-7"></span>
                    <span className="house--line house--line-8"></span>
                    <span className="house--line house--line-9"></span>
                    <span className="house--line house--line-10"></span>
                    <span className="house--line house--line-11"></span>
                    <span className="house--line house--line-12"></span>
                    <span className="house--line house--line-13"></span>
                    <span className="house--line house--line-14"></span>
                    <span className="house--line house--line-15"></span>
                    <span className="house--line house--line-16"></span>
                    <span className="house--line house--line-17"></span>
                    <span className="house--line house--line-18"></span>
                    <span className="house--line house--line-19"></span>
                    <span className="house--line house--line-20"></span>
                    <span className="house--line house--line-21"></span>
                    <span className="house--line house--line-22"></span>
                    <span className="house--line house--line-23"></span>
                    <span className="house--line house--line-24"></span>
                </div>
                <div className="player--box">
                    <span className="player--line player--line-2"></span>
                    <span className="player--line player--line-3"></span>
                    <span className="player--line player--line-5"></span>
                    <span className="player--line player--line-4"></span>
                    <span className="player--line player--line-3"></span>
                    <span className="player--line player--line-2"></span>
                    <span className="player--line player--line-1"></span>
                    <span className="player--line player--line-1"></span>
                    <span className="player--line player--line-2"></span>
                    <span className="player--line player--line-5"></span>
                    <span className="player--line player--line-6"></span>
                    <span className="player--line player--line-5"></span>
                    <span className="player--line player--line-3"></span>
                    <span className="player--line player--line-3"></span>
                    <span className="player--line player--line-2"></span>
                    <span className="player--line player--line-2"></span>
                    <span className="player--line player--line-1"></span>
                    <span className="player--line player--line-1"></span>
                    <span className="player--line player--line-3"></span>
                    <span className="player--line player--line-3"></span>
                    <span className="player--line player--line-2"></span>
                    <span className="player--line player--line-2"></span>
                    <span className="player--line player--line-1"></span>
                    <span className="player--line player--line-1"></span>
                    <span className="player--line player--line-3"></span>
                    <span className="player--line player--line-5"></span>
                    <span className="player--line player--line-4"></span>
                    <span className="player--line player--line-5"></span>
                    <span className="player--line player--line-2"></span>
                </div>
                <h1 className="about--title">
                    <span className="about--title--letter">C</span>
                    <span className="about--title--letter">l</span>
                    <span className="about--title--letter">a</span>
                    <span className="about--title--letter">s</span>
                    <span className="about--title--letter">s</span>
                    <span className="about--title--letter">i</span>
                    <span className="about--title--letter">c</span>
                    <span className="about--title--letter">a</span>
                    <span className="about--title--letter">l</span>
                    <span className="about--title--letter">A</span>
                    <span className="about--title--letter">p</span>
                    <span className="about--title--letter">p</span>
                </h1>
            </div>
            <div className="about--info--box" data-aos="fade-up">
                <p className="about--text">Music has developed over the centuries. It has changed over the years.
                    <strong> Classical music</strong> is a very broad term that includes almost everything written over the past 1000 years.
                </p>
                <p className="about--text">In the classics, we find songs that suit virtually every mood. </p>
                <p className="about--text">Classical music is great for break away from outside world, concentrating and focusing on study or work. It can stimulate the brain, impove sleep, reduse stress and also strengthem the immune system.</p>
                <p className="about--text">In addithion, it is created on instruments having a natural sound, and the rhythm and tempo are adapted to our abilities. All of this makes it easier to listen to without distraction or fatigue.</p>
                <p className="about--text">Lots of works by prominent composers of classical music used in commercials, movies and playing toys</p>
                <p className="about--text">You will be surprised how many works you already know when you hear, but you do not know who the author is.</p>
                <p className="about--text about--list--text">Here are some of the world's most famous classical music melodies. Enjoy 😉</p>
            </div>
            <PopularWorks />
        </div>
    )
};

export default AboutApp;