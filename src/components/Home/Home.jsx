import React from 'react';
import './Home.scss';
import Card from './Cards/Cards';
import { useState, useEffect } from 'react';

const Home = () => {
    const aboutMeSegments = [
        { title: "Introduction", content: "Nikhil A V" },
        { title: "Github", content: "github.com/i-am-epic" },
        { title: "Education", content: "<a>click</a>" },
        { title: "Email", content: "niknikhilav@gmail.com" },
        { title: "Skills Summary", content: "Languages: Python, Java, Dart, C/C++, JavaScript, SQL, Bash" },
    ];

    const worksSegments = [
        { title: "Experience", content: "ABB GISPL. Software Engineer Aug 2023 - Present" },

        { title: "DevOps Intern", content: "ABB India Mar 2023 - Aug 2023" },

    ];

    const moreSegments = [
        { title: "Projects", content: "PinDrop - Value a land based on the dropped pin location (ML, Web Development, Data Mining): (Work in progress) Research-oriented, application to get the estimated price of land based on the location pinned on the map. Tech: Python, React, Google maps API, Selenium, TensorFlow" },
        { title: "Twitter Clone", content: "Creating a social media from scratch similar to Twitter and Reddit. Tech: React, FastAPI, JavaScript, Python" },
        { title: "Discord BOT", content: "Build and deployed a friendly bot which interacts with the user to perform the predefined task when triggered. Tech: Python, JavaScript, Discord-API" },
        { title: "Sudoku Solver", content: "Created a simple app which scans the unsolved sudoku image and displays the solved Sudoku. Tech: Python, Flutter, Dart, CSS, TensorFlow" },
        // Add more segments based on your resume
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
        <div className="home-container">
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
