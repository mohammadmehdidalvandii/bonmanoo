import React from 'react';
import style from './ArticleCart.module.css'
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
function ArticleCart() {
  return (
    <div className={style.articleCart}>
    <div className={style.articleCart_img_bg_date}>
        <img src="/assets/images/ma.webp" alt='magazine img' className={style.articleCart_img}/>
        <div className={style.articleCart_bg}></div>
        <div className={style.articleCart_date}>16 شهریور 1403</div>
        <Link href="#" className={style.articleCart_show}>
            <FaArrowLeft/>
        </Link>
    </div>
    <div className={style.articleCart_content}>
            <h5 className={style.articleCart_title}>تفاوت کاپوچینو با اسپرسو چیست؟</h5>
            <p className={style.articleCart_paraph}>آیا کاپوچینو همون اسپرسوست؟ </p>
    </div>
</div>
  )
}

export default ArticleCart