import React, {useState} from "react";
import FilmRecommendItem from "./FilmRecommendItem";
import './FileRecommendItem.css';
import filmBase from "../data/films";

function FilmRecommender(){
    const [films] = useState(filmBase);
    return (
        <div className="rec-film-holder">
            {films.map((film) => { return <FilmRecommendItem film={film} />; })}
        </div>
    );
}

export default FilmRecommender;