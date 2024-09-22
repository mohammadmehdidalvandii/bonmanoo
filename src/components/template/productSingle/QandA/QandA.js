import React from 'react';
import style from './QandA.module.css';
import { FaUser } from 'react-icons/fa';

function QandA() {
  return (
    <section className={style.qanda}>
        <div className="containers">
            <div className="row">
                <div className="col-12">
                    <h5 className={style.qanda_title}>پرسش و پاسخ</h5>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12">
                    <div className={style.qanda_cart}>
                        <div className={style.qanda_cart_username_dateTime}>
                            <div className={style.qanda_cart_username}>
                                <span className={style.qanda_cart_username_icon}>
                                    <FaUser/>
                                </span>
                                <span className={style.qanda_cart_username_text}>
                                    جواد اشراقی
                                </span>
                            </div>
                            <div className={style.qanda_cart_dataTime}>
                                <span className={style.qanda_cart_date}>1403-06-05</span> 
                                    <br />
                                <span className={style.qanda_cart_time}>14:23</span>
                            </div>
                        </div>
                        <p className={style.qanda_cart_desc}>
                        تاریخ تولید محصول برای چه ماهی است
                        </p>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12">
                    <form action="#" className={style.qanda_form}>
                        <div className={style.qanda_form_wrapper}>
                            <div className={style.qanda_formBox}>
                                <label className={style.qanda_formBox_label}>نام *</label>
                                <input type="text" className={style.qanda_formBox_input} />
                            </div>
                            <div className={style.qanda_formBox}>
                                <label className={style.qanda_formBox_label}>ایمیل *</label>
                                <input type="text" className={style.qanda_formBox_input} />
                            </div>
                        </div>
                        <div className={style.qanda_formBox}>
                                <label className={style.qanda_formBox_label}>ایمیل *</label>
                                <textarea type="text" className={style.qanda_formBox_text} />
                            </div>
                            <button className={style.qanda_form_submit}>پرسیدن</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default QandA