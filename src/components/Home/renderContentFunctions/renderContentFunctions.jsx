import { FaGithub } from "react-icons/fa6";
import React, { useState, useContext, createContext } from 'react';

// Create a context to manage the current project index
const ProjectContext = createContext();

const projectsData = [
    "Project 1: Description of Project 1",
    "Project 2: Description of Project 2",
    "Project 3: Description of Project 3",
    // Add more projects as needed
];
export const PreviousNextButtons = () => {
    const { currentProjectIndex, setCurrentProjectIndex } = useContext(ProjectContext);

    const handlePrevious = () => {
        setCurrentProjectIndex((prevIndex) => (prevIndex - 1 + projectsData.length) % projectsData.length);
    };

    const handleNext = () => {
        setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
    };

    return (
        <div>
            <button onClick={handlePrevious}>previous</button>
            <button onClick={handleNext}>next</button>
        </div>
    );
};

export const RenderProjects = () => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    return (
        <ProjectContext.Provider value={{ currentProjectIndex, setCurrentProjectIndex }}>
            <div className="project-content">
                <h3>Projects</h3>
                <p>{projectsData[currentProjectIndex]}</p>
            </div>
        </ProjectContext.Provider>
    );
};





export const renderProfileContent = () => {
    return (
        <div>
            <img
                src='your-profile-pic.jpg'
                alt='Your Profile'
            />
        </div>
    );
};


export const renderSocialButtons = () => {
    return (
        <div class="social-buttons">
            <a href="https://github.com/i-am-epic" target="_blank" rel="noopener noreferrer" class="social-button github"><FaGithub/></a>
            <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" class="social-button linkedin">LinkedIn</a>
            <a href="https://www.instagram.com/your-instagram-profile" target="_blank" rel="noopener noreferrer" class="social-button instagram">Instagram</a>
            <a href="https://discord.com/your-discord-profile" target="_blank" rel="noopener noreferrer" class="social-button discord">Discord</a>
        </div>
    );
};

export const renderEducationContent = () => (
    <a href='./'>click</a>
);

export const renderEmailContent = () => (
    "niknikhilav@gmail.com"
);

export const renderSkillsSummaryContent = () => (
    "Languages: Python, Java, Dart, C/C++, JavaScript, SQL, Bash"
);


export const renderExperienceContent = () => (
    "ABB GISPL. Software Engineer Aug 2023 - Present"
);

export const renderDevOpsInternContent = () => (
    "ABB India Mar 2023 - Aug 2023"
);




// Define other content rendering functions as needed
