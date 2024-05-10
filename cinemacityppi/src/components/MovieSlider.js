import React, {useState} from 'react';
import Slider from "react-slick";
import "./MovieSlider.css";
import movieSlider from "../data/movies";


function MovieSlider() {
    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 8
    };

    const [films] = useState(movieSlider);
    return (
        <div className="movie-slider">
            <h2>Todays Selection</h2>
            <Slider {...settings}>
                {films && films.map((movie, index) => {
                    return (<div key={index}>
                        <img src={movie.smallSrc} alt={movie.title}/>
                    </div>);

                })}
            </Slider>

            <h2>Coming Soon</h2>
            <Slider {...settings}>
                {films && films.map((movie, index) => {
                    return (<div key={index}>
                        <img src={movie.smallSrc} alt={movie.title}/>
                    </div>);

                })}
            </Slider>

            <h2>Comedy</h2>
            <Slider {...settings}>
                {films && films.map((movie, index) => {
                    return (<div key={index}>
                        <img src={movie.smallSrc} alt={movie.title}/>
                    </div>);

                })}
            </Slider>

            <h2>Action</h2>
            <Slider {...settings}>
                {films && films.map((movie, index) => {
                    return (<div key={index}>
                        <img src={movie.smallSrc} alt={movie.title}/>
                    </div>);

                })}
            </Slider>

        </div>
    );
}

export default MovieSlider;