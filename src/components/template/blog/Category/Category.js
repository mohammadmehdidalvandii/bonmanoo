"use client"
import React from 'react';
import style from './Category.module.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';

function Category() {
  return (
    <section className={style.category}>
        <div className="containers">
            <div className="row">
                <div className="col-12">
                    <h5 className={style.category_title}>دسته بندی مطالب</h5>
                </div>
            </div>
            <div className="div row mt-5">
                <div className="col-12">
                    <div className={style.category_slider}>
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
                            <div className={style.category_item}>
                                <img src="/assets/images/category1.svg" alt="category item" className={style.category_item_img} />
                                <span className={style.category_item_text}>دانشنامه</span>
                            </div>
                         </SwiperSlide>
                         <SwiperSlide>
                            <div className={style.category_item}>
                                <img src="/assets/images/category1.svg" alt="category item" className={style.category_item_img} />
                                <span className={style.category_item_text}>دانشنامه</span>
                            </div>
                         </SwiperSlide>
                         <SwiperSlide>
                            <div className={style.category_item}>
                                <img src="/assets/images/category1.svg" alt="category item" className={style.category_item_img} />
                                <span className={style.category_item_text}>دانشنامه</span>
                            </div>
                         </SwiperSlide>
                         <SwiperSlide>
                            <div className={style.category_item}>
                                <img src="/assets/images/category1.svg" alt="category item" className={style.category_item_img} />
                                <span className={style.category_item_text}>دانشنامه</span>
                            </div>
                         </SwiperSlide>
                         <SwiperSlide>
                            <div className={style.category_item}>
                                <img src="/assets/images/category1.svg" alt="category item" className={style.category_item_img} />
                                <span className={style.category_item_text}>دانشنامه</span>
                            </div>
                         </SwiperSlide>
                         <SwiperSlide>
                            <div className={style.category_item}>
                                <img src="/assets/images/category1.svg" alt="category item" className={style.category_item_img} />
                                <span className={style.category_item_text}>دانشنامه</span>
                            </div>
                         </SwiperSlide>
                         <SwiperSlide>
                            <div className={style.category_item}>
                                <img src="/assets/images/category1.svg" alt="category item" className={style.category_item_img} />
                                <span className={style.category_item_text}>دانشنامه</span>
                            </div>
                         </SwiperSlide>
                         <SwiperSlide>
                            <div className={style.category_item}>
                                <img src="/assets/images/category1.svg" alt="category item" className={style.category_item_img} />
                                <span className={style.category_item_text}>دانشنامه</span>
                            </div>
                         </SwiperSlide>
                         <SwiperSlide>
                            <div className={style.category_item}>
                                <img src="/assets/images/category1.svg" alt="category item" className={style.category_item_img} />
                                <span className={style.category_item_text}>دانشنامه</span>
                            </div>
                         </SwiperSlide>
                         <SwiperSlide>
                            <div className={style.category_item}>
                                <img src="/assets/images/category1.svg" alt="category item" className={style.category_item_img} />
                                <span className={style.category_item_text}>دانشنامه</span>
                            </div>
                         </SwiperSlide>
                         <SwiperSlide>
                            <div className={style.category_item}>
                                <img src="/assets/images/category1.svg" alt="category item" className={style.category_item_img} />
                                <span className={style.category_item_text}>دانشنامه</span>
                            </div>
                         </SwiperSlide>
                </Swiper>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Category