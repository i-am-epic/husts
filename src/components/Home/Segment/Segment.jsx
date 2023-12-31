import React, { useState } from 'react';
import './Segment.scss';
import Lottie from 'lottie-react';
import lockLottie from '../../../assets/startLottie';
import useSound from 'use-sound';
import glass from '../../../assets/breaking-glass-84819.mp3';
import { renderProfileContent, renderSocialButtons, renderEducationContent, renderEmailContent, renderSkillsSummaryContent, renderExperienceContent, renderDevOpsInternContent, RenderProjects, PreviousNextButton,renderResumeDownloadButton } from '../renderContentFunctions/renderContentFunctions';
import ShowStrom from '../../LandingPage/SnowStrom';

const Segment = ({ title, content }) => {
    const [isClicked, setIsClicked] = useState(true);
    const [glassSound] = useSound(glass, { volume: 0.3 }); // Adjust the volume here

    const handleClick = () => {
        if (isClicked) {
            setIsClicked(!isClicked);
            glassSound();
        }
    };

    return (
        <div className={`segment ${isClicked ? 'clicked' : ''}`} onClick={handleClick}>
            <div className='segments'>
                {isClicked && <Lottie animationData={lockLottie} />}

                <div className='segment-container'>

                    <h3 className="segment-title">{title}</h3>
                    <div className={`segment-content ${isClicked ? 'visible' : ''}`}>
                        {eval(content)()} {/* Execute the function call from content */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Segment;
