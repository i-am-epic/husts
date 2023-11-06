import { FaGithub, FaLinkedin, FaDiscord, FaInstagram, FaWhatsapp, FaLocationDot, FaEnvelope } from "react-icons/fa6";
import React, { useState, useContext, createContext } from 'react';
import ProjectContext from './ProjectContext';
import ProjectProvider from './ProjectsContainer';
import PreviousNextButtons from './PreviousNextButtons';
import Profile from './../../../assets/images.jpeg'
import { FaPython, FaJava, FaDart, FaCPlusPlus, FaJs, FaDatabase, FaStar, FaStarHalfAlt } from 'react-icons/fa';
export const RenderProjects = () => {
    const { currentProjectIndex } = useContext(ProjectContext);

    const projectsData = [
        "PinDrop - Value a land based on the dropped pin location (ML, Web Development, Data Mining): (Work in progress) Research-oriented, application to get the estimated price of land based on the location pinned on the map. \nTech: Python, React, Google maps API, Selenium, TensorFlow",
        "Creating a social media from scratch similar to Twitter and Reddit. \nTech: React, FastAPI, JavaScript, Python",
        "Build and deployed a friendly bot which interacts with the user to perform the predefined task when triggered. \nTech: Python, JavaScript, Discord-API",
        "Created a simple app which scans the unsolved sudoku image and displays the solved Sudoku. \nTech: Python, Flutter, Dart, CSS, TensorFlow",
        "Created Interactive portfolio website using React (PS the one u are in right now, if you liked it hit me up for :))"
        // Add more projects as needed
    ];


    return (
        <div className="project-content">
            <p>{projectsData[currentProjectIndex]}</p>
        </div>
    );
};

export const PreviousNextButton = () => {
    const { currentProjectIndex, setCurrentProjectIndex } = useContext(ProjectContext);

    return (
        <div>
            <PreviousNextButtons />
        </div>
    );
};

export const renderProfileContent = () => {
    return (
        <div>
            <img
                src={require('../../../assets/images.jpeg')}
                alt='Your Profile'
            />
        </div>
    );
};
const socialButtonStyle = {
    fontSize: "24px",      // Adjust the font size to make the buttons bigger
    padding: "10px",       // Add padding around the buttons
    color: "gray",         // Change the color to gray
};

export const renderSocialButtons = () => {
    return (
        <div className="social-buttons">
            <a href="https://github.com/i-am-epic" target="_blank" rel="noopener noreferrer" style={socialButtonStyle} className="social-button"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/nikhilav/" target="_blank" rel="noopener noreferrer" style={socialButtonStyle} className="social-button"><FaLinkedin /></a>
            <a href="https://discord.com/users/418079236574674964" target="_blank" rel="noopener noreferrer" style={socialButtonStyle} className="social-button"><FaDiscord /></a>
            <a href="https://www.instagram.com/nikboson" target="_blank" rel="noopener noreferrer" style={socialButtonStyle} className="social-button"><FaInstagram /></a>
            {/* Add buttons for LeetCode and StackOverflow similarly */}
        </div>
    );
};

export const renderEducationContent = () => (
    "B.E in CSE"
);

export const renderEmailContent = () => {
    const email = "niknikhilav@gmail.com";
    const phoneNumber = "+91 6361607405";
    const address = "Bengaluru, India";

    const handleEmailClick = () => {
        window.location.href = `mailto:${email}`;
    };

    return (
        <div className="contact-info">
            <div className="contact-item">
                <button onClick={handleEmailClick}><FaEnvelope />  {email}</button>
            </div>
            <div className="contact-item">
                <FaWhatsapp />  {phoneNumber}
            </div>
            <div className="contact-item">
                <FaLocationDot />  {address}
            </div>
        </div>
    );
};

export const renderSkillsSummaryContent = () => {
    const skills = [
        { name: "Python", icon: <FaPython />, rating: [1, 1, 1, 1, 0.5] },
        { name: "Java", icon: <FaJava />, rating: [1, 1, 1, 1, 0.5] },
        //{ name: "Dart", icon: <FaDart />, rating: [1, 1, 1,1, 0.5, 1] },
        //{ name: "C/C++", icon: <FaCPlusPlus />, rating: [1, 1, 1, 0.5, 1] },
        { name: "JavaScript", icon: <FaJs />, rating: [1, 1, 1, 0.5, 0.5] },
        { name: "SQL", icon: <FaDatabase />, rating: [1, 1, 1, 0.5, 0.5] },
        //{ name: "Bash", icon: <FaDart />, rating: [1, 1, 1,1, 0.5, 1] },
    ];

    return (
        <div className="skills-summary">
            {skills.map((skill, index) => (
                <div className="skill" key={index} style={{ display: "flex", alignItems: "center", marginRight: "2px", justifyContent: "center", }}>
                    {skill.icon}
                    <p className="skill-name">{skill.name}</p>
                    <div className="skill-rating">
                        {skill.rating.map((rating, i) => (
                            rating === 1 ? <FaStar key={i} /> : <FaStarHalfAlt key={i} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export const renderExperienceContent = () => (
    "ABB GISPL. Software Engineer Aug 2023 - Present"
);

export const renderDevOpsInternContent = () => (
    "ABB India Mar 2023 - Aug 2023"
);
