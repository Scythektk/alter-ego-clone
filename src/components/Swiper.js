import Swiper, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import vecislavasPopa1 from '../assets/vecislavasPopa1.jpg';
import vecislavasPopa2 from '../assets/vecislavasPopa2.jpg';
import vecislavasPopa3 from '../assets/vecislavasPopa3.jpg';
import victoriaBorodinova from '../assets/victoriaBorodinova.jpg';
import alexQian from '../assets/alexQian.jpg';
import alexStaudinger from '../assets/alexStaudinger.jpg';
import chaitGoli from '../assets/chaitGoli.jpg';

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

    return (
        <div className="swiper">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <img src={vecislavasPopa1} alt="Living Room" />
                </div>
                <div className="swiper-slide">
                    <img src={vecislavasPopa2} alt="Kitchen and Living Room" />
                </div>
                <div className="swiper-slide">
                    <img src={vecislavasPopa3} alt="TV" />
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
