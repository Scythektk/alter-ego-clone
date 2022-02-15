import sample from './assets/sample.mp4';
import houzlook from './assets/houzlook.jpg';
import medhatAyad from './assets/medhatAyad.jpg';
import valeriaBoltneva from './assets/valeriaBoltneva.jpg';

function App() {
    var videoContainer = document.querySelector('.video-container');

    function fadeOutOnScroll(element) {
        var heading = document.querySelector('.heading');

        if (!element) {
            console.log('not working');
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
        fadeOutOnScroll(videoContainer);
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
            <div className="quote-container">
                <div className="positioner">
                    <p className="quote">
                        "So sweet honey that, finally, he is bitter. The excess
                        taste kills the taste." Shakespeare.
                    </p>
                    <p className="quote">
                        These words by the bard have passed down the centuries
                        and found a different, deeper meaning in our days.
                    </p>
                    <p className="quote">
                        Working professionally in the field of private
                        architecture, creating 'volume' beauty, we know exactly
                        when to stop.
                    </p>
                    <div className="find-flex-container">
                        <div className="find-out">FIND OUT MORE</div>
                        <div className="line" id="find-line"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
