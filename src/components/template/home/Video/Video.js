import React from 'react';
import style from './Video.module.css';
import Link from 'next/link';

function Video() {
  return (
    <section className={style.video}>
        <video autoPlay loop muted  preload="none"className={style.video_vid}  >
            <source src='/assets/video/homeVideo.mp4' type='video/mp4'/>
        </video>
        <div className="containers">
            <div className={style.video_content}>
                <h4 className={style.video_content_title}>راهنمای دم‌آوری قهوه</h4>
                <p className={style.video_content_paraph}>برای علاقه‌مندان به قهوه که می‌خواهند فنجان قهوه بهتری را در خانه دم‌آوری کنند. باریستاهای ما، انواع روش‌ها با هر دم‌افزاری که فکرش را بکنید آموزش
                دادند تا یک قهوه باکیفیت دقیقا همان‌طوری که دوست دارید دم‌آوری کنید.</p>
                <Link href="#" className={style.video_link}>بیشتر ببینید</Link>
            </div>
        </div>
    </section>
  )
}

export default Video