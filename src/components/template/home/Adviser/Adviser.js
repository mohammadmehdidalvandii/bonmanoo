import React from 'react';
import style from './Adviser.module.css';
import Link from 'next/link';

function Adviser() {
  return (
    <section className={style.adviser}>
        <div className="containers">
            <div className={style.adviser_wrapper}>
                <p className={style.adviser_paraph}>برای دریافت مشاور تخصصی خرید محصولات با ما در ارتباط باشید.</p>
                <Link href="#" className={style.adviser_linkRequest}>در خواست مشاور</Link>
            </div>
        </div>
    </section>
  )
}

export default Adviser