import { FaGithub, FaLinkedin, FaDiscord, FaInstagram, FaWhatsapp, FaLocationDot, FaEnvelope } from "react-icons/fa6";
import React, { useState, useContext, createContext } from 'react';
import ProjectContext from './ProjectContext';
import ProjectProvider from './ProjectsContainer';
import PreviousNextButtons from './PreviousNextButtons';
import Profile from './../../../assets/pfpimage.png'
import { FaPython, FaJava, FaDart, FaCPlusPlus, FaJs, FaDatabase, FaStar, FaStarHalfAlt } from 'react-icons/fa';


import ResumeFile from './../../../assets/Nikhil_Resume.pdf'; // Adjust the path to your resume file

export const RenderProjects = () => {
    const { currentProjectIndex } = useContext(ProjectContext);

    const projectsData = [
        {
            title: "PinDrop",
            description: "Value a land based on the dropped pin location (ML, Web Development, Data Mining): (Work in progress) Research-oriented, application to get the estimated price of land based on the location pinned on the map.",
            techStack: "Tech: Python, React, Google maps API, Selenium, TensorFlow",
            image: '../../../assets/download.jpeg',
            link: "project_link_for_pin_drop",
            sourceCode: "source_code_link_for_pin_drop",
        },
        {
            title: "Twitter Clone",
            description: "Creating a social media from scratch similar to Twitter and Reddit.",
            techStack: "Tech: React, FastAPI, JavaScript, Python",
            image: '../../../assets/download.jpeg',
            link: "project_link_for_twitter_clone",
            sourceCode: "source_code_link_for_twitter_clone",
        },
        {
            title: "Discord BOT",
            description: "Build and deployed a friendly bot which interacts with the user to perform the predefined task when triggered.",
            techStack: "Tech: Python, JavaScript, Discord-API",
            image: '../../../assets/download.jpeg',
            link: "project_link_for_discord_bot",
            sourceCode: "source_code_link_for_discord_bot",
        },
        {
            title: "Sudoku Solver",
            description: "Created a simple app which scans the unsolved sudoku image and displays the solved Sudoku.",
            techStack: "Tech: Python, Flutter, Dart, CSS, TensorFlow",
            image: '../../../assets/download.jpeg',
            link: "project_link_for_sudoku_solver",
            sourceCode: "source_code_link_for_sudoku_solver",
        },
        {
            title: "Interactive Portfolio",
            description: "Created Interactive portfolio website using React (PS the one you are in right now, if you liked it hit me up for :))",
            techStack: "Tech: React, JavaScript, HTML, CSS",
            image: '../../../assets/download.jpeg',
            link: "project_link_for_portfolio",
            sourceCode: "source_code_link_for_portfolio",
        },
    ];
    const project = projectsData[currentProjectIndex];
    const [isPopupVisible, setPopupVisible] = useState(false);

    const togglePopup = () => {
        setPopupVisible(!isPopupVisible);
    };

    return (
        <div className="project-content">
            <img
                //src={require(project.image)}
                src={require('../../../assets/download.jpeg')}

                alt={project.title}
                onClick={togglePopup}
            />
            {isPopupVisible && (
                <div className="project-popup">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <p>{project.techStack}</p>
                    <p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">Link</a>
                        &nbsp;|&nbsp;
                        <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">Source Code</a>
                    </p>
                </div>
            )}
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
                src={require('../../../assets/pfpimage.png')}
                alt='Nikhils Image'
                style={{ maxWidth: '300px' }}
            />
        </div>
    );
};

// renderContentFunctions.jsx

export const renderResumeDownloadButton = () => {
    const handleDownload = () => {
        // Create a download link and trigger the download
        const link = document.createElement('a');
        link.href = ResumeFile;
        link.setAttribute('download', 'Nikhil_Resume.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button onClick={handleDownload}>
            Download Resume
        </button>
    );
};


export const renderResumeDownloadButton1 = () => {
    const handleDownload = () => {
        // Add logic to collect client details (e.g., IP, etc.)
        const clientDetails = {
            // Add client details here
        };

        // Send client details to the server (you would need a server for this)
        // You can use fetch or any other method to send details to your server

        // For now, let's assume you have a server endpoint for generating the resume file
        const resumeEndpoint = 'https://your-server.com/generate-resume';

        // Assuming the server generates and returns the resume file
        fetch(resumeEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(clientDetails),
        })
            .then(response => response.blob())
            .then(blob => {
                // Create a download link and trigger the download
                const url = window.URL.createObjectURL(new Blob([blob]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'Nikhil_Resume.pdf');
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            })
            .catch(error => {
                console.error('Error downloading resume:', error);
            });
    };

    return (
        <button onClick={handleDownload}>
            Download Resume
        </button>
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
                <button>
                    <FaWhatsapp />  {phoneNumber}
                </button>
            </div>
            <div className="contact-item">
                <button>
                    <FaLocationDot />  {address}
                </button>
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

export const renderEarlylife = () => (
    <div className="timeline-section">

        <div className="timeline-content">
            <div className="timeline-item">
                <p>Up to 12th grade - SCTS</p>
            </div>
            <div className="timeline-arrow">
                <span>&#9650;</span> {/* Upward arrow */}
            </div>
            <div className="timeline-item">
                <p>Up to 10th grade - SSRS</p>
            </div>
            <div className="timeline-arrow">
                <span>&#9650;</span> {/* Upward arrow */}
            </div>
            <div className="timeline-item">
                <p>Up to 8th grade - SJR School</p>
            </div>
            <div className="timeline-arrow">
                <span>&#9650;</span> {/* Upward arrow */}
            </div>
            <div className="timeline-item">
                <p>August 26, 2001</p>
            </div>
        </div>
    </div>
);

export const renderEducationContent = () => (
    <div className="timeline-section">

        <div className="timeline-content">
            <div className="timeline-item">
                <p>BE in CSE - DSATM</p>

                {/* Add your education details in reverse order */}
            </div>
        </div>
    </div>
);

export const renderExperienceContent = () => (
    <div className="timeline-section">

        <div className="timeline-content">
            <div className="timeline-item">
                <p>Software Development Engineer at ABB</p>
            </div>
            <div className="timeline-arrow">
                <span>&#9650;</span> {/* Upward arrow */}
            </div>
            <div className="timeline-item">
                <p>DevOps Intern at ABB</p>
            </div>
            <div className="timeline-arrow">
                <span>&#9650;</span> {/* Upward arrow */}
            </div>
            <div className="timeline-item">
                <p>Brand Designer for Dk54</p>
            </div>
            <div className="timeline-arrow">
                <span>&#9650;</span> {/* Upward arrow */}
            </div>
            <div className="timeline-item">
                <p>Marketing Intern at BoltIOT</p>
            </div>
        </div>
    </div>
);
