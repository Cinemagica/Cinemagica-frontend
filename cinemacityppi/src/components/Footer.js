// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-columns">
                <div className="footer-column">
                    <h3>For Us</h3>
                    <ul>
                        <li><a href="/">CineMagica</a></li>
                        <li><a href="/tos">Terms of service</a></li>
                        <li><a href="/faq">Frequently Asked Questions</a></li>
                        <li><a href="/support">Support us</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Find Us</h3>
                    <ul>
                        <li><a href="/contacts">Contacts</a></li>
                        <li><a href="/va">Virtual Assistant</a></li>
                        <li><a href="/email">Email</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Follow Us</h3>
                    <ul>
                        <li><a href="https://www.facebook.com">Facebook</a></li>
                        <li><a href="https://www.instagram.com">Instagram</a></li>
                        <li><a href="https://www.youtube.com">YouTube</a></li>
                    </ul>
                </div>
            </div>
            <div className="rights-reserved">
                <p> All Rights Reserved. CineMagica 2024 &copy;</p>
            </div>
        </footer>
    );
};

export default Footer;