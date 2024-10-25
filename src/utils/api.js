// src/utils/api.js

const API_URL = 'https://api.example.com'; 

export const fetchDogs = async () => {
    const response = await fetch(`${API_URL}/dogs`);
    if (!response.ok) {
        throw new Error('Failed to fetch dogs');
    }
    return await response.json();
};

export const fetchDogById = async (id) => {
    const response = await fetch(`${API_URL}/dogs/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch dog');
    }
    return await response.json();
};