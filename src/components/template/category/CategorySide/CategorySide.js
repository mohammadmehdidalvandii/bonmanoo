"use client"
import React, { useState } from 'react';
import style from './CategorySide.module.css';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import Link from 'next/link';

function CategorySide() {
    const [categoryAccordion , setCategoryAccordion]  = useState(true)

    const handlerShowCategoryAccordion = ()=>{
        setCategoryAccordion(!categoryAccordion)
    }

  return (
    <section className={style.categorySide}>
        <div className={style.categorySide_wrapper}>
            <div className={style.categorySide_accordion}>
                <div className={style.categorySide_accordion_title_icon} onClick={handlerShowCategoryAccordion}>
                    <h6 className={style.categorySide_accordion_title}>آنچه در این مقاله می خوانید؟</h6>
                    <span className={style.categorySide_accordion_icon}>
                        <MdOutlineKeyboardArrowDown/>
                    </span>
                </div>
                {categoryAccordion && (
                <div className={style.categorySide_accordion_content}>
                    <ul className={style.categorySide_accordion_items}>
                        <li className={style.categorySide_accordion_item}>آیا قهوه روی اضطراب تاثیر دارد؟</li>
                        <li className={style.categorySide_accordion_item}>چرا قهوه می‌خورم استرس می‌گیرم؟</li>
                        <li className={style.categorySide_accordion_item}>تداخل دارویی قهوه با داروهای اضطراب</li>
                        <li className={style.categorySide_accordion_item}>
                        چطور تاثیرات استرس‌زای قهوه را از بین ببریم؟</li>
                        <li className={style.categorySide_accordion_item}>در نهایت، آیا قهوه استرس زا است؟</li>
                        <li className={style.categorySide_accordion_item}>سوالات متداول</li>
                    </ul>
                </div>
                )}
            </div>
            <Link href="" className={style.categorySide_link}>
                <img src="/assets/images/cd.webp" alt="" className={style.categorySide_link_img} />
            </Link>
        </div>
    </section>
  )
}

export default CategorySide