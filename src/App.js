import sample from './assets/sample.mp4';

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
                    <div id="alter">ALTER</div>
                    <div id="ego">EGO</div>
                    <div id="undertitle">PROJECT GROUP</div>
                </div>
                <div className="languages">
                    <div className="lang-child">ENG</div>
                    <div className="lang-child">RU</div>
                </div>
            </div>
        </div>
    );
}

export default App;
