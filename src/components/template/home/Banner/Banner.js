"use client"
import React from 'react';
import style from './Banner.module.css';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation , Autoplay } from 'swiper/modules';

function Banner() {
  return (
   <section className={style.banner}>
       <Swiper
        navigation={true}
         modules={[Navigation , Autoplay]}
           autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        className='mySwiper'
        >
        <SwiperSlide>
        <Link href="#" className={style.banner_link}>
            <img src="/assets/images/banner-1.webp" itemType='webp' alt='banner ' className={style.banner_img}/>
        </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link href="#" className={style.banner_link}>
            <img src="/assets/images/banner-2.webp" itemType='webp' alt='banner ' className={style.banner_img}/>
        </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link href="#" className={style.banner_link}>
            <img src="/assets/images/banner-3.webp" itemType='webp' alt='banner ' className={style.banner_img}/>
        </Link>
        </SwiperSlide>
      </Swiper>
      
   </section>
  )
}

export default Banner