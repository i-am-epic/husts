import React, { useState } from 'react';
import './Segment.scss'; // Style your segment as needed
import Lottie from 'lottie-react';
import lockLottie from '../../../assets/startLottie';

const Segment = ({ title, content }) => {
    const [isClicked, setIsClicked] = useState(true);

    const handleClick = () => {
        if (isClicked) {
            setIsClicked(!isClicked); // Toggle the 'isClicked' state

        }
    };

    return (
        <div className={`segment ${isClicked ? 'clicked' : ''}`} onClick={handleClick}>
            {isClicked && <Lottie animationData={lockLottie} />}

            <div className='segment-container'>
                <h3 className="segment-title">{title}</h3>
                <div className={`segment-content ${isClicked ? 'visible' : ''}`}>
                    {content}
                </div>
            </div>
        </div>
    );
};

export default Segment;
