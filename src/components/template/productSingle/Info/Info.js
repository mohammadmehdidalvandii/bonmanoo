"use client"
import React, { useEffect, useState } from 'react';
import style from './Info.module.css';
import { FaHeart, FaShareAlt, FaStar } from 'react-icons/fa';
import Link from 'next/link';
import { FaCodeCompare } from 'react-icons/fa6';

function Info({product}) {

  return (
    <section className={style.info}>
        <div className={style.info_wrapper}>
            <h6 className={style.info_subtitle}>{product.titleEn}</h6>
            <div className={style.info_title_score}>
                <h4 className={style.info_title}>{product.name}</h4>
                <div className={style.info_score}>
                    <span className={style.info_score_text}>
                        4/5
                    </span>
                    <span className={style.info_score_icon}>
                        <FaStar/>
                    </span>
                </div>
            </div>
            <div className={style.info_category_sku}>
                <div className={style.info_category_wrapper}>
                    <span className={style.info_category_title}>دسته بندی :</span>
                    <Link href="#" className={style.info_category_text}>{product.typeProduct}</Link>
                </div>
                <div className={style.info_sku_wrapper}>
                    <span className={style.info_sku_title}>SKU :</span>
                    <span className={style.info_sku_text}>145632892588</span>
                </div>
            </div>
            <div className={style.info_buttons}>
                <button className={`${style.info_btn} ${"tooltip_down"}`}>
                    <FaHeart/>
                    <span className={`${style.info_btn_text} ${"tooltip_Down_Menu"}`}>افزودن مورد علاقه</span>
                </button>
                <button className={`${style.info_btn} ${"tooltip_down"}`}>
                    <FaShareAlt/>
                    <span className={`${style.info_btn_text} ${"tooltip_Down_Menu"}`}>اشتراک گذازی</span>
                </button>
                <button className={`${style.info_btn} ${"tooltip_down"}`}>
                    <FaCodeCompare/>
                    <span className={`${style.info_btn_text} ${"tooltip_Down_Menu"}`}>مقایسه</span>
                </button>
            </div>
        </div>
    </section>
  )
}

export default Info