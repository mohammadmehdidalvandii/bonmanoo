"use client"
import React, { useState } from 'react';
import style from './Payment.module.css';

export const metadata = {
    title:"  بن مانو |  پرداخت",
}

function Payment() {
    const [showDiscount ,  setShowDiscount] = useState(false);

    const handlerShowDiscount = ()=>{
        setShowDiscount(!showDiscount)
    }
  return (
    <section className={style.payment}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className={style.payment_addDiscount}>
                        <span className={style.payment_addDiscount_text}>کد تخفیف دارید؟</span>
                        <button className={style.payment_addDiscount_btn} 
                            onClick={handlerShowDiscount}
                        >برای نوشتن کد اینجا کلیک کنید</button>
                    </div>
                    {showDiscount && (
                    <div className={style.payment_addDiscount_box}>
                        <span className={style.payment_addDiscount_box_text}>اگر کد تخفیف دارید، لطفا در زیر بنویسید.</span>
                        <div className={style.payment_addDiscount_box_wrapper}>
                            <input type="text" className={style.payment_addDiscount_box_input} />
                            <button className={style.payment_addDiscount_box_btn}>ثبت کد</button>
                        </div>
                    </div>
                    )}
                </div>
            </div>
            <div className="row mt-5">
                this row
            </div>
        </div>
    </section>
  )
}

export default Payment