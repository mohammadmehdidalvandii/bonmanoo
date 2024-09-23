"use client"
import React from 'react'
import style from './BlogSuggest.module.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import ArticleCart from '@/components/modules/ArticleCart/ArticleCart';

function BlogSuggest() {
  return (
    <section className={style.blogSuggest}>
        <div className="containers">
            <div className="row">
                <div className="col-12">
                    <h5 className={style.blogSuggest_title}>پیشنهاد سردبیر</h5>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-12">
                    <div className={style.blogSuggest_slider}>
                    <Swiper
                 navigation={true}
                 modules={[Navigation]}
                 breakpoints={{
                    270: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    380: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    540: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                  }}
                 className="mySwiper"
                 >
                         <SwiperSlide>
                            <ArticleCart/>
                         </SwiperSlide>
                         <SwiperSlide>
                            <ArticleCart/>
                         </SwiperSlide>
                         <SwiperSlide>
                            <ArticleCart/>
                         </SwiperSlide>
                         <SwiperSlide>
                            <ArticleCart/>
                         </SwiperSlide>
                         <SwiperSlide>
                            <ArticleCart/>
                         </SwiperSlide>
                </Swiper>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BlogSuggest