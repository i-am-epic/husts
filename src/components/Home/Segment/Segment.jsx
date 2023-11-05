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
            <div className='segments'>
                {isClicked && <Lottie animationData={lockLottie} />}

                <div className='segment-container'>
                    <h3 className="segment-title">{title}</h3>
                    <div className={`segment-content ${isClicked ? 'visible' : ''}`}>
                        <div dangerouslySetInnerHTML={{ __html: content }} />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Segment;
