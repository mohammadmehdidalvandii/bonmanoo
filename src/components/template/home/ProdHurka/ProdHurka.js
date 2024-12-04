"use client"
import React, { useEffect, useRef, useState } from "react";
import style from "./ProdHurka.module.css";
import Titles from "@/components/modules/Titles/Titles";
import Image from "next/image";
import HomeBtn from "../HomeBtn/HomeBtn";
import Link from "next/link";
import ProductCart from '@/components/modules/ProductCart/ProductCart';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function ProdHurka() {
    const swiperRef = useRef(null);
    const [products , setProducts] = useState([]);

    useEffect(()=>{
      const getProducts = async ()=>{
        const res = await fetch("/api/products/");
        const data = await res.json();
        setProducts(data)
      };
      getProducts()
    })
  return (
    <section className={style.prodHurka}>
      <div className="containers">
        <div className="row flex-lg-row flex-md-row-reverse">
          <div className="col-lg-5 col-md-12">
            <div className={style.prodHurka_wrapper}>
              <h4 className={style.prodHurka_title}>چرا هورکا بن مانو ؟</h4>
              <ul className={style.prodHurka_items}>
                <li className={style.prodHurka_item}>
                  <div className={style.prodHurka_item_boxIcon}>
                    <Image
                      src="/assets/images/hurka-1.svg"
                      alt="icon hurka"
                      width={70}
                      height={70}
                      className={style.prodHurka_item_img}
                    />
                  </div>
                  <div className={style.prodHurka_content}>
                    <h6 className={style.prodHurka_content_title}>
                      انتخاب دانه‌ قهوه‌های باکیفیت
                    </h6>
                    <span className={style.prodHurka_content_text}>
                      مناسب با ذائقه ایرانی از بهترین مزارع دنیا
                    </span>
                  </div>
                </li>
                <li className={style.prodHurka_item}>
                  <div className={style.prodHurka_item_boxIcon}>
                    <Image
                      src="/assets/images/hurka-2.svg"
                      alt="icon hurka"
                      width={70}
                      height={70}
                      className={style.prodHurka_item_img}
                    />
                  </div>
                  <div className={style.prodHurka_content}>
                    <h6 className={style.prodHurka_content_title}>
                      رعایت کلیه استانداردهای انبارداری
                    </h6>
                    <span className={style.prodHurka_content_text}>
                      برای نگهداری دانه سبز قهوه
                    </span>
                  </div>
                </li>
                <li className={style.prodHurka_item}>
                  <div className={style.prodHurka_item_boxIcon}>
                    <Image
                      src="/assets/images/hurka-3.svg"
                      alt="icon hurka"
                      width={70}
                      height={70}
                      className={style.prodHurka_item_img}
                    />
                  </div>
                  <div className={style.prodHurka_content}>
                    <h6 className={style.prodHurka_content_title}>
                      استفاده از تکنولوژی هوای داغ
                    </h6>
                    <span className={style.prodHurka_content_text}>
                      جهت یکسان بودن کیفیت برشته‌کاری دانه‌های قهوه
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-7 col-md-12">
            <div className="row">
              <div className="col-12">
                <div className={style.prodHurka_title_buttons}>
                  <Titles subTitle="محصولات هورکا"
                  //  title="قهوه ترکیبی"
                   
                   />
                  {/* <div className={style.prodHurka_buttons}>
                    <HomeBtn />
                    <HomeBtn />
                    <HomeBtn />
                  </div> */}
                </div>
              </div>
              <div className="col-12">
              <div className={style.prodHurka_products}>
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
                                {products.map(product=>(
                                        <SwiperSlide key={product._id}>
                                        <ProductCart
                                            id={product._id}
                                            name={product.name}
                                            img={product.img[0]}
                                            imgHover={product.img[1]}
                                            price={product.price}
                                        />
                                    </SwiperSlide>
                                    ))}
                          </Swiper>
                            </div>
                            <div className="col-12">
                                <div className="navigation_links">
                                    <div className="navigation_btn">
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
                                    <Link href="#"className="showMore">مشاهده محصولات بیشتر</Link>
                                </div>
                            </div>
                        </div>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProdHurka;
