import aeroplane from '../assets/aeroplane.jpg';
import flowers from '../assets/flowers.jpg';
import hauntedHouse from '../assets/hauntedHouse.jpg';
import matrix from '../assets/matrix.jpg';
import newYork from '../assets/newYork.jpg';
import sedGirl from '../assets/sedGirl.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Scrollbar, Mousewheel } from 'swiper';

SwiperCore.use([Navigation, Mousewheel, Scrollbar]);

const ScrollGallery = () => {
    return (
        <Swiper
            modules={[Navigation, Scrollbar, Mousewheel]}
            className="swiper dark-swiper"
            spaceBetween={10}
            slidesPerView={3}
            freeMode="true"
            navigation
            scrollbar={{ el: '.swiper-scrollbar', draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide className="swiper-slide">
                <img src={aeroplane} alt="aeroplane" id="aeroplane" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <img src={flowers} alt="flowers" id="flowers" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <img src={hauntedHouse} alt="hauntedHouse" id="hauntedHouse" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <img src={matrix} alt="matrix" id="matrix" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <img src={newYork} alt="newYork" id="newYork" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <img src={sedGirl} alt="sedGirl" id="sedGirl" />
            </SwiperSlide>
        </Swiper>
    );
};

export default ScrollGallery;
