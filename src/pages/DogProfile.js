// src/pages/DogProfile.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DogProfile = ({ dog }) => {
    return (
        <div>
            <Header />
            <main>
                <h2>{dog.name}</h2>
                <img src={dog.image} alt={dog.name} />
                <p>{dog.description}</p>
                <button>Adopt</button>
            </main>
            <Footer />
        </div>
    );
};

export default DogProfile;