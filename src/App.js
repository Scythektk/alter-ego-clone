import Video from './components/Video.js';
import ParallelImages from './components/ParallelImages.js';
import Quote from './components/Quote.js';
import SwiperGallery from './components/Swiper.js';

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
            <div className="burger-bg"></div>
            <button
                className="burger"
                onclick="this.classList.toggle('active');"
            ></button>
            <div className="contact-container">
                <div className="dropup">
                    <a href="#call" className="icon" id="phone">
                        CALL US
                    </a>
                    <a href="#whatsapp" className="icon" id="whatsapp">
                        WHATSAPP
                    </a>
                    <a href="#telegram" className="icon" id="telegram">
                        TELEGRAM
                    </a>
                    <a href="#email" className="icon" id="email">
                        EMAIL US
                    </a>
                </div>
                <div className="contact-btn"></div>
            </div>
            <Video></Video>
            <ParallelImages></ParallelImages>
            <Quote></Quote>
            <SwiperGallery></SwiperGallery>
        </div>
    );
}

export default App;
