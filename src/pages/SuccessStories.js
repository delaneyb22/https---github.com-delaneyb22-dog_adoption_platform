// src/pages/SuccessStories.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SuccessStories = () => {
    const stories = [
        { id: 1, title: 'Max Finds a Home', content: 'Max was adopted by a loving family...' },
        { id: 2, title: 'Bella Gets Rescued', content: 'Bella’s story is one of hope and love...' },
    ];

    return (
        <div>
            <Header />
            <main>
                <h2>Success Stories</h2>
                <ul>
                    {stories.map(story => (
                        <li key={story.id}>
                            <h3>{story.title}</h3>
                            <p>{story.content}</p>
                        </li>
                    ))}
                </ul>
            </main>
            <Footer />
        </div>
    );
};

export default SuccessStories;