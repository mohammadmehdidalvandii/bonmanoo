import React from 'react';
import style from './Cart.module.css';
import { MdOutlineShoppingCart } from "react-icons/md";


function Cart() {
  return (
    <section className={style.cart}>
        <div className={style.cart_wrapper}>
            <div className={style.cart_addBasket}>
                <h5 className={style.cart_price}> 275,657 تومان</h5>
                <div className={style.cart_counter}>
                    <button className={style.cart_counter_btn}>+</button>
                        <span className={style.cart_counter_count}>1</span>
                    <button className={style.cart_counter_btn}>-</button>
                </div>
                <button className={style.cart_addBasket_btn}>
                    <span className={style.cart_addBasket_btn_icon}>
                        <MdOutlineShoppingCart/>
                    </span>
                    <span className={style.cart_addBasket_btn_text}>
                        افزودن به سبد خرید
                    </span>
                </button>
            </div>
            <div className={style.cart_support}>
                <ul className={style.cart_support_items}>
                    <li className={style.cart_item}>
                        <img src="/assets/images/support1.svg" alt="support" className={style.cart_item_img} />
                        <span className={style.cart_item_text}>ارسال رایگان برای خریدهای بالای 700 هزار تومان</span>
                    </li>
                    <li className={style.cart_item}>
                        <img src="/assets/images/support2.svg" alt="support" className={style.cart_item_img} />
                        <span className={style.cart_item_text}>
                        7 روز ضمانت بازگشت کالا</span>
                    </li>
                    <li className={style.cart_item}>
                        <img src="/assets/images/support3.svg" alt="support" className={style.cart_item_img} />
                        <span className={style.cart_item_text}>
                        پشتیبانی سریع</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Cart