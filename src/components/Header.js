// src/components/Header.js
import React from 'react';
import './Header.css'; //Add  CSS file for styling

const Header = () => {
    return (
        <header className="header">
            <h1>Dog Adoption Platform</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/favorites">Favorites</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;