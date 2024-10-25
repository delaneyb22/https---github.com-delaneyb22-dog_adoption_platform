// src/components/DogCard.js
import React from 'react';
import './DogCard.css'; // Optional: Add your CSS file for styling

const DogCard = ({ dog }) => {
    return (
        <div className="dog-card">
            <img src={dog.image} alt={dog.name} />
            <h2>{dog.name}</h2>
            <p>{dog.description}</p>
            <button>Adopt</button>
        </div>
    );
};

export default DogCard;