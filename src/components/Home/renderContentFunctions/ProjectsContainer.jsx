import React, { useState } from 'react';
import ProjectContext from './ProjectContext';
import { useContext } from 'react';

const ProjectProvider = ({ children }) => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    return (
        <ProjectContext.Provider value={{ currentProjectIndex, setCurrentProjectIndex }}>
            {children}
        </ProjectContext.Provider>
    );
};


export default ProjectProvider;
