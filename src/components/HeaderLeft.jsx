import React, { useState, useEffect } from 'react';
import '../assets/styles/Header.css';

function Header() {
    const [content, setContent] = useState('');
    const [randomLine, setRandomLine] = useState('');

    useEffect(() => {
        fetch('/assets/captions.md')
            .then(response => response.text())
            .then(text => {
                setContent(text);
                const lines = text.split('\n');
                const randomIndex = Math.floor(Math.random() * lines.length);
                setRandomLine(lines[randomIndex]);
            })
            .catch(error => console.error('Error fetching the file:', error));
    }, []);

    return (
        <div className='title'>
            <h1>
                <div className='file-content'>
                    {randomLine}
                </div>
            </h1>
        </div>
    );
}

export default Header;
