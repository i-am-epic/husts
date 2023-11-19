import React from 'react';

const PyPortfolio = () => {
    return (
        <div>
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>PyFolio Nikhil</title>
                <link
                    rel="stylesheet"
                    href="https://pyscript.net/releases/2023.11.1/core.css"
                />
                <script
                    type="module"
                    src="https://pyscript.net/releases/2023.11.1/core.js"
                ></script>
            </head>
            <body>
                <h1>Py Portfolio</h1>
                <p>This is my website using pyscript</p>
                <input type="text" id="english" placeholder="Type English here..." />
                <button py-click="translate_english">Translate</button>
                <div id="output"></div>
                <script type="py" src="./main.py" config="./pyscript.json"></script>
            </body>
        </div>
    );
};

export default PyPortfolio;
