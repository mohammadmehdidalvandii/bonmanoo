import React from 'react';
import style from './History.module.css';

function History() {
  return (
    <section className={style.history}>
        <div className="containers">
            <div className="row">
                <div className="col-12">
                    <h5 className={style.history_title}>بن‌مانو از گذشته تا به امروز</h5>
                </div>
                <div className="row mt-5">
                    <div className="col-12">
                        <div className={style.history_wrapper}>
                            <div className={style.history_content}>
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-none">
                                        <img src="/assets/images/history.webp" alt="history" className={style.history_img} />
                                    </div>
                                    <div className="col-lg-8 col-md-8 col-sm-12">
                                        <h6 className={style.history_title_banner}>آنچه در سال 1402 رقم زدیم ...</h6>
                                        <ul className={style.history_items}>
                                            <li className={style.history_item}>
                                                <span className={style.history_item_icon}></span>
                                                <span className={style.history_item_text}>حضور در نمایشگاه شیرینی و شکلات</span>
                                            </li>
                                            <li className={style.history_item}>
                                                <span className={style.history_item_icon}></span>
                                                <span className={style.history_item_text}>رونمایی از دو محصول جدید (کپسول وانیل و کپسول شکلات نعنا)</span>
                                            </li>
                                            <li className={style.history_item}>
                                                <span className={style.history_item_icon}></span>
                                                <span className={style.history_item_text}>حضور در نمایشگاه تخصصی قهوه ایران‌مال</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12">
                        <div className={style.history_buttons}>
                            {/* <<< style active btn "history_btn_active" >>> */}
                            <button className={style.history_btn}>1394</button>
                            <button className={style.history_btn}>1395</button>
                            <button className={style.history_btn}>1396</button>
                            <button className={style.history_btn}>1397</button>
                            <button className={style.history_btn}>1398</button>
                            <button className={style.history_btn}>1400</button>
                            <button className={style.history_btn}>1401</button>
                            <button className={style.history_btn}>1402</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default History