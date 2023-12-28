import React, { useEffect, useState } from 'react';
import './WindEffect.scss'; // Import your WindEffect styles
import snowman from './../../../src/assets/snowman-nobg.png';

const Snowstorm = () => {
    const [iceHeight, setIceHeight] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIceHeight((prevHeight) => Math.min(prevHeight + 1, 400)); // Maximum ice height is 400px (adjust as needed)
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="snow-container">
            {/* Snowstorm container */}
            <div className="snow"></div>
            <div className="snowman">
            <div className="snow"></div>

                <img
                    src={snowman}
                    alt="Snowman"
                    className="snowman_image"
                    style={{ height: '15rem', zIndex: 0, margin: 'auto', position: 'relative' ,}}
                />
            </div>
            {/* Snowman */}
            <div className="snow"></div>

            {/* Accumulated snow at the bottom */}
            <div className="snow_bottom" style={{ height: `${iceHeight}px`, zIndex: 0 }}></div>


        </div>
    );
};

export default Snowstorm;