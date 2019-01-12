import React, { Component } from 'react';

const homepage = (props) => {
    return (
        <div id="section1">
        <div className="thirds">
            <div id="nameContainer">Ben Wexler</div>

            <div id="picContainer">
                <img id="profPic" src="./../pics/Profile_Pic.jpeg"/>
            </div>

        </div>
        <div className="thirds">

            <div className="option">
                    <a href="https://developedbywex.wordpress.com/">About</a></div>
            <div className="option">
                    <a href="https://developedbywex.wordpress.com/about-me/">Projects</a></div>
   
            <div className="option">
                    <a href="https://docs.google.com/document/d/1RvvV_Jt6YaZKq8U-i4Jz_e7JWW1NgHlOSUWWBQgPNj0/edit?usp=sharing">Resume</a>
                </div>
            <div className="option">
                    <a href="mailto:mixedbywex@gmail.com">Contact</a>
            </div>


        </div>
        <div className="thirds">
            <div id="bottomContainer">
                <div id="linkContainer">
                        <a href="https://www.linkedin.com/in/benjwexler/"><i className="fab fa-linkedin"></i></a>
                        <a href="https://github.com/benjwexler"><i className="fab fa-github-square"></i></a>
                </div>

                <div id="title">Full-Stack Web Developer</div>
                <div id="downArrowContainer">
                        <i className="fas fa-angle-double-down"></i>
                </div>
                
            </div>

        </div>
    </div>
    )
}

export default homepage;