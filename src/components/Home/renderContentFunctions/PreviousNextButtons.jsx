// PreviousNextButtons.jsx
import React, { useContext } from 'react';
import ProjectContext from './ProjectContext';
const projectsData = [
    "Project 1: Description of Project 1",
    "Project 2: Description of Project 2",
    "Project 3: Description of Project 3",
    // Add more projects as needed
];

const PreviousNextButtons = () => {
    const { currentProjectIndex, setCurrentProjectIndex } = useContext(ProjectContext);

    const handlePrevious = () => {
        setCurrentProjectIndex((prevIndex) => (prevIndex - 1 + projectsData.length) % projectsData.length);
    };

    const handleNext = () => {
        setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
    };

    return (
        <div>
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button>
        </div>
    );
};

export default PreviousNextButtons;
