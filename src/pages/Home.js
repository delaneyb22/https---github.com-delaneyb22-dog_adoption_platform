// src/pages/Home.js
import React from 'react';
import Header from '../components/Header';
import DogCard from '../components/DogCard';
import Footer from '../components/Footer';
import { dogsData } from '../utils/constants'; // Example data source

const Home = () => {
    return (
        <div>
            <Header />
            <main>
                <h2>Available Dogs for Adoption</h2>
                <div className="dog-list">
                    {dogsData.map((dog) => (
                        <DogCard key={dog.id} dog={dog} />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;