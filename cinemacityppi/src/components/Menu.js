import React from 'react';
import './Menu.css';
import menuArray from '../data/menu_arr';
import popcorn from '../img/popcorn.png';
import soda from '../img/soda.jpg';
import nachos from '../img/nachos.jpg';

const Menu = () => {
    const images = { 'popcorn.png': popcorn, 'soda.jpg': soda, 'nachos.jpg': nachos};

    return (
        <div className="menu-container">
            {menuArray.map((item, index) => {
                const imgSrc = images[item.smallSrc.split('/').pop()];
                return (
                    <div key={index} className="menu-item">
                        <img src={imgSrc} alt={item.title} />
                        <h2>{item.title}</h2>
                        <p>
                            {item.description.map((part, i) =>
                                <React.Fragment key={i}>
                                    {part}
                                    {i < item.description.length - 1 && <br />}
                                </React.Fragment>
                            )}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default Menu;