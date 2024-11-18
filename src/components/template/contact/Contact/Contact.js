"use client"
import React, { useRef, useState } from 'react';
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
import { validationEmail ,validationPhone } from '@/utils/auth';
import { showSwal } from '@/utils/helpers';
import swal from 'sweetalert';



function Contact() {
    const swiperRef = useRef(null);
    const [username , setUserName] = useState("")
    const [phone , setPhone] = useState("")
    const [email , setEmail] = useState("")
    const [subject , setSubject] = useState("-1")
    const [message , setMessage] = useState("")

    const handlerSendMessage = async (e)=>{
        e.preventDefault();
        const  messages = {username, phone , email , subject ,message};

        if(!username.trim()){
            showSwal("مقدار نام ونام خانوادگی اجباری است","error","تلاش مجدد")
        }
        const isValidPhone = validationPhone(phone);
        if(!isValidPhone){
            showSwal("مقدار تلفن درست نمیباشد","error","تلاش مجدد")
        } else if(!phone.trim()){
            showSwal("مقدار تلفن اجباری است","error","تلاش مجدد")
        }
        const isValidEmail = validationEmail(email);
        if(!isValidEmail){
            showSwal("مقدار ایمیل صحیح نیست","error","تلاش مجدد")
        } else if(!email.trim()){
            showSwal("مقدار ایمیل اجباری است","error","تلاش مجدد")
        }
        if(subject === "-1"){
            showSwal("مقدار موضوع اجباری است","error","تلاش مجدد")
        }
        if(!message.trim()){
            showSwal("مقدار پیام اجباری است","error","تلاش مجدد")
        };

        const res = await fetch('/api/contact',{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify(messages),
        });

        if(res.status === 201){
            swal({
                title:"پیام شما با موفقیت ارسال شد",
                icon:"success",
                buttons:"متوجه شدم"
            }).then(()=>{
                location.reload()
            })
        }


    }






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
                                <input type="text" className={style.contact_formBox_input} 
                                    value={username}
                                    onChange={(e)=>setUserName(e.target.value)}
                                />
                            </div>
                            <div className={style.contact_formBox}>
                                <label htmlFor="" className={style.contact_formBox_label}>تلفن تماس *</label>
                                <input type="text" className={style.contact_formBox_input}
                                value={phone}
                                onChange={(e)=>setPhone(e.target.value)}
                                />
                            </div>
                            </div>
                            <div className={style.contact_form_wrapper}>
                             <div className={style.contact_formBox}>
                                 <label htmlFor="" className={style.contact_formBox_label}>ایمیل *</label>
                                 <input type="text" className={style.contact_formBox_input} 
                                 value={email}
                                 onChange={(e)=>setEmail(e.target.value)}
                                 />
                             </div>
                             <div className={style.contact_formBox}>
                                 <label htmlFor="" className={style.contact_formBox_label}>موضوع *</label>
                                 <select className={style.contact_form_select}
                                    onChange={(e)=>setSubject(e.target.value)}
                                 >
                                <option value={"-1"}>موضوع سوال تان را انتخاب کنید</option>
                                <option value={"پیشنهاد"}>پیشنهاد</option>
                                <option value={"شکایت یا انتقاد"}>انتقاده یا شکایت</option>
                                <option value={"سفارش پیگیری"}>پیگیری سفارش</option>
                                <option value={"پشتیبانی"}>پشتیبانی وب سایت</option>
                                <option value={"بازاریابی واحد"}>واحد بازاریابی</option>
                                <option value={"فروش واحد"}>واحد فروش</option>
                                <option value={"انسانی منابع واحد"}>واحد منابع انسانی</option>
                                <option value={"مدیریت"}>مدیریت</option>
                                <option value={"سایر موضوعات"}>سایرموضوعات</option>
                             </select>
                            </div>
                             </div>
                           
                             <div className={style.contact_formBox}>
                                 <label htmlFor="" className={style.contact_formBox_label}>پیام شما *</label>
                                 <textarea className={style.contact_formBox_text}
                                 value={message}
                                 onChange={(e)=>setMessage(e.target.value)}
                                 ></textarea>
                             </div>
                             <button className={`${style.contact_form_submit} ${'showMore'}`}
                                onClick={handlerSendMessage}
                             >ارسال</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact