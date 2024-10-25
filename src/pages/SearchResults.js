// src/pages/SearchResults.js
import React from 'react';
import Header from '../components/Header';
import DogCard from '../components/DogCard';
import Footer from '../components/Footer';

const SearchResults = ({ results }) => {
    return (
        <div>
            <Header />
            <main>
                <h2>Search Results</h2>
                <div className="dog-list">
                    {results.length > 0 ? (
                        results.map((dog) => (
                            <DogCard key={dog.id} dog={dog} />
                        ))
                    ) : (
                        <p>No results found.</p>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default SearchResults;