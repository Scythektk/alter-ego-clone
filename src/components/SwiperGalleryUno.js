import vecislavasPopaUno from '../assets/vecislavasPopaUno.jpg';
import vecislavasPopaDos from '../assets/vecislavasPopaDos.jpg';
import vecislavasPopaTres from '../assets/vecislavasPopaTres.jpg';
import victoriaBorodinova from '../assets/victoriaborodinova.jpg';
import alexQian from '../assets/alexqian.jpg';
import alexStaudinger from '../assets/alexstaudinger.jpg';
import chaitGoli from '../assets/chaitgoli.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Scrollbar } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';

SwiperCore.use([Navigation, Scrollbar]);

const SwiperGallery = () => {
    return (
        <Swiper
            modules={[Navigation, Scrollbar]}
            className="swiper"
            spaceBetween={10}
            slidesPerView={2}
            navigation
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide className="swiper-slide">
                <img src={vecislavasPopaUno} alt="Living Room" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <img src={vecislavasPopaDos} alt="Kitchen and Living Room" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <img src={vecislavasPopaTres} alt="TV" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <img src={victoriaBorodinova} alt="Sofa and Table" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <img src={alexQian} alt="Fireplace" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <img src={alexStaudinger} alt="Lake House" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <img src={chaitGoli} alt="Downtown House" />
            </SwiperSlide>
        </Swiper>
    );
};

export default SwiperGallery;
