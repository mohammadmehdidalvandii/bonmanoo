"use client"
import React, { useState } from 'react';
import style from './Gallery.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

function Gallery() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <section className={style.gallery}>
        <div className={style.gallery_wrapper}>
        <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/assets/images/p1.webp" className={style.gallery_img}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/images/p1-1.webp" className={style.gallery_img}/>
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwipers"
      >
        <SwiperSlide>
          <img src="/assets/images/p1.webp" className={style.gallery_img}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/images/p1-1.webp" className={style.gallery_img}/>
        </SwiperSlide>
      </Swiper>
        </div>
    </section>
  )
}

export default Gallery