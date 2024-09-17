import React from 'react';
import style from './ExCoffee.module.css';
import { FaPhone } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdAccessTime } from 'react-icons/md';

function ExCoffee() {
  return (
    <section className={style.exCoffee}>
        <div className="containers">
           <div className="row">
           <div className="col-lg-6 col-md-6 col-sm-12">
                <img src="/assets/images/exCoffee.webp" alt="expelor Coffee" className={style.exCoffee_image} />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className={style.exCoffee_content}>
                    <div className={style.exCoffee_titleLogo}>
                        <img src="/assets/images/exCoffeeLogo.svg" alt="logo" className={style.exCoffee_logo} />
                        <h5 className={style.exCoffee_title}>اطلاعات تماس کافه اکسپلور بن مانو</h5>
                    </div>
                    <ul className={style.exCoffee_items}>
                        <li className={style.exCoffee_item}>
                            <span className={style.exCoffee_item_icon}>
                                <FaPhone/>
                            </span>
                            <span className={style.exCoffee_item_text}>021112233</span>
                        </li>
                        <li className={style.exCoffee_item}>
                            <span className={style.exCoffee_item_icon}>
                                <FaLocationDot/>
                            </span>
                            <span className={style.exCoffee_item_text}>اتوبان همت اتوبان خرازی مجموعه ایران مال طبقه G1 کنار پیست یخ</span>
                        </li>
                        <li className={style.exCoffee_item}>
                            <span className={style.exCoffee_item_icon}>
                                <MdAccessTime/>
                            </span>
                            <span className={style.exCoffee_item_text}>تمامی روز های هفته ازساعت 10:00 - 23:00</span>
                        </li>
                    </ul>
                </div>
            </div>
           </div>
        </div>
    </section>
  )
}

export default ExCoffee