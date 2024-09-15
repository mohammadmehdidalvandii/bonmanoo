import React from 'react';
import style from './About.module.css';
import Link from 'next/link';

function About() {
  return (
    <section className={style.about}>
        <img src="/assets/images/about-Main.webp" alt="img about " className={style.about_image} />
        <div className="containers">
            <div className="row">
                <div className="col-12">
                    <div className={style.about_content}>
                        <h3 className={style.about_content_title}>داستان ما از کجا شروع شد؟</h3>
                        <span className={style.about_content_subTitle}>از تیمی سه نفره تا خانواده‌‌ای 200 نفره</span>
                        <p className={style.about_content_desc}>داستان بن‌مانو داستان رشد بذر قهوه است؛ همان بذری که از دل خاک جوانه زد و در تمامی این سال‌ها با ذوق زیر نور خورشید نشست تا قدش بلند و بلندتر شود. بذر ما در یکی از روزهای گرم اولین ماه تابستان کاشته شد و ریشه آن هر روز در خاک محکم‌تر شد تا درخت آن به ثمر بنشیند. سال‌های زیادی گذشت، ما در کنار شما رشد کردیم و علاقه مشترک‌مان یعنی قهوه، انگیزه گفت‌وگوهای بسیار و دست یافتن به یک ماموریت واضح و مشخص شد: خلق تجربه‌ای یکتا از نوشیدن قهوه‌ای تازه برشت و باکیفیت.</p>
                        <Link href="#" className={`${style.about_content_link} ${'showMore'}`}>تماس با ما</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About