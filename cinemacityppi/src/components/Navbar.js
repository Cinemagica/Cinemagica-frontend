import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <ul className="left-menu">
                <li><a href="movies">Movies</a></li>
                <li><a href="program">Program</a></li>
            </ul>
            <div className="logo"><a href="">Cine<span>MAGICA</span>.</a></div>
            <ul className="right-menu">
                <li><a href="offers">Offers</a></li>
                <li><a href="menu">Menu</a></li>
            </ul>
        </div>
    );
}

export default Navbar;