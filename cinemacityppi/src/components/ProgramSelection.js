import React, { useState } from 'react';
import './ProgramSelection.css';

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

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

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
        </div>
    );
};

export default Programs;