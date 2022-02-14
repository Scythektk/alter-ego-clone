import sample from './assets/sample.mp4';
import houzlook from './assets/houzlook.jpg';
import medhatAyad from './assets/medhatAyad.jpg';
import valeriaBoltneva from './assets/valeriaBoltneva.jpg';

function App() {
    return (
        <div className="App">
            <div className="video-container">
                <video className="video-tag" autoPlay loop muted>
                    <source src={sample} type="video/mp4" />
                </video>
                <button
                    className="burger"
                    onclick="this.classList.toggle('active');"
                ></button>
                <div className="heading">
                    <div className="city" id="milan">
                        <div className="line" id="milan-line"></div>
                        MILAN
                    </div>
                    <div>
                        <div id="alter">ALTER</div>
                        <div id="ego">EGO</div>
                        <div id="undertitle">PROJECT GROUP</div>
                    </div>
                    <div className="city" id="moscow">
                        MOSCOW
                        <div className="line" id="moscow-line"></div>
                    </div>
                </div>
                <div className="languages">
                    <div className="lang-child">ENG</div>
                    <div className="lang-child">RU</div>
                </div>
            </div>
            <div className="img-flex-container">
                <div>
                    <img
                        src={houzlook}
                        alt="Penthouses and Apartments"
                        className="flexxed-img"
                        id="img1"
                    ></img>
                </div>
                <div>
                    <img
                        src={medhatAyad}
                        alt="Mansions and Estates"
                        className="flexxed-img"
                        id="img2"
                    ></img>
                </div>
                <div>
                    <img
                        src={valeriaBoltneva}
                        alt="Penthouses and Apartments"
                        className="flexxed-img"
                        id="img3"
                    ></img>
                </div>
            </div>
        </div>
    );
}

export default App;
