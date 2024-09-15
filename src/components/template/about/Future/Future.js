import React from 'react';
import style from "./Future.module.css";

function Future() {
  return (
    <section className={style.future}>
        <dic className="containers">
            <h5 className={style.future_titles}>ماموریت و چشم انداز ما در بن مانو</h5>
            <div className={style.future_wrapper}>
                <div className={style.future_item}>
                    <span className={style.future_icon}>
                        <img src="/assets/images/mission.svg" alt="logo future" className={style.future_img} />
                    </span>
                    <h6 className={style.future_title}>ماموریت ما</h6>
                    <p className={style.future_desc}>تلاش‌ برای خلق تجربه‌ای یکتا از نوشیدن قهوه‌ای تازه‌برشت و با‌کیفیت</p>
                </div>
                <div className={style.future_item}>
                    <span className={style.future_icon}>
                        <img src="/assets/images/future.svg" alt="logo future" className={style.future_img} />
                    </span>
                    <h6 className={style.future_title}>چشم انداز ما</h6>
                    <p className={style.future_desc}>مرجع فرهنگ قهوه در ایران و الگویی منحصر به فرد برای تولیدکنندگان ایرانی </p>
                </div>
            </div>
        </dic>
    </section>
  )
}

export default Future