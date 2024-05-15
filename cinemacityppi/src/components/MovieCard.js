import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card">
            {/*<img src={movie.image} alt={movie.name} />*/}
            <h2>{movie.name}</h2>
            <p>{movie.genre}</p>
            <p>{movie.times}</p>
        </div>
    );
};

export default MovieCard;