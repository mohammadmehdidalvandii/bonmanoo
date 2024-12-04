"use client"
import React, { useEffect, useRef, useState } from 'react'
import style from './ProdHome.module.css';
import Image from 'next/image';
import Titles from '@/components/modules/Titles/Titles';
import HomeBtn from '../HomeBtn/HomeBtn';
import ProductCart from '@/components/modules/ProductCart/ProductCart';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function ProdHome() {
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
    <section className={style.prodHome}>
        <div className="containers">
            <div className="row">
                <div className="col-lg-5 d-none d-lg-block">
                    <Image src='/assets/images/ProdHome.jpg' alt='prodHome' width={600} height={700}/>
                </div>
                <div className="col-lg-7">
                    <div className={style.prodHome_wrapper}>
                        <Titles
                            subTitle="محصولات خانگی"
                            // title="دانه قهوه اسپرسو"
                        />
                        {/* <div className={style.prodHome_buttons}>
                            <HomeBtn/>
                            <HomeBtn/>
                            <HomeBtn/>
                            <HomeBtn/>
                            <HomeBtn/>
                            <HomeBtn/>
                        </div> */}
                    </div>
                    <div className={style.prodHome_products}>
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
                                {/* <SwiperSlide>
                                    <ProductCart/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ProductCart/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ProductCart/>
                                </SwiperSlide> */}
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
    </section>
  )
}

export default ProdHome