import React from 'react';


const Footer = () => {
    return (
        <div className="footer--contact">
            <h2 className="footer--title">Created by Myroslava Skala</h2>
            <p className="footer--info">Contact to me:</p>
            <div className="footer--icon--box">
                <a className="footer--link" href="https://github.com/Myroslava12" target="_blank">
                    <i className="fa fa-github" />
                </a>
                <a className="footer--link" href="https://www.linkedin.com/in/myroslava-skala-342b21196/" target="_blank">
                    <i className="fa fa-linkedin" />
                </a>
                <a className="footer--link" href="https://www.facebook.com/myroslava.skala" target="_blank">
                    <i className="fa fa-facebook-f" />
                </a>
                <div className="footer--icon--gmail">
                    <i className="fa fa-envelope" />
                    <span className="icon--gmail--info">myroslavaskala@gmail.com</span>
                </div>
            </div>
        </div>
    )
};

export default Footer;