// src/context/DogContext.js
import React, { createContext, useContext, useState } from 'react';

const DogContext = createContext();

export const DogProvider = ({ children }) => {
    const [dogs, setDogs] = useState([]);

    const addDog = (dog) => {
        setDogs((prevDogs) => [...prevDogs, dog]);
    };

    const removeDog = (dogId) => {
        setDogs((prevDogs) => prevDogs.filter(dog => dog.id !== dogId));
    };

    return (
        <DogContext.Provider value={{ dogs, addDog, removeDog }}>
            {children}
        </DogContext.Provider>
    );
};

export const useDogs = () => {
    return useContext(DogContext);
};