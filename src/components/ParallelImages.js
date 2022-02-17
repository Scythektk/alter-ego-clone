import houzlook from '../assets/houzlook.jpg';
import medhatAyad from '../assets/medhatAyad.jpg';
import valeriaBoltneva from '../assets/valeriaBoltneva.jpg';

const ParallelImages = () => {
    return (
        <div className="img-flex-container">
            <div>
                <img
                    src={houzlook}
                    alt="Penthouses and Apartments"
                    className="flexxed-img"
                    id="img1"
                ></img>
                <div className="img-text">Penthouses and Apartments</div>
            </div>
            <div>
                <img
                    src={medhatAyad}
                    alt="Mansions and Estates"
                    className="flexxed-img"
                    id="img2"
                ></img>
                <div className="img-text">Mansions and Estates</div>
            </div>
            <div>
                <img
                    src={valeriaBoltneva}
                    alt="Penthouses and Apartments"
                    className="flexxed-img"
                    id="img3"
                ></img>
                <div className="img-text">Penthouses and Apartments</div>
            </div>
        </div>
    );
};

export default ParallelImages;
