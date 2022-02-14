import sample from './assets/sample.mp4';
import houzlook from './assets/houzlook.jpg';
import medhatAyad from './assets/medhatAyad.jpg';
import valeriaBoltneva from './assets/valeriaBoltneva.jpg';

function App() {
    var vidContainer = document.querySelector('.video-container');

    function fadeOutOnScroll(element) {
        var heading = document.querySelector('.heading');

        if (!element) {
            return;
        }

        var scrollTop = document.documentElement.scrollTop;

        var opacity = 0.8;

        opacity = 0.8 - scrollTop / 275;

        if (opacity >= 0) {
            heading.style.opacity = opacity;
        }
        if (opacity < 0) {
            heading.style.opacity = 0;
        }
    }

    function scrollHandler() {
        fadeOutOnScroll(vidContainer);
    }

    window.addEventListener('scroll', scrollHandler);

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
            <div>hello </div>
        </div>
    );
}

export default App;
