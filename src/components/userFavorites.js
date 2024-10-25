// src/components/UserFavorites.js
import React from 'react';
import './User Favorites.css'; // Optional: Add your CSS file for styling

const UserFavorites = ({ favorites }) => {
    return (
        <div className="user-favorites">
            <h2>Your Favorite Dogs</h2>
            {favorites.length > 0 ? (
                <ul>
                    {favorites.map((dog) => (
                        <li key={dog.id}>
                            <h3>{dog.name}</h3>
                            <img src={dog.image} alt={dog.name} />
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No favorites added yet.</p>
            )}
        </div>
    );
};

export default UserFavorites;