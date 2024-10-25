// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Optional: Add your CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Dog Adoption Platform. All Rights Reserved.</p>
            <p>
                Follow us on:
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a>,
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a>,
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a>
            </p>
        </footer>
    );
};

export default Footer;