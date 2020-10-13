import React, {useEffect} from 'react';
import myImg from "../../images/mira.jpg";
import AOS from 'aos';


const Footer = () => {

    useEffect(() => {
        AOS.init({
          duration : 500
        });
      }, []);

    return (
        <div className="footer--contact main--app container--app">
            <div className="footer--box">
                <div className="footer--img--box" data-aos="zoom-in">
                    <img src={myImg} />
                </div>
                <div className="footer--info--container" data-aos="fade-up">
                    <h2 className="footer--title">Myroslava Skala</h2>
                    <p className="footer--info">Junior front end developer</p>
                    <div className="footer--info--box">
                        <div className="info--box--icon">
                            <i className="fa fa-map-marker" />
                            <span className="info--box--text">Wrocław, Poland</span>
                        </div>
                        <div className="info--box--icon">
                            <i className="fa fa-envelope" />
                            <span className="info--box--text">myroslavaskala@gmail.com</span>
                        </div>
                        <div className="info--box--icon">
                            <i className="fa fa-globe" />
                            <a className="info--box--text" href="https://ms-classical-app.herokuapp.com/#/">ms-classical-app.com</a>
                        </div>
                    </div>
                </div>
                <div className="footer--circle">
                    <div className="footer--icons">
                        <a className="footer--link" href="https://github.com/Myroslava12" target="_blank">
                            <i className="fa fa-github" />
                        </a>
                        <a className="footer--link" href="https://www.linkedin.com/in/myroslava-skala-342b21196/" target="_blank">
                            <i className="fa fa-linkedin" />
                        </a>
                        <a className="footer--link" href="https://www.facebook.com/myroslava.skala" target="_blank">
                            <i className="fa fa-facebook-f" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;