"use client"
import React, { useRef } from 'react';
import style from './Contact.module.css';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaTelegram, FaWhatsapp, FaYoutube } from 'react-icons/fa';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
function Contact() {
    const swiperRef = useRef(null);
  return (
    <section className={style.contact}>
        <div className="containers">
            <div className="row row-gap-5">
                <div className="col-lg-8 col-md-12 ">
                    <div className={style.contact_wrapper}>
                        <div className={style.contact_slider}>
                        <Swiper
                                      ref={swiperRef}
                                    slidesPerView={3}
                                    spaceBetween={5}
                                 navigation={{
                                    nextEl: `.navButtonNext`,
                                    prevEl: `.navButtonPrev`,
                                 }}
                                  modules={[Navigation]}
                                  breakpoints={{
                                    270: {
                                      slidesPerView: 1,
                                      spaceBetween: 5,
                                    },
                                    380: {
                                      slidesPerView: 1,
                                      spaceBetween: 5,
                                    },
                                    540: {
                                      slidesPerView: 1,
                                      spaceBetween: 5,
                                    },
                                    640: {
                                      slidesPerView: 2,
                                      spaceBetween: 5,
                                    },
                                    768: {
                                      slidesPerView: 2,
                                      spaceBetween: 5,
                                    },
                                    1024: {
                                      slidesPerView: 3,
                                      spaceBetween: 5,
                                    },
                                  }}
                                  className="mySwiper">
                                <SwiperSlide>
                                    <div className={style.contact_item}>
                                        <span className={style.contact_item_boxIcon}>
                                            <img src="/assets/images/contact-1.svg" alt="contact logo" className={style.contact_item_icon} />
                                        </span>
                                        <div className={style.contact_item_content}>
                                            <h6 className={style.contact_item_title}>پشتیبانی وب سایت</h6>
                                            <span className={style.contact_item_text}>َشماره تماس : 02100000</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={style.contact_item}>
                                        <span className={style.contact_item_boxIcon}>
                                            <img src="/assets/images/contact-2.svg" alt="contact logo" className={style.contact_item_icon} />
                                        </span>
                                        <div className={style.contact_item_content}>
                                            <h6 className={style.contact_item_title}>درخواست نمایندگی</h6>
                                            <span className={style.contact_item_text}>َشماره تماس : 02100000</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={style.contact_item}>
                                        <span className={style.contact_item_boxIcon}>
                                            <img src="/assets/images/contact-3.svg" alt="contact logo" className={style.contact_item_icon} />
                                        </span>
                                        <div className={style.contact_item_content}>
                                            <h6 className={style.contact_item_title}>فروش هورکا</h6>
                                            <span className={style.contact_item_text}>َشماره تماس : 02100000</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={style.contact_item}>
                                        <span className={style.contact_item_boxIcon}>
                                            <img src="/assets/images/contact-4.svg" alt="contact logo" className={style.contact_item_icon} />
                                        </span>
                                        <div className={style.contact_item_content}>
                                            <h6 className={style.contact_item_title}>فروش سازمانی</h6>
                                            <span className={style.contact_item_text}>َشماره تماس : 02100000</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                          </Swiper>
                          <div className={style.contact_slider_buttons}>
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
                        <div className={style.contact_media}>
                            <h6 className={style.contact_media_title}>ما را در شبکه‌های اجتماعی دنبال کنید</h6>
                            <div className={style.contact_media_wrapper}>
                                <Link href="#" className={style.contact_media_link}>
                                    <FaInstagram/>
                                </Link>
                                <Link href="#" className={style.contact_media_link}>
                                    <FaFacebook/>
                                </Link>
                                <Link href="#" className={style.contact_media_link}>
                                    <FaTelegram/>
                                </Link>
                                <Link href="#" className={style.contact_media_link}>
                                    <FaPinterest/>
                                </Link>
                                <Link href="#" className={style.contact_media_link}>
                                    <FaLinkedin/>
                                </Link>
                                <Link href="#" className={style.contact_media_link}>
                                    <FaYoutube/>
                                </Link>
                                <Link href="#" className={style.contact_media_link}>
                                    <FaWhatsapp/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12">
                    <div className={style.contact_wrapper_form}>
                            <h6 className={style.contact_form_title}>فرم تماس</h6>
                        <form action="#" className={style.contact_form}>
                            <div className={style.contact_form_wrapper}>
                            <div className={style.contact_formBox}>
                                <label htmlFor="" className={style.contact_formBox_label}>نام و نام خانوادگی *</label>
                                <input type="text" className={style.contact_formBox_input} />
                            </div>
                            <div className={style.contact_formBox}>
                                <label htmlFor="" className={style.contact_formBox_label}>تلفن تماس *</label>
                                <input type="text" className={style.contact_formBox_input} />
                            </div>
                            </div>
                            <div className={style.contact_form_wrapper}>
                             <div className={style.contact_formBox}>
                                 <label htmlFor="" className={style.contact_formBox_label}>ایمیل *</label>
                                 <input type="text" className={style.contact_formBox_input} />
                             </div>
                             <div className={style.contact_formBox}>
                                 <label htmlFor="" className={style.contact_formBox_label}>موضوع *</label>
                                 <select className={style.contact_form_select}>
                                <option value="">موضوع سوال تان را انتخاب کنید</option>
                                <option value="">پیشنهاد</option>
                                <option value="">انتقاده یا شکایت</option>
                                <option value="">پیگیری سفارش</option>
                                <option value="">پشتیبانی وب سایت</option>
                                <option value="">واحد بازاریابی</option>
                                <option value="">واحد فروش</option>
                                <option value="">واحد منابع انسانی</option>
                                <option value="">مدیریت</option>
                                <option value="">سایرموضوعات</option>
                             </select>
                            </div>
                             </div>
                           
                             <div className={style.contact_formBox}>
                                 <label htmlFor="" className={style.contact_formBox_label}>پیام شما *</label>
                                 <textarea className={style.contact_formBox_text}></textarea>
                             </div>
                             <button className={`${style.contact_form_submit} ${'showMore'}`}>ارسال</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact