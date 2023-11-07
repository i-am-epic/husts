// PreviousNextButtons.jsx
import React, { useContext } from 'react';
import ProjectContext from './ProjectContext';
const projectsData = [
    {
        title: "PinDrop",
        description: "Value a land based on the dropped pin location (ML, Web Development, Data Mining): (Work in progress) Research-oriented, application to get the estimated price of land based on the location pinned on the map.",
        techStack: "Tech: Python, React, Google maps API, Selenium, TensorFlow",
        image: "image_url_for_pin_drop",
        link: "project_link_for_pin_drop",
        sourceCode: "source_code_link_for_pin_drop",
    },
    {
        title: "Twitter Clone",
        description: "Creating a social media from scratch similar to Twitter and Reddit.",
        techStack: "Tech: React, FastAPI, JavaScript, Python",
        image: "image_url_for_twitter_clone",
        link: "project_link_for_twitter_clone",
        sourceCode: "source_code_link_for_twitter_clone",
    },
    {
        title: "Discord BOT",
        description: "Build and deployed a friendly bot which interacts with the user to perform the predefined task when triggered.",
        techStack: "Tech: Python, JavaScript, Discord-API",
        image: "image_url_for_discord_bot",
        link: "project_link_for_discord_bot",
        sourceCode: "source_code_link_for_discord_bot",
    },
    {
        title: "Sudoku Solver",
        description: "Created a simple app which scans the unsolved sudoku image and displays the solved Sudoku.",
        techStack: "Tech: Python, Flutter, Dart, CSS, TensorFlow",
        image: "image_url_for_sudoku_solver",
        link: "project_link_for_sudoku_solver",
        sourceCode: "source_code_link_for_sudoku_solver",
    },
    {
        title: "Interactive Portfolio",
        description: "Created Interactive portfolio website using React (PS the one you are in right now, if you liked it hit me up for :))",
        techStack: "Tech: React, JavaScript, HTML, CSS",
        image: "image_url_for_portfolio",
        link: "project_link_for_portfolio",
        sourceCode: "source_code_link_for_portfolio",
    },
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
