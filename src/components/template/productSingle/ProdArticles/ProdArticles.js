"use client";
import React from 'react';
import style from './ProdArticles.module.css';
import ArticleCart from '@/components/modules/ArticleCart/ArticleCart';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';

function ProdArticles() {
  return (
    <section className={style.prodArticles}>
        <div className="containers">
        <div className="row">
            <div className="col-12">
                    <h4 className={style.prodArticles_title}>مقاله پیشنهادی</h4>
            </div>
        </div>
            <div className={style.prodArticles_slider}>
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
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 4,
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: 5,
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
                </Swiper>
            </div>
            <div className={style.prodArticles_wrapper}>
                <div className="row mt-5">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <ArticleCart/>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <ArticleCart/>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <ArticleCart/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProdArticles