// FilmGrid.js
import React from 'react';
import './FilmGrid.css';
import SlideImgLoader from './SlideImgLoader';

const FilmGrid = ({ films }) => {
    return (
        <div className="film-grid">
            {films.map((film) => (
                <div key={film.id} className="film-container">
                    <SlideImgLoader film={film} /> {}
                </div>
            ))}
        </div>
    );
};

export default FilmGrid;