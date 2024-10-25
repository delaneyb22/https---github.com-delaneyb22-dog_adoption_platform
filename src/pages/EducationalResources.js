// src/pages/EducationalResources.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const EducationalResources = () => {
    const resources = [
        { id: 1, title: 'How to Care for Your Dog', link: 'https://example.com/care' },
        { id: 2, title: 'Training Tips for New Dog Owners', link: 'https://example.com/training' },
    ];

    return (
        <div>
            <Header />
            <main>
                <h2>Educational Resources</h2>
                <ul>
                    {resources.map(resource => (
                        <li key={resource.id}>
                            <a href={resource.link} target="_blank" rel="noopener noreferrer">{resource.title}</a>
                        </li>
                    ))}
                </ul>
            </main>
            <Footer />
        </div>
    );
};

export default EducationalResources;