"use client";
import React from "react";
import style from "./CoValue.module.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import 'swiper/css/navigation'

// import required modules
import { EffectCoverflow ,Navigation } from "swiper/modules";

function CoValue() {
  return (
    <section className={style.coValue}>
      <div className="containers">
        <div className="row">
          <div className="col-12">
            <h4 className={style.coValue_title}>ارزش های سازمانی بن مانو</h4>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              spaceBetween={50}
              slidesPerView={3}
              coverflowEffect={{
                rotate: 50,
                stretch: 3,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              navigation={true}
              modules={[EffectCoverflow, Navigation]}
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
              className="mySwiper"
            >
              <SwiperSlide>
                <div className={style.coValue_cart}>
                  <img
                    src="/assets/images/value-1.svg"
                    alt="coValue"
                    className={style.coValue_cart_img}
                  />
                  <h6 className={style.coValue_cart_title}>
                    جلب رضایت ذی نفعان و تامین نیازهای آنان
                  </h6>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={style.coValue_cart}>
                  <img
                    src="/assets/images/value-2.svg"
                    alt="coValue"
                    className={style.coValue_cart_img}
                  />
                  <h6 className={style.coValue_cart_title}>
                 
                  تلاش در جهت افزایش بهره‌وری و کاهش قیمت تمام شده محصول	                
                  </h6>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={style.coValue_cart}>
                  <img
                    src="/assets/images/value-3.svg"
                    alt="coValue"
                    className={style.coValue_cart_img}
                  />
                  <h6 className={style.coValue_cart_title}>
                   افزایش سطح امینی و بهداشت محیط کار
                  </h6>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={style.coValue_cart}>
                  <img
                    src="/assets/images/value-4.svg"
                    alt="coValue"
                    className={style.coValue_cart_img}
                  />
                  <h6 className={style.coValue_cart_title}>
                    تلاش در جهت سلامت همکاران
                  </h6>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={style.coValue_cart}>
                  <img
                    src="/assets/images/value-5.svg"
                    alt="coValue"
                    className={style.coValue_cart_img}
                  />
                  <h6 className={style.coValue_cart_title}>
                    بهبود مستمر و اثربخش سیستم مدیریت یکپارچه
                  </h6>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoValue;
