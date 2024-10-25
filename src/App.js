// src/App.js
import React from 'react';
import { UserProvider } from './context/UserContext'; // Adjust the path as necessary
import DogComponent from './components/DogComponent'; // Adjust the path as necessary

const App = () => {
    return (
        <User Provider>
            <div style={{ textAlign: 'center', padding: '20px' }}>
                <h1>Welcome to the Dog App</h1>
                <DogComponent />
            </div>
        </User Provider>
    );
};

export default App;