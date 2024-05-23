import React, { useState } from 'react';
import './ProgramSelection.css';
import gxk from '../img/gxk.jpg';
import kfp from '../img/kfp.jpg';
import dune from '../img/dune.jpg';
import gbf from '../img/gbf.jpg';

const Programs = () => {
    const [search, setSearch] = useState('');
    const [selectedDay, setSelectedDay] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);

    const cities = [
        'Sofia',
        'Plovdiv',
        'Varna',
        'Burgas',
        'Ruse',
        'Stara Zagora',
        'Pleven',
        'Sliven',
        'Dobrich',
        'Shumen'
    ];

    const movies = [
        {
            image: '../img/gxk.jpg',
            title: 'Godzilla x King Kong',
            description: 'Action, Fantasy, Sci-Fi',
            hours: ['10:00', '13:00', '16:00', '19:00', '22:00']
        },
        {
            image: '../img/kfp.jpg',
            title: 'Kunf Fu Panda 2',
            description: 'Action, Fantasy, Comedy',
            hours: ['11:00', '14:00', '17:00', '20:00', '23:00']
        },
        {
            image: '../img/dune.jpg',
            title: 'Dune',
            description: 'Action, Fantasy, Comedy',
            hours: ['11:00', '14:00', '17:00', '20:00', '23:00']
        },
        {
            image: '../img/gbf.jpg',
            title: 'GhostBusters: Frozen Empire',
            description: 'Action, Fantasy, Comedy',
            hours: ['11:00', '14:00', '17:00', '20:00', '23:00']
        },

    ];

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const images = { 'gxk.jpg': gxk, 'kfp.jpg': kfp, "dune.jpg" : dune, "gbf.jpg" : gbf};

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
        if (event.target.value === '') {
            setShowDropdown(false);
        } else {
            setShowDropdown(true);
        }
    };

    const handleCityClick = (city) => {
        setSearch(city);
        setShowDropdown(false);
    };

    const handleDayClick = (day) => {
        setSelectedDay(day);
    };

    const filteredCities = cities.filter(city =>
        city.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="programs-container">
            <input
                type="text"
                placeholder="Search for a city..."
                value={search}
                onChange={handleSearchChange}
            />
            {showDropdown && filteredCities.length > 0 && (
                <ul className="city-list">
                    {filteredCities.map((city, index) => (
                        <li key={index} onClick={() => handleCityClick(city)}>
                            {city}
                        </li>
                    ))}
                </ul>
            )}
            <div className="day-buttons">
                {days.map((day, index) => (
                    <button key={index} onClick={() => handleDayClick(day)} className={selectedDay === day ? 'selected' : ''}>
                        {day}
                    </button>
                ))}
            </div>
            {movies.map((movie, index) => {
                const imgSrc = images[movie.image.split('/').pop()];
                return (
                    <div key={index} className="program-container">
                        <img className="program-image" src={imgSrc} alt={movie.title} />
                        <div className="program-details">
                            <h2 className="program-title">{movie.title}</h2>
                            <p className="program-description">{movie.description}</p>
                            <div className="program-hours">
                                {movie.hours.map((hour, i) =>
                                    <a key={i} className="program-hour" href="program/reservation">{hour}</a>
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Programs;