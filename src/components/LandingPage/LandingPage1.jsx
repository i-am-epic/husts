import React, { useState } from 'react';
import './LandingPage.scss';
import { Link, useNavigate } from 'react-router-dom';
import { Howl, Howler } from 'howler';
import Lottie from 'lottie-react';
import helloLottie from './../../assets/helloLottie';
import bgLottie from './../../assets/bgLottie';
import buttonSound from './../../assets/button.mp3';
import useSound from 'use-sound';
import retro from './../../assets/mixkit-retro-game-notification-212.wav';
import bgMusic from './../../assets/chill-chords-143504.mp3';
const LandingPage = () => {
  const [isMuted, setIsMuted] = useState(false);
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);
  const [play] = useSound(buttonSound);
  const [retroNotification] = useSound(retro)
  const [volume, setvolume] = React.useState(0.5);

  const [bg, { stop }] = useSound(bgMusic, {
    volume: 0.2
    // `interrupt` ensures that if the sound starts again before it's
    // ended, it will truncate it. Otherwise, the sound can overlap.
  });
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
    retroNotification();
    play();
    setTimeout(() => {
      navigate('/home'); // Navigate to /home after a delay
    }, 6000); // Adjust the delay time as needed (7 seconds in this example)
  };

  const voiceButtonClicked = (e) => {
    // Define the sound configuration
    const soundConfig = {
      src: ['./public/assets/button.mp3'], // Adjust the path as needed
      volume: 1.0, // Adjust the volume (0.0 to 1.0)
      format: ['ogg'], // Add supported formats
      preload: true, // Preload the audio
      onend: function () {
        console.log('Audio ended');
      },
    };

    const sound = new Howl(soundConfig);

    // Check for load errors
    sound.on('loaderror', (id, error) => {
      console.error('Error loading audio:', error);
    });

    // Play the sound
    sound.play();

    // You can also control the volume here if needed
    Howler.volume(1.0);
  };

  return (
    //<div>We will be RIGHT BACK :) </div>

    <div className="welcome-container">
      {!isClicked && (
        <div>
          {/* Other content here that should be hidden when the animation is visible */}
          <h1 className="title">Nikhil A V</h1>
          <h4>Software Engineer and developer</h4>
          <p className="description">Simplistic Portfolio website</p>
          <div className="button-container">
            <button className="mute-button" onClick={toggleMute}>
              {isMuted ? 'Mute' : 'Unmute'}
            </button>
            <button className="next-button" onClick={() => HandleNextClick()}>

              Portfolio
            </button>
            {/* <button onClick={voiceButtonClicked}>Play</button> */}
          </div>
        </div>
      )}

      {isClicked && <Lottie animationData={helloLottie} />}
      {!isClicked && <Lottie className="bg-lottie" animationData={bgLottie} />}
    </div>
  );
};

export default LandingPage;
