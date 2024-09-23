"use client"
import React from 'react';
import style from './BlogHeader.module.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation  , Autoplay} from 'swiper/modules';

function BlogHeader() {
  return (
    <section className={style.blogHeader}>
        <div className="containers">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className={style.blogHeader_content}>
                        <h6 className={style.blogHeader_title}>مجله بن‌مانو</h6>
                        <p className={style.blogHeader_description}>در مجله بن‌مانو ما در تلاشیم که بتوانیم مخاطبان را با همه امور مرتبط به قهوه مانند آشنایی با انواع قهوه و پیدا کردن بهترین قهوه متناسب با ذائقه‌شان‌ آشنا کنیم تا دغدغه کم‌تری داشته باشند و انرژی بیش‌تر را برای یادگیری تکنیک‌های دم‌آوری قهوه بگذارند. کارشناسان قهوه ما راهنمای شما در این سفر هستند تا بتوانید لذت خوردن قهوه‌های متفاوت و خوشمزه را داشته باشید</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className={style.blogHeader_slider}>
                    <Swiper
                 navigation={true}
                autoplay={{
                    delay:3000
                }}
                 modules={[Navigation , Autoplay]}
                 className="mySwiper"
                 >
                         <SwiperSlide>
                            <img src="/assets/images/blog-1.webp" alt="blog img" className={style.blogHeader_img} />
                         </SwiperSlide>
                         <SwiperSlide>
                            <img src="/assets/images/blog-2.webp" alt="blog img" className={style.blogHeader_img} />
                         </SwiperSlide>
                </Swiper>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BlogHeader