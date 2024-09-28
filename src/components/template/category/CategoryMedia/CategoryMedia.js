import React from 'react';
import style from './CategoryMedia.module.css';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaTelegram, FaWhatsapp, } from 'react-icons/fa';


function CategoryMedia() {
  return (
    <section className={style.categoryMedia}>
        <div className={style.categoryMedia_wrapper}>
            <Link href="" className={style.CategoryMedia_link}>
                <FaFacebook/>
            </Link>
            <Link href="" className={style.CategoryMedia_link}>
                <FaInstagram/>
            </Link>
            <Link href="" className={style.CategoryMedia_link}>
                <FaLinkedin/>
            </Link>
            <Link href="" className={style.CategoryMedia_link}>
                <FaTelegram/>
            </Link>
            <Link href="" className={style.CategoryMedia_link}>
                <FaWhatsapp/>
            </Link>
        </div>
    </section>
  )
}

export default CategoryMedia