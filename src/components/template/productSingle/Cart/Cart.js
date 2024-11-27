"use client"
import React, { useState } from 'react';
import style from './Cart.module.css';
import { MdOutlineShoppingCart } from "react-icons/md";
import { showSwal } from '@/utils/helpers';
import swal from 'sweetalert';


function Cart({products}) {
    const [count , setCount] = useState(1);

    const handlerAddBasket = (e)=>{
        console.log("click shod")
        e.preventDefault();
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        console.log("cart"  , cart)
        const isInCart = cart.some((item)=> item.id === products._id);
        if(isInCart){
            showSwal("محصول در سبد خرید موجود است","error","متوجه شدم")
        } else{
            const cartProduct = {
                id: products._id,
                name:products.name,
                img: products.img[0],
                price: products.price,
                count
            };
            cart.push(cartProduct);
            console.log("up p" ,cartProduct)
            localStorage.setItem("cart" , JSON.stringify(cart));
            swal({
                title:"محصول با موفقیت به سبد خرید اضافه شد",
                icon:"success",
                buttons:"متوجه شدم"
            }).then(()=>{
                location.reload()
            })
        }
    }


  return (
    <section className={style.cart}>
        <div className={style.cart_wrapper}>
            <div className={style.cart_addBasket}>
                <h5 className={style.cart_price}> 275,657 تومان</h5>
                <div className={style.cart_counter}>
                    <button className={style.cart_counter_btn}
                    onClick={()=>setCount(count + 1)}
                    >+</button>
                        <span className={style.cart_counter_count}>{count}</span>
                    <button className={style.cart_counter_btn}
                    onClick={()=>setCount(count - 1)}
                    >-</button>
                </div>
                <button className={style.cart_addBasket_btn}
                onClick={handlerAddBasket}
                >
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