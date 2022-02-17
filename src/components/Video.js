import sample from '../assets/sample.mp4';

const Video = () => {
    return (
        <div className="video-container">
            <video className="video-tag" autoPlay loop muted>
                <source src={sample} type="video/mp4" />
            </video>
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
    );
};

export default Video;
