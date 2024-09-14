"use client"
import React from 'react';
import style from './Magazine.module.css';
import ArticleCart from '@/components/modules/ArticleCart/ArticleCart';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';

function Magazine() {
  return (
    <section className={style.magazine}>
        <div className="containers">
            <div className="row">
                <div className="col-12">
                    <div className={style.magazine_title_buttons}>
                        <h4 className={style.magazine_title}>مجله بن مانو</h4>
                        <div className={style.magazine_buttons}>
                            <button className={style.magazine_btn}>آخرین مطالب بن مانو</button>
                            <button className={style.magazine_btn}>طرزتهیه نوشیدنی</button>
                            <button className={style.magazine_btn}>روش دم آوری قهوه</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12">
                <div className="col-12">
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
                      spaceBetween: 30,
                    },
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 30,
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

export default Magazine