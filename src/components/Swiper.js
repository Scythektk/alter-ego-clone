import vecislavasPopaUno from '../assets/vecislavasPopaUno.jpg';
import vecislavasPopaDos from '../assets/vecislavasPopaDos.jpg';
import vecislavasPopaTres from '../assets/vecislavasPopaTres.jpg';
import victoriaBorodinova from '../assets/victoriaborodinova.jpg';
import alexQian from '../assets/alexqian.jpg';
import alexStaudinger from '../assets/alexstaudinger.jpg';
import chaitGoli from '../assets/chaitgoli.jpg';
import Swiper, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const SwiperGallery = () => {
    const swiper = new Swiper('.swiper', {
        modules: [Navigation],

        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 2,
                spaceBetween: 5,
            },

            // when window width is >= 640px
            640: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    console.log(swiper.activeIndex);
    return (
        <div className="swiper">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <img src={vecislavasPopaUno} alt="Living Room" />
                </div>
                <div className="swiper-slide">
                    <img
                        src={vecislavasPopaDos}
                        alt="Kitchen and Living Room"
                    />
                </div>
                <div className="swiper-slide">
                    <img src={vecislavasPopaTres} alt="TV" />
                </div>
                <div className="swiper-slide">
                    <img src={victoriaBorodinova} alt="Sofa and Table" />
                </div>
                <div className="swiper-slide">
                    <img src={alexQian} alt="Fireplace" />
                </div>
                <div className="swiper-slide">
                    <img src={alexStaudinger} alt="Lake House" />
                </div>
                <div className="swiper-slide">
                    <img src={chaitGoli} alt="Downtown House" />
                </div>
            </div>

            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
        </div>
    );
};

export default SwiperGallery;
