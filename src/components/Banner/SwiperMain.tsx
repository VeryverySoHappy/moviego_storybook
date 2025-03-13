'use client';

import React, {useState} from 'react';
import styles from './SwiperMain.module.scss';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const SwiperMain = () => {
    return (
        <div className={styles.mainslide}>
            <Swiper
                modules={[EffectCoverflow, Pagination]}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                pagination={{ clickable: true }}
                loop
            >
                <SwiperSlide><img src="main_slide01.jpg" /></SwiperSlide>
                <SwiperSlide><img src="main_slide02.jpg" /></SwiperSlide>
                <SwiperSlide><img src="main_slide03.jpg" /></SwiperSlide>
                <SwiperSlide><img src="main_slide04.jpg" /></SwiperSlide>
                <SwiperSlide><img src="main_slide05.jpg" /></SwiperSlide>
            </Swiper>
    
        </div>
    );
}

export default SwiperMain;