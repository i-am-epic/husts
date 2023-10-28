import React, { useState } from 'react';
import './Segment.scss'; // Style your segment as needed
import Sound from 'react-sound'; // Use the react-sound library for sound effects

const Segment = ({ title, content }) => {
    const [isClicked, setIsClicked] = useState(false);
    var isPlaying = true;

    // On video playing toggle values
    Sound.onplaying = function () {
        isPlaying = true;
    };

    // On video pause toggle values
    Sound.onpause = function () {
        isPlaying = false;
    };

    // Play video function
    async function playVid() {
        if (Sound.paused && !isPlaying) {
            return Sound.play();
        }
        else if (!Sound.paused && isPlaying) {
            return Sound.pause();
        } 
    }

    const handleClick = () => {
        setIsClicked(true); // Set isClicked to true on the first click

        if (!isClicked) {
            setIsClicked(true);
        }
    };

    return (
        <div className={`segment ${isClicked ? 'clicked' : ''}`} onClick={handleClick}>
        <div className='segment-container'>
        <h3 className="segment-title">{title}</h3>
            <div className={`segment-content ${isClicked ? 'visible' : ''}`}>
                {content}
            </div>
            {/* Sound effect when the segment is clicked */}
            {isClicked && <Sound url="assets/button-124476.mp3" playStatus={playVid} />}

        </div>
    
            
        </div>
    );
};

export default Segment;
