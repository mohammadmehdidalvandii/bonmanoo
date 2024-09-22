"use client"
import React, { useState } from 'react';
import style from './ProductAccordion.module.css'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

function ProductAccordion() {
    const [activeAccordion , setActiveAccordion] = useState(false);

    const handlerShowProdAccordion = ()=>{
        setActiveAccordion(!activeAccordion)
    }
  return (
    <div className={style.productAccordion}>
    <div className={activeAccordion ? style.productAccordion_wrapper_active : style.productAccordion_wrapper} onClick={handlerShowProdAccordion}>
    <div className={style.productAccordion_title_number}>
        <div className={style.productAccordion_numberBox}>
            <span className={style.productAccordion_number}>1</span>
        </div>
        <h5 className={style.productAccordion_title}>آیا قهوه هویلا کلمبیا مناسب برای همه سلیقه‌ها است؟</h5>
    </div>
    <span className={style.productAccordion_icon}>
        <MdOutlineKeyboardArrowDown/> 
    </span>
    </div>
    {activeAccordion && (
    <p className={style.productAccordion_desc}>
    بله، با طعم ملایم و پیچیدگی خاصش، این قهوه مورد پسند طیف وسیعی از علاقه‌مندان به نوشیدن قهوه‌ قرار گرفته است
    </p>
    )}
</div>
  )
}

export default ProductAccordion