"use client"
import React from 'react';
import style from './Store.module.css';
import ProductCart from '@/components/modules/ProductCart/ProductCart';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import Link from 'next/link';
function Store() {
  return (
    <section className={style.store}>
        <div className="containers">
            <div className="row">
                <div className="col-12">
                    <div className={style.store_title_buttons}>
                        <h4 className={style.store_title}>فروشگاه بن مانو</h4>
                    </div>
                    <div className={style.store_buttons}>
                        {/* active style btn < store_btn_active >  */}
                        <button className={style.store_btn}>پروفروش ترین محصولات</button>
                        <button className={style.store_btn}>محصولات جدید</button>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
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
                            <ProductCart/>
                         </SwiperSlide>
                         <SwiperSlide>
                            <ProductCart/>
                         </SwiperSlide>
                         <SwiperSlide>
                            <ProductCart/>
                         </SwiperSlide>
                         <SwiperSlide>
                            <ProductCart/>
                         </SwiperSlide>
                         <SwiperSlide>
                            <ProductCart/>
                         </SwiperSlide>
                         <SwiperSlide>
                            <ProductCart/>
                         </SwiperSlide>
                         <SwiperSlide>
                            <ProductCart/>
                         </SwiperSlide>
                         <SwiperSlide>
                            <ProductCart/>
                         </SwiperSlide>
                         <SwiperSlide>
                            <ProductCart/>
                         </SwiperSlide>
                </Swiper>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12">
                    <Link href="#" className={`${style.store_showMore} ${'showMore'}`}>مشاهده همه محصولات</Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Store