import React, { useEffect } from 'react';
import './WindEffect.scss';
const Snowstorm = () => {
    // useEffect(() => {
    //     const script = document.createElement('script');
    //     script.src = 'src/components/LandingPage/snowstorm.js';
    //     script.async = true;

    //     script.onload = () => {
    //         // Snowstorm script has loaded, you can initialize it here if needed
    //         window.snowStorm.start();
    //     };

    //     document.body.appendChild(script);

    //     return () => {
    //         // Cleanup if needed
    //         document.body.removeChild(script);
    //     };
    // }, []);


    return (
        <div>
            {/* Snowstorm container */}
            <div id="snow-container"></div>
            <div className="snow"></div>

            <div className="snow_wrap">
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                {/* ... Add more .snow elements as needed */}
            </div>

            {/* Snowman */}
            <div className="snowman">
                <div className="head"></div>
                <div className="body"></div>
                <div className="bottom"></div>
            </div>

            {/* Accumulated snow at the bottom */}
            <div className="snow_bottom"></div>
        </div>
    );
};


export default Snowstorm;
