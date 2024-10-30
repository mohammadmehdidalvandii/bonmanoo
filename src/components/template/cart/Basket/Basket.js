import React from 'react';
import style from './Basket.module.css';
import Link from 'next/link';
import { MdDeleteForever } from "react-icons/md";


function Basket() {
  return (
    <section className={style.basket}>
        <div className="container">
            <div className="row gap-row-4">
                <div className="col-lg-8 col-md-7 col-sm-12">
                    <div className={style.basket_content}>
                        <h6 className={style.basket_content_title}>سبد خرید کالا</h6>
                        <span className={style.basket_content_number}> 2 کالا</span>
                    </div>
                    <div className={style.basket_content_item}>
                        <div className={style.basketCart}>
                            <div className={style.basketCart_right}>
                                <img src="/assets/images/p1.webp" alt="" className={style.basketCart_img} />
                                <div className={style.basketCart_right_wrapper}>
                                    <Link href="#" className={style.basketCart_name}>نورسکا </Link>
                                    <div className={style.basketCart_delete_counter}>
                                        <div className={style.basketCart_counter}>
                                            <button className={style.basketCart_counter_btn}>+</button>
                                                <span className={style.basketCart_counter_count}>0</span>
                                            <button className={style.basketCart_counter_btn}>-</button>
                                        </div>
                                        <button className={style.basketCart_delete}>
                                            <MdDeleteForever/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <span className={style.basket_price}>126,765 تومان</span>
                        </div>
                        <div className={style.basketCart}>
                            <div className={style.basketCart_right}>
                                <img src="/assets/images/p1.webp" alt="" className={style.basketCart_img} />
                                <div className={style.basketCart_right_wrapper}>
                                    <Link href="#" className={style.basketCart_name}>نورسکا </Link>
                                    <div className={style.basketCart_delete_counter}>
                                        <div className={style.basketCart_counter}>
                                            <button className={style.basketCart_counter_btn}>+</button>
                                                <span className={style.basketCart_counter_count}>0</span>
                                            <button className={style.basketCart_counter_btn}>-</button>
                                        </div>
                                        <button className={style.basketCart_delete}>
                                            <MdDeleteForever/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <span className={style.basket_price}>126,765 تومان</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-5 col-sm-12">
                    <div className={style.basket_total}>
                        <ul className={style.basket_total_items}>
                            <li className={style.basket_total_item}>
                                <span className={style.basket_total_title}>مبلغ کل خرید </span>
                            </li>
                            <li className={style.basket_total_item}>
                                <span className={style.basket_total_title}>292,690 تومان</span>
                            </li>
                        </ul>
                        <ul className={style.basket_total_items}>
                            <li className={style.basket_total_item}>
                                <span className={style.basket_total_title}>مبلغ  قابل پرداخت </span>
                            </li>
                            <li className={style.basket_total_item}>
                                <span className={style.basket_total_title}>319,200 تومان</span>
                            </li>
                        </ul>
                        <span className={style.basket_total_error}>(شامل 11,488 تومان مالیات بر ارزش افزوده)
                        </span>
                        <Link href="#" className={style.basket_total_next}>ادامه جهت تسویه</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Basket