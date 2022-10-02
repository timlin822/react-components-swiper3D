import {Navigation,Pagination,Autoplay,EffectCoverflow} from 'swiper';
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import {FaChevronLeft,FaChevronRight} from 'react-icons/fa';

import SLIDERS_DATA from 'data/SlidersData.js';

import './Slider.css';

const Slider=()=>{
    return (
        <Swiper
            modules={[Navigation,Pagination,Autoplay,EffectCoverflow]}
            loop
            autoplay={{delay: 3000,disableOnInteraction: false}}
            speed={1000}
            pagination={{clickable: true}}
            navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next"
            }}
            effect="coverflow"
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
                slideShadows: false
            }}
            slidesPerView={3}
            centeredSlides
        >
            {SLIDERS_DATA.map(slider=>(
                <SwiperSlide key={slider.id}>
                    <img src={slider.url} alt="slider-image" />
                </SwiperSlide>
            ))}
            <div className="swiper-button-prev"><FaChevronLeft /></div>
            <div className="swiper-button-next"><FaChevronRight /></div>
        </Swiper>
    );
}

export default Slider;