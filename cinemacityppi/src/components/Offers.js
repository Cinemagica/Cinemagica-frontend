import React from 'react';
import './Offers.css';
import offersArray from '../data/offers_arr';
import familyPacket from '../img/family_packet.jpg';
import students from '../img/students.jpg';
import friends from '../img/friends.jpg';
import popcorn from '../img/popcorn.png';

const Offers = () => {
    const images = { 'family_packet.jpg': familyPacket, 'students.jpg': students, 'friends.jpg': friends, 'popcorn.png': popcorn };

    return (
        <div className="offers-container">
            {offersArray.map((offer, index) => {
                const imgSrc = images[offer.smallSrc.split('/').pop()];
                return (
                    <div key={index} className="offer-card">
                        <img src={imgSrc} alt={offer.title} />
                        <h2>{offer.title}</h2>
                        <p>{offer.description}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Offers;