import React from 'react';
import style from './Content.module.css';

function Content() {
  return (
    <section className={style.content_rp}>
        <div className="container">
            <div className={style.content_rp_wrapper}>
                <div className={style.content_rp_titles}>
                    <h4 className={style.content_rp_title}>ثبت درخواست نمایندگی خرده‌فروشی</h4>
                    <p className={style.content_rp_text}>اگر مایل هستید، نماینده محصولات بن‌مانو باشید، لطفا فرم زیر تکمیل کنید، تا همکاران ما، در اولین فرصت با شما تماس بگیرند.</p>
                </div>
                <form action="#" className={style.content_rp_form}>
                    <div className={style.content_form}>
                        <h6 className={style.content_form_title}>مشخصات فردی</h6>
                        <div className={style.content_form_wrapper}>
                            <div className={style.content_formBox}>
                                <label htmlFor="" className={style.content_formBox_label}>نام ونام خانوادگی (مدیر عامل) </label>
                                <input type="text" className={style.content_formBox_input} />
                            </div>
                            <div className={style.content_formBox}>
                                <label htmlFor="" className={style.content_formBox_label}>نام ونام خانوادگی (مدیر فروش)</label>
                                <input type="text" className={style.content_formBox_input} />
                            </div>
                        </div>
                        <div className={style.content_form_wrapper}>
                            <div className={style.content_formBox}>
                                <label htmlFor="" className={style.content_formBox_label}>نام ونام خانوادگی (مدیر تامین)</label>
                                <input type="text" className={style.content_formBox_input} />
                            </div>
                            <div className={style.content_formBox}>
                                <label htmlFor="" className={style.content_formBox_label}>استان/شهر</label>
                                <input type="text" className={style.content_formBox_input} />
                            </div>
                        </div>
                        <div className={style.content_form_wrapper}>
                            <div className={style.content_formBox}>
                                <label htmlFor="" className={style.content_formBox_label}>تلفن همراه</label>
                                <input type="text" className={style.content_formBox_input} />
                            </div>
                        </div>
                    </div>
                    <div className={style.content_form}>
                        <h6 className={style.content_form_title}>ساختار و سیستم فروش</h6>
                        <div className={style.content_form_wrapper}>
                            <div className={style.content_formBox}>
                                <label htmlFor="" className={style.content_formBox_label}>تعداد لاین‌های فروش</label>
                                <input type="text" className={style.content_formBox_input} />
                            </div>
                            <div className={style.content_formBox}>
                                <label htmlFor="" className={style.content_formBox_label}>تعداد سرپرست‌های فروش</label>
                                <input type="text" className={style.content_formBox_input} />
                            </div>
                        </div>
                        <div className={style.content_form_wrapper}>
                            <div className={style.content_formBox}>
                                <label htmlFor="" className={style.content_formBox_label}>تعداد ویزیتورها                                </label>
                                <input type="text" className={style.content_formBox_input} />
                            </div>
                            <div className={style.content_formBox}>
                                <label htmlFor="" className={style.content_formBox_label}>نرم‌افزار فروش</label>
                                <input type="text" className={style.content_formBox_input} />
                            </div>
                        </div>
                    </div>
                    <div className={style.content_form}>
                        <h6 className={style.content_form_title}>فعالیت شرکت</h6>
                        <div className={style.content_form_wrapper}>
                            <div className={style.content_formBox}>
                                <label htmlFor="" className={style.content_formBox_label}>سابقه فعالیت شرکت</label>
                                <input type="text" className={style.content_formBox_input} />
                            </div>
                            <div className={style.content_formBox}>
                                <label htmlFor="" className={style.content_formBox_label}>تعداد اقلام در سبد فروش</label>
                                <input type="text" className={style.content_formBox_input} />
                            </div>
                        </div>
                        <div className={style.content_form_wrapper}>
                            <div className={style.content_formBox}>
                                <label htmlFor="" className={style.content_formBox_label}>سه برند اصلی در سبد فروش</label>
                                <input type="text" className={style.content_formBox_input} />
                            </div>
                            <div className={style.content_formBox}>
                                <label htmlFor="" className={style.content_formBox_label}>مناطق تحت پوشش</label>
                                <input type="text" className={style.content_formBox_input} />
                            </div>
                        </div>
                    </div>
                    <input type="submit" value="ارسال" className='formSubmit' />
                </form>
            </div>
        </div>
    </section>
  )
}

export default Content