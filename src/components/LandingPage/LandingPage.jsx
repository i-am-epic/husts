import React, { useState } from 'react';
import './LandingPage.scss';
import Home from '../Home/Home';
import { Link, useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false); // Add state for sound
  const navigate = useNavigate();

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const playSound = () => {
    setIsPlaying(true);
  };

  const handleNextClick = () => {
    navigate("/home");
  };

  return (
    <div className="welcome-container">
      <h1 className="title">Nikhil A V</h1><h4>Software Engineer and developer</h4>
      <p className="description">Simplistic Interactive website</p>
      <div className="button-container">
        <button className="mute-button" onClick={toggleMute}>
          {isMuted ? "Unmute" : "Mute"}
        </button>
        <button className="next-button" onClick={() => { handleNextClick(); playSound(); }}>
          Portfolio
        </button>
        {/* <Sound
          url="/button.mp3"
          playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
          onFinishedPlaying={() => setIsPlaying(false)}
        /> */}
      </div>
    </div>
  );
};

export default LandingPage;
