import Contact from './components/Contact.js';
import Video from './components/Video.js';
import ParallelImages from './components/ParallelImages.js';
import Quote from './components/Quote.js';
import SwiperGallery from './components/SwiperGalleryUno.js';
import QuoteDos from './components/QuoteDos.js';
import ScrollGallery from './components/SwiperGalleryScroll.js';
import Dropdown from './components/Dropdown.js';
// import ParallaxApp from './components/ScrollParallax.js';

function App() {
    window.onload = () => {
        document
            .querySelector('.burger-bg')
            .addEventListener('mouseover', function () {
                document.querySelector('.dropdown-content').style.display =
                    'block';
            });
        document.querySelector('.close').addEventListener('click', function () {
            document.querySelector('.dropdown-content').style.display = 'none';
        });
    };

    var heading = document.querySelector('.heading');

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
        fadeOutOnScroll(heading);
    }

    window.addEventListener('scroll', scrollHandler);

    return (
        <div className="App">
            <div className="burger-bg"></div>
            <button
                className="burger"
                onclick="this.classList.toggle('active');"
            ></button>
            <Contact></Contact>
            <Dropdown></Dropdown>
            <Video></Video>
            <ParallelImages></ParallelImages>
            <Quote></Quote>
            <SwiperGallery></SwiperGallery>
            <QuoteDos></QuoteDos>
            <ScrollGallery></ScrollGallery>
            {/* <ParallaxApp></ParallaxApp> */}
        </div>
    );
}

export default App;
