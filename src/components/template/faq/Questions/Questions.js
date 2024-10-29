"use client"
import React, { useState } from 'react';
import style from './Questions.module.css'
import LoginRegister from '../Login-register/LoginRegister';
import AddOrder from '../Add-order/AddOrder';
import FollowOrder from '../Follow-order/FollowOrder';
import BackOrder from '../Back-order/BackOrder';
import Discount from '../discount/Discount';

function Questions() {
    const [activeQuestion , setActiveQuestion] = useState("Login-register")


    const handlerMenuQuestion = (menuID)=>{
        setActiveQuestion(menuID)
    }

  return (
    <section className={style.question}>
        <div className="container">
            <div className={style.question_wrapper}>
                <div className={style.question_buttons}>
                    {/* style active question_btn_active   */}
                    <button className={activeQuestion === "Login-register"? style.question_btn_active : style.question_btn}
                    onClick={()=>handlerMenuQuestion("Login-register")}
                    >ورود و ثبت نام</button>
                    <button className={activeQuestion === "add-order"? style.question_btn_active : style.question_btn}
                    onClick={()=>handlerMenuQuestion("add-order")}
                    >روند ثبت سفارش</button>
                    <button className={activeQuestion === "follow-order"? style.question_btn_active : style.question_btn}
                    onClick={()=>handlerMenuQuestion("follow-order")}
                    >پیگیری محصول</button>
                    <button className={activeQuestion === "back-product"? style.question_btn_active : style.question_btn}
                    onClick={()=>handlerMenuQuestion("back-product")}
                    >بازگرداندن کالا</button>
                    <button className={activeQuestion === "discount"? style.question_btn_active : style.question_btn}
                    onClick={()=>handlerMenuQuestion("discount")}
                    >کد تخفیف</button>
                </div>

                <div className={style.question_content}>
                    {activeQuestion === "Login-register" && (<LoginRegister/>)}
                    {activeQuestion === "add-order" && (<AddOrder/>)}
                    {activeQuestion === "follow-order" && (<FollowOrder/>)}
                    {activeQuestion === "back-product" && (<BackOrder/>)}
                    {activeQuestion === "discount" && (<Discount/>)}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Questions