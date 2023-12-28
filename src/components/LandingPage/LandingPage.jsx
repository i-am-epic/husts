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
  const [bg, { stop }] = useSound(bgMusic, { volume: 0.8 });

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
    retroNotification();
    play();
    setTimeout(() => {
      navigate('/home');
    }, 6);
  };

  const voiceButtonClicked = () => {
    const soundConfig = {
      src: ['./public/assets/button.mp3'],
      volume: 1.0,
      format: ['ogg'],
      preload: true,
      onend: () => {
        console.log('Audio ended');
      },
    };

    const sound = new Howl(soundConfig);
    sound.on('loaderror', (id, error) => {
      console.error('Error loading audio:', error);
    });
    sound.play();
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