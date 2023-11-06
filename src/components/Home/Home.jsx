import React from 'react';
import './Home.scss';
import Card from './Cards/Cards';
import { useState, useEffect } from 'react';
import { renderProfileContent, renderSocialButtons, renderEducationContent, renderEmailContent, renderSkillsSummaryContent, renderExperienceContent, renderDevOpsInternContent, RenderProjects, PreviousNextButtons } from './renderContentFunctions/renderContentFunctions';

const Home = () => {

    const aboutMeSegments = [
        {
            title: "",
            content: renderProfileContent,
        },
        {
            title: "",
            content: renderSocialButtons,
        },
        {
            title: "Education",
            content: renderEducationContent,
        },
        {
            title: "Email",
            content: renderEmailContent,
        },
        {
            title: "Skills Summary",
            content: renderSkillsSummaryContent,
        },
        // Other segments...
    ];

    const worksSegments = [
        {
            title: "Experience",
            content: renderExperienceContent,
        },
        {
            title: "DevOps Intern",
            content: renderDevOpsInternContent,
        },
        // Add more segments as needed...
    ];
    const moreSegments = [

        {
            title: "",
            content: RenderProjects,
        },
        {
            title: "",
            content: PreviousNextButtons,
        }
    ];


    // State to keep track of the maximum content height
    const [maxContentHeight, setMaxContentHeight] = useState(0);

    useEffect(() => {
        // Calculate the maximum content height
        const segments = [...aboutMeSegments, ...worksSegments, ...moreSegments];
        const maxSegmentHeight = Math.max(...segments.map(segment => segment.content.length));
        setMaxContentHeight(maxSegmentHeight);
    }, [aboutMeSegments, worksSegments, moreSegments]);

    return (
        <div className="main-container">
            <div className="home-container">
                <main className="main">
                    <div className="center-content">
                        <Card title="About Me" segments={aboutMeSegments} />
                        <Card title="Works" segments={worksSegments} />
                        <Card title="More" segments={moreSegments} />
                    </div>
                </main>
                <aside className="right-sidebar">
                    {/* Right sidebar content */}
                </aside>
            </div>
        </div>
    );
};

export default Home;
