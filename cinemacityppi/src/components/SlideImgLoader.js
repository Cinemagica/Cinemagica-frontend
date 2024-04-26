import './SlideImgLoader.css';
const SlideImgLoader = ({ film }) => {
    return (
        <div className="slide-img">
            <img src={film.src} className="slide-img" alt="film" />
            <div className="overlay">
                <img className="small-img" src={film.smallSrc} alt="small" />
                <div className="text-content">
                    <p>{film.text}</p>
                    <a href="#" className="more-info">More Info</a>
                </div>
            </div>
        </div>
    );
};

export default SlideImgLoader;