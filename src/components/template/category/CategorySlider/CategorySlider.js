"use client"
import React, { useRef } from 'react';
import style from './CategorySlider.module.css';
import ArticleCart from '@/components/modules/ArticleCart/ArticleCart';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function CategorySlider() {
    const swiperRef = useRef(null);
  return (
    <section className={style.categorySlider}>
        <div className="containers">
            <div className="row">
                <div className="col-12">
                    <h4 className={style.categorySlider_title}>مقاله های مربوطه</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                <Swiper
                                      ref={swiperRef}
                                    slidesPerView={3}
                                    spaceBetween={20}
                                 navigation={{
                                    nextEl: `.navButtonNext`,
                                    prevEl: `.navButtonPrev`,
                                 }}
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
                                      slidesPerView: 2,
                                      spaceBetween: 20,
                                    },
                                    1024: {
                                      slidesPerView: 3,
                                      spaceBetween: 20,
                                    },
                                  }}
                                  className="mySwiper">
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
            <div className="row mt-4">
                <div className="col-12">
                    <div className={style.categorySlider_buttons}>
                    <button className="navButtonNext"
                                             onClick={() =>
                                                {
                                                    if (swiperRef.current) {
                                                      swiperRef.current.swiper.slideNext();
                                                    }
                                                  }
                                             }
                                        >
                                            <IoIosArrowForward/> 
                                        </button>
                                        <button className="navButtonPrev"
                                             onClick={() => {
                                                if (swiperRef.current) {
                                                  swiperRef.current.swiper.slidePrev();
                                                }
                                              }}
                                        >
                                            <IoIosArrowBack/>
                                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CategorySlider