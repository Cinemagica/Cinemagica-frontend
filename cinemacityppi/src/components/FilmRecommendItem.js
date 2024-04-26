
import './FileRecommendItem.css';
function FilmRecommendItem({film}) {
  return (
      <div className="film-item-rec">
          <img src={film.smallSrc} alt="film" />
      </div>
  )
}

export default FilmRecommendItem;