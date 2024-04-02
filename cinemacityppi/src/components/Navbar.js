import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo"><a href="">Cine<span>MAGICA</span>.</a></div>
            <ul>
                <li><a href="#movies">Movies</a></li>
                <li><a href="#program">Program</a></li>
                <li><a href="#offers">Offers</a></li>
            </ul>
            <input type="text" className="search-bar" placeholder="Search..." />
            <a href="#" className="signup-button"> Sign Up</a>
            <a href="#" className="login-button"> Log In</a>


        </div>
    );
}

export default Navbar;