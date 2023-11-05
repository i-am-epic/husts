import React, { useState } from 'react';
import './LandingPage.scss';
import { Link, useNavigate } from 'react-router-dom';
import { Howl, Howler } from 'howler';

const LandingPage = () => {
  const [isMuted, setIsMuted] = useState(false);
  const navigate = useNavigate();

  const toggleMute = () => {
    if (isMuted) {
      voiceButtonClicked()
    }
    setIsMuted(!isMuted);
  };

  const handleNextClick = () => {
    navigate('/home');
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
    <div className="welcome-container">
      <h1 className="title">Nikhil A V</h1>
      <h4>Software Engineer and developer</h4>
      <p className="description">Simplistic Interactive website</p>
      <div className="button-container">
        <button className="mute-button" onClick={toggleMute}>
          {isMuted ? 'Unmute' : 'Mute'}
        </button>
        <button className="next-button" onClick={() => handleNextClick()}>
          Portfolio
        </button>
        <button onClick={voiceButtonClicked}>Play</button>
      </div>
    </div>
  );
};

export default LandingPage;
