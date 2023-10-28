import React from "react";

import "./WelcomePage.scss";
const WelcomePage = () => {
    return (
        <div className="walkytalky">

            <div className="spring-wire">
                <div className="spring-attach"></div>

                <div className="spring-wire-image">
                    <img src="https://d33wubrfki0l68.cloudfront.net/28167a090e9b0ba3ecfd6222d34a85cde40d7802/6cfeb/images/spring.svg" alt="spring" />
                </div>
                <div className="spring-attach-down"></div>


            </div>
            <div className="main-box">
                <div className="speaker-container"></div>
                <div className="screen-container">
                    <div className="screen">
                        <div className="screen-header">
                            I'm Nikhil A V
                        </div>
                        <div className="screen-content">
                            I'm a DevOps Engineer
                        </div>
                    </div>
                </div>
                <div className="mic-button">
                    <div className="speaker-container"></div>

                </div>
                <div className="turn-on-notify"></div>


            </div>
        </div>
    );

}

export default WelcomePage;



