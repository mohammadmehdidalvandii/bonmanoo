"use client"
import React, { useRef } from 'react';
import style from './Team.module.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function Team() {
    const swiperRef = useRef(null);
  return (
    <section className={style.team}>
        <div className="containers">
            <div className="row">
                <div className="col-12">
                    <h4 className={style.team_title}>تیم بن مانو</h4>
                </div>
            </div>
            <div className="row mt-5">
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
                                             <div className={style.teamCart}>
                        <img src="/assets/images/team.webp" alt="" className={style.teamCart_img} />
                        <div className={style.teamCart_content}>
                            <div className={style.teamCart_logoTitle}>
                                <span className={style.teamCart_logoBox}>
                                    <img src="/assets/images/tlogo.svg" alt="logo title" className={style.teamCart_logo} />    
                                </span>  
                                <h6 className={style.teamCart_title}>برشته کاری</h6>
                            </div>
                            <p className={style.teamCart_desc}>رسترهای قهوه ما، با دقت متغیرهایی مانند دما، زمان و... را کنترل می‌کنند تا پروفایل‌های طعمی منحصر به فرد و پیچیده‌ای را ایجاد کنند.</p>
                        </div>
                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                        <div className={style.teamCart}>
                        <img src="/assets/images/team.webp" alt="" className={style.teamCart_img} />
                        <div className={style.teamCart_content}>
                            <div className={style.teamCart_logoTitle}>
                                <span className={style.teamCart_logoBox}>
                                    <img src="/assets/images/tlogo.svg" alt="logo title" className={style.teamCart_logo} />    
                                </span>  
                                <h6 className={style.teamCart_title}>برشته کاری</h6>
                            </div>
                            <p className={style.teamCart_desc}>رسترهای قهوه ما، با دقت متغیرهایی مانند دما، زمان و... را کنترل می‌کنند تا پروفایل‌های طعمی منحصر به فرد و پیچیده‌ای را ایجاد کنند.</p>
                        </div>
                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                        <div className={style.teamCart}>
                        <img src="/assets/images/team.webp" alt="" className={style.teamCart_img} />
                        <div className={style.teamCart_content}>
                            <div className={style.teamCart_logoTitle}>
                                <span className={style.teamCart_logoBox}>
                                    <img src="/assets/images/tlogo.svg" alt="logo title" className={style.teamCart_logo} />    
                                </span>  
                                <h6 className={style.teamCart_title}>برشته کاری</h6>
                            </div>
                            <p className={style.teamCart_desc}>رسترهای قهوه ما، با دقت متغیرهایی مانند دما، زمان و... را کنترل می‌کنند تا پروفایل‌های طعمی منحصر به فرد و پیچیده‌ای را ایجاد کنند.</p>
                        </div>
                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                        <div className={style.teamCart}>
                        <img src="/assets/images/team.webp" alt="" className={style.teamCart_img} />
                        <div className={style.teamCart_content}>
                            <div className={style.teamCart_logoTitle}>
                                <span className={style.teamCart_logoBox}>
                                    <img src="/assets/images/tlogo.svg" alt="logo title" className={style.teamCart_logo} />    
                                </span>  
                                <h6 className={style.teamCart_title}>برشته کاری</h6>
                            </div>
                            <p className={style.teamCart_desc}>رسترهای قهوه ما، با دقت متغیرهایی مانند دما، زمان و... را کنترل می‌کنند تا پروفایل‌های طعمی منحصر به فرد و پیچیده‌ای را ایجاد کنند.</p>
                        </div>
                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                        <div className={style.teamCart}>
                        <img src="/assets/images/team.webp" alt="" className={style.teamCart_img} />
                        <div className={style.teamCart_content}>
                            <div className={style.teamCart_logoTitle}>
                                <span className={style.teamCart_logoBox}>
                                    <img src="/assets/images/tlogo.svg" alt="logo title" className={style.teamCart_logo} />    
                                </span>  
                                <h6 className={style.teamCart_title}>برشته کاری</h6>
                            </div>
                            <p className={style.teamCart_desc}>رسترهای قهوه ما، با دقت متغیرهایی مانند دما، زمان و... را کنترل می‌کنند تا پروفایل‌های طعمی منحصر به فرد و پیچیده‌ای را ایجاد کنند.</p>
                        </div>
                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                        <div className={style.teamCart}>
                        <img src="/assets/images/team.webp" alt="" className={style.teamCart_img} />
                        <div className={style.teamCart_content}>
                            <div className={style.teamCart_logoTitle}>
                                <span className={style.teamCart_logoBox}>
                                    <img src="/assets/images/tlogo.svg" alt="logo title" className={style.teamCart_logo} />    
                                </span>  
                                <h6 className={style.teamCart_title}>برشته کاری</h6>
                            </div>
                            <p className={style.teamCart_desc}>رسترهای قهوه ما، با دقت متغیرهایی مانند دما، زمان و... را کنترل می‌کنند تا پروفایل‌های طعمی منحصر به فرد و پیچیده‌ای را ایجاد کنند.</p>
                        </div>
                    </div>
                                </SwiperSlide>
                          </Swiper>
                </div>
                <div className="col-12">
                    <div className={style.team_buttons}>
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

export default Team