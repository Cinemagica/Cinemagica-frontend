import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideImgLoader from "./SlideImgLoader";
import filmBase from "../data/films";

const FilmSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const [films, setfilms] = useState(filmBase);

    return (
        <div className="slider">
            <h2 className="header-slider">Our Selection</h2>
            <div className="slider-wrapper">
                <Slider {...settings}>
                    {films.map((film) => {
                        return <SlideImgLoader film={film} />;
                    })}
                </Slider>
            </div>
        </div>
    );
};

export default FilmSlider;