"use client";
import React from "react";
import style from "./ProductSuggest.module.css";
import ProductCart from "@/components/modules/ProductCart/ProductCart";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';


function ProductSuggest() {
  return (
    <section className={style.productSuggest}>
      <div className="containers">
        <div className="row">
          <div className="col-12">
            <h4 className={style.productSuggest_title}>محصولات پیشنهادی</h4>
          </div>
        </div>
        <>
        <div className={style.productSuggest_wrapper}>
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
                </Swiper>
                </div>
        <div className={style.productSuggest_items}>
          <div className="row mt-5 row-gap-4">
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <ProductCart />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <ProductCart />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <ProductCart />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <ProductCart />
            </div>
          </div>
        </div>
        </>
      </div>
    </section>
  );
}

export default ProductSuggest;
