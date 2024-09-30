import React from 'react';
import style from './CareersContent.module.css'

function CareersContent() {
  return (
    <section className={style.careersContent}>
        <div className="containers">
            <div className="row">
                <div className="col-12">
                    <h5 className={style.careersContent_title}>فرصت های شغلی</h5>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12">
                    <div className={style.careersContent_content}>
                        <p className={style.careersContent_desc}>ما در بن‌مانو به دنبال تحقق رویاهایی می‌گردیم که با بزرگ‌تر شدن خانواده‌ی بن‌مانو، زودتر به آن‌ها خواهیم رسید…</p>
                        <p className={style.careersContent_desc}>آنچه که در این مسیر پیش روی ماست، و کنار هم ایستاده‌ایم تا دوشادوش هم به آن برسیم، رونق صنعت قهوه در کشورمان است. با این دیدگاه تلاش کردیم از کسانی که به نوعی در این مسیر قدم گذاشته‌اند، حمایت کنیم. همت ورزیدیم از باریستاهای فعال در این صنعت، از کسانی که رویای داشتن کافه‌ای در گوشه‌ای از شهر را دارند، اما دانش لازم را ندارند، از مسابقات مختلفی که در صنعت قهوه برگزار می‌شود، حمایت کنیم.</p>
                        <p className={style.careersContent_desc}>آنچه که سرلوحه ما برای قدم برداشتن در این مسیر است، صداقت و روراستی با خودمان و با شماست. هر آنچه که از بن‌مانو جلوه می‌کند؛ زشت یا زیبا، واقعیتی بی کم و کاست از بن‌مانوست.
                        اگر دوست دارید کنار ما باشید تا زودتر به این رویاها رنگ واقعیت بزنیم، با افتخار، از شما دعوت می‌کنیم تا به خانواده بزرگ بن‌مانو بپیوندید.</p>
                    </div>
                </div>
            </div>
            <div className="row mt-4 row-gap-4">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <h6 className={style.careersContent_item_title}>چرا همکاری با بن‌مانو؟</h6>
                    <ul className={style.careersContent_items}>
                        <li className={style.careersContent_item}>محیطی شاد و پویا</li>
                        <li className={style.careersContent_item}>مسئولیت‌های چالشی</li>
                        <li className={style.careersContent_item}>فرصتی برای یادگیری کارهای گروهی</li>
                        <li className={style.careersContent_item}>فرآیند استخدام در بن‌مانو</li>
                        <li className={style.careersContent_item}>ارزیابی از بعد فرهنگ سازمانی</li>
                        <li className={style.careersContent_item}>ارزیابی از بعد دانش تخصصی</li>
                        <li className={style.careersContent_item}>مذاکره در خصوص شرایط حقوق و مزایا</li>
                        <li className={style.careersContent_item}>صحت سوابق شغلی</li>
                        <li className={style.careersContent_item}>تلاش در جهت حفظ سلامت همکاران</li>
                        <li className={style.careersContent_item}>افزایش سطح ایمنی و بهداشت محیط کار</li>
                        <li className={style.careersContent_item}>جلب رضایت ذی‌نفعان و تامین نیازهای آنان</li>
                        <li className={style.careersContent_item}>به کارگیری تمام توان سازمان در پیش‌گیری از آلودگی محیط زیست</li>
                        <li className={style.careersContent_item}>تلاش در جهت افزایش بهره‌وری و کاهش قیمت تمام شده محصول</li>
                        <li className={style.careersContent_item}>بهبود مستمر اثربخش سیستم مدیریت یکپارچه</li>
                    </ul>
                    <h6 className={style.careersContent_item_title}>لطفا این فرم استخدام را پرکنید.</h6>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <img src="/assets/images/careers.webp" alt="img" className={style.careersContent_img} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default CareersContent