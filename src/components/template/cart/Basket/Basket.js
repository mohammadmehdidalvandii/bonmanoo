"use client"
import React, { useEffect, useState } from 'react';
import style from './Basket.module.css';
import Link from 'next/link';
import { MdDeleteForever } from "react-icons/md";
import swal from 'sweetalert';


function Basket() {
    const [cart , setCart] = useState([]);
    const [totalPrice , setTotalPrice] = useState(0)


    useEffect(()=>{
        const basket =  JSON.parse(localStorage.getItem("cart")) || [];
        setCart(basket)
    },[])


    const increaseCount = (id) => {
        setCart(prevCart => 
            prevCart.map(item => 
                item.id === id ? { ...item, count: item.count + 1 } : item
            )
        );
    };
    
    const decreaseCount = (id) => {
        setCart(prevCart => 
            prevCart.map(item => 
                item.id === id && item.count > 0 ? { ...item, count: item.count - 1 } : item
            )
        );
    };
    
    useEffect(calcTotalPrice , [cart])

    function calcTotalPrice(){
        let price = 0 ;
        if(cart.length){
            price = cart.reduce((prev , current)=> prev + current.price * current.count ,0);
            setTotalPrice(price)
        }  ;
        setTotalPrice(price)
    const additionalCharge = price * 0.05;   
    const finalPrice = price + additionalCharge;   

    setTotalPrice(finalPrice);   
        setTotalPrice(finalPrice)
    };

    const handlerRemovedProduct = (productID)=>{
        swal({
            title:"آیا از حذف محصول خود اطمینان دارید ؟",
            icon:"error",
            buttons:["نه","آره"]
        }).then((result)=>{
            if(result){
                const newBasket = cart.filter((item)=> item.id !== productID);
                localStorage.setItem("cart" , JSON.stringify(newBasket))
                swal({
                    title:"محصول مورد نظر شما حذف شد ",
                    icon:"success",
                    buttons:"متوجه شدم"
                }).then(()=>{
                    location.reload()
                })
            }
        })
    }


  return (
    <section className={style.basket}>
        <div className="container">
            <div className="row gap-row-4">
                <div className="col-lg-8 col-md-7 col-sm-12">
                    <div className={style.basket_content}>
                        <h6 className={style.basket_content_title}>سبد خرید کالا</h6>
                        <span className={style.basket_content_number}> {cart.length} کالا</span>
                    </div>
                    <div className={style.basket_content_item}>
                        { cart.length > 0 ? cart.map((item)=>(
                        <div className={style.basketCart} key={item.id} >
                            <div className={style.basketCart_right}>
                                <img src={item.img} alt="" className={style.basketCart_img} />
                                <div className={style.basketCart_right_wrapper}>
                                    <Link href={`/Products/${item.id}`} className={style.basketCart_name}>{item.name}</Link>
                                    <div className={style.basketCart_delete_counter}>
                                        <div className={style.basketCart_counter}>
                                            <button className={style.basketCart_counter_btn}
                                            onClick={() => increaseCount(item.id)}
                                            >+</button>
                                                <span className={style.basketCart_counter_count}>{item.count}</span>
                                            <button className={style.basketCart_counter_btn}
                                           onClick={() => decreaseCount(item.id)}
                                            >-</button>
                                        </div>
                                        <button className={style.basketCart_delete}
                                        onClick={()=>handlerRemovedProduct(item.id)}
                                        >
                                            <MdDeleteForever/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <span className={style.basket_price}>{(item.count * item.price).toLocaleString()} تومان</span>
                        </div>
                        )):(
                            <h3 className={style.basket_total_error}>محصول در سبد خرید موجود نیست</h3>
                        )}
                    </div>
                </div>
                <div className="col-lg-4 col-md-5 col-sm-12">
                    {cart.length > 0 && (
                    <div className={style.basket_total}>
                        <ul className={style.basket_total_items}>
                            <li className={style.basket_total_item}>
                                <span className={style.basket_total_title}>مبلغ کل خرید </span>
                            </li>
                            <li className={style.basket_total_item}>
                                <span className={style.basket_total_title}>{totalPrice.toLocaleString()} تومان</span>
                            </li>
                        </ul>
                        <ul className={style.basket_total_items}>
                            <li className={style.basket_total_item}>
                                <span className={style.basket_total_title}>مبلغ  قابل پرداخت </span>
                            </li>
                            <li className={style.basket_total_item}>
                                <span className={style.basket_total_title}>{totalPrice.toLocaleString()} تومان</span>
                            </li>
                        </ul>
                        <span className={style.basket_total_error}>(شامل 5 % تومان مالیات بر ارزش افزوده)
                        </span>
                        <Link href={`/CheckOut?totalPrice=${totalPrice}`} className={style.basket_total_next}>ادامه جهت تسویه</Link>
                    </div>
                    )}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Basket