import React from 'react';
import style from './About.module.css';
import Link from 'next/link';

function About() {
  return (
    <section className={style.aboutMain}>
        <div className={style.aboutMain_img}>
            <img src="/assets/images/about-main.webp" alt="about img" className={style.aboutMain_image} />
        </div>
        <div className="containers">
            <div className="row">
                <div className="col-12">
                    <div className={style.aboutMain_content}>
                        <h4 className={style.aboutMain_title}>داستان ما از کجا شروع شد؟</h4>
                        <p className={style.aboutMain_paraph}>داستان بن‌مانو داستان رشد بذر قهوه است؛ همان بذری که از دل خاک، جوانه سبز درآورد و در تمامی این سال‌ها با ذوق زیر نور خورشید نشست تا قدش بلند و بلندتر شود. بذر ما در یکی از روزهای گرم اولین ماه تابستان کاشته شد و ریشه آن هر روز در خاک محکم‌تر شد تا درخت آن به ثمر بنشیند. سال‌های زیادی گذشت و ما …..</p>
                        <Link href="#" className={`${style.aboutMain_showMore} ${'showMore'}`}>بن مانو را بیشتر بشناسید</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About