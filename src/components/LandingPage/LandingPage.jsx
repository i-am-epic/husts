import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Howl, Howler } from 'howler';
import Lottie from 'lottie-react';
import buttonSound from './../../assets/button.mp3';
import useSound from 'use-sound';
import retro from './../../assets/mixkit-retro-game-notification-212.wav';
import bgMusic from './../../assets/coldwindbreeze.mp3';
import './LandingPage.scss';
import './WindEffect.scss';
import Snowstorm from './SnowStrom';
const LandingPage = () => {

  const [isMuted, setIsMuted] = useState(false);
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);
  const [play] = useSound(buttonSound);
  const [retroNotification] = useSound(retro);
  const [bg, { stop }] = useSound(bgMusic, { volume: 0.2 });
  if (isMuted) {
    bg();
  }

  const toggleMute = () => {
    if (isMuted) {
      voiceButtonClicked();
      retroNotification();
      stop();
    }
    setIsMuted(!isMuted);
  };

  const HandleNextClick = () => {
    setIsClicked(true);
    voiceButtonClicked(); // Trigger audio immediately

    setTimeout(() => {
      navigate('/home');
    }, 6);
  };

  const voiceButtonClicked = () => {




    console.log('Audio loaded');
    if (isMuted) {
      play();
      console.log('Audio played');
    }
    Howler.volume(1.0);
  };


  return (
    <div>
      <div className="welcome-container">

        {!isClicked && (
          <div>
            <h1 className="title">Nikhil A V</h1>
            <h4>Software Engineer and Developer</h4>
            <p className="description">Simplistic Portfolio website</p>
            <div className="button-container">
              <button className="mute-button" onClick={toggleMute}>
                {isMuted ? 'Mute' : 'Unmute'}
              </button>
              <button className="next-button" onClick={HandleNextClick}>
                Portfolio
              </button>
            </div>
          </div>
        )}

      </div>

      <Snowstorm />

    </div>

  );
};

export default LandingPage;