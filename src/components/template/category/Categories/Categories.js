"use client"
import React from 'react';
import style from './Categories.module.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import ArticleCart from '@/components/modules/ArticleCart/ArticleCart';

function Categories() {
  return (
    <section className={style.categories}>
        <div className="containers">
            <div className="row">
                <div className="col-12">
                    <div className={style.categories_slider_btn}>
                    <Swiper
                 navigation={true}
                 modules={[Navigation]}
                 breakpoints={{
                    270: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    380: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    540: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    640: {
                      slidesPerView: 3,
                      spaceBetween: 10,
                    },
                    768: {
                      slidesPerView: 4,
                      spaceBetween: 10,
                    },
                    1024: {
                      slidesPerView: 5,
                      spaceBetween: 10,
                    },
                  }}
                 className="mySwiper"
                 >
                         <SwiperSlide>
                             <button className={style.categories_btn}>دانشنامه</button>
                         </SwiperSlide>
                         <SwiperSlide>
                             <button className={style.categories_btn}>دانشنامه</button>
                         </SwiperSlide>
                         <SwiperSlide>
                             <button className={style.categories_btn}>دانشنامه</button>
                         </SwiperSlide>
                         <SwiperSlide>
                             <button className={style.categories_btn}>دانشنامه</button>
                         </SwiperSlide>
                         <SwiperSlide>
                             <button className={style.categories_btn}>دانشنامه</button>
                         </SwiperSlide>
                         <SwiperSlide>
                             <button className={style.categories_btn}>دانشنامه</button>
                         </SwiperSlide>
                         <SwiperSlide>
                             <button className={style.categories_btn}>دانشنامه</button>
                         </SwiperSlide>
                         <SwiperSlide>
                             <button className={style.categories_btn}>دانشنامه</button>
                         </SwiperSlide>
                         <SwiperSlide>
                             <button className={style.categories_btn}>دانشنامه</button>
                         </SwiperSlide>
                         <SwiperSlide>
                             <button className={style.categories_btn}>دانشنامه</button>
                         </SwiperSlide>
                         <SwiperSlide>
                             <button className={style.categories_btn}>دانشنامه</button>
                         </SwiperSlide>
                         <SwiperSlide>
                             <button className={style.categories_btn}>دانشنامه</button>
                         </SwiperSlide>
                </Swiper>
                       
                    </div>
                </div>
            </div>
            <diw className="row mt-5 row-gap-4">
                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                    <ArticleCart/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                    <ArticleCart/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                    <ArticleCart/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                    <ArticleCart/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                    <ArticleCart/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                    <ArticleCart/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                    <ArticleCart/>
                </div>
            </diw>
        </div>
    </section>
  )
}

export default Categories