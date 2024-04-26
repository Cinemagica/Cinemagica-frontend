// FilmGrid.js
import React from 'react';
import './FilmGrid.css';
import SlideImgLoader from './SlideImgLoader'; // Import SlideImgLoader

const FilmGrid = ({ films }) => {
    return (
        <div className="film-grid">
            {films.map((film) => (
                <div key={film.id} className="film-container">
                    <SlideImgLoader film={film} /> {/* Use SlideImgLoader to load film images */}
                </div>
            ))}
        </div>
    );
};

export default FilmGrid;