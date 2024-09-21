import React from 'react';
import style from './Details.module.css';

function Details() {
  return (
    <section className={style.details}>
        <div className="row">
            <div className="col-12">
                <h5 className={style.details_title}>معرفی محصول</h5>
            </div>
        </div>
        <div className="row mt-4">
            <div className="col-lg-6 col-md-6 col-sm-12">
                <ul className={style.details_items}>
                    <li className={style.details_item}>
                        <span className={style.details_item_title}>نام محصول :</span>
                        <span className={style.details_item_text}>دانه قهوه </span>
                    </li>
                    <li className={style.details_item}>
                        <span className={style.details_item_title}>گونه :</span>
                        <span className={style.details_item_text}>بورین</span>
                    </li>
                    <li className={style.details_item}>
                        <span className={style.details_item_title}>روش فرآوری :</span>
                        <span className={style.details_item_text}>شسته تخمیری</span>
                    </li>
                    <li className={style.details_item}>
                        <span className={style.details_item_title}>منطقه رشد :</span>
                        <span className={style.details_item_text}>Quindio</span>
                    </li>
                    <li className={style.details_item}>
                        <span className={style.details_item_title}>طعم یاد :</span>
                        <span className={style.details_item_text}>میوه های   قرمز </span>
                    </li>
                    <li className={style.details_item}>
                        <span className={style.details_item_title}>شیرینی :</span>
                        <span className={style.details_item_text}>بالا</span>
                    </li>
                    <li className={style.details_item}>
                        <span className={style.details_item_title}>جان مایه بادی :</span>
                        <span className={style.details_item_text}>متوسط</span>
                    </li>
                    <li className={style.details_item}>
                        <span className={style.details_item_title}>اسیدیته :</span>
                        <span className={style.details_item_text}>متوسط روبه بالا</span>
                    </li>
                    <li className={style.details_item}>
                        <span className={style.details_item_title}>دم افزار پیشنهادی :</span>
                        <span className={style.details_item_text}>ابزار های موج سوم</span>
                    </li>
                    <li className={style.details_item}>
                        <span className={style.details_item_title}>نوع بسته بندی</span>
                        <span className={style.details_item_text}>پاکت 3 لایه</span>
                    </li>
                </ul>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <ul className={style.details_items}>
                    <li className={style.details_item}>
                        <span className={style.details_item_title}>زیرگونه :</span>
                        <span className={style.details_item_text}>Pink Bourbon</span>
                    </li>
                    <li className={style.details_item}>
                        <span className={style.details_item_title}>مواد تشکیل دهنده :</span>
                        <span className={style.details_item_text}>دانه قهوه</span>
                    </li>
                    <li className={style.details_item}>
                        <span className={style.details_item_title}>ارتفاع :</span>
                        <span className={style.details_item_text}>1530-1650 متر</span>
                    </li>
                    <li className={style.details_item}>
                        <span className={style.details_item_title}>میزان کافئین :</span>
                        <span className={style.details_item_text}>کم</span>
                    </li>
                    <li className={style.details_item}>
                        <span className={style.details_item_title}>پس طعم :</span>
                        <span className={style.details_item_text}>متوسط</span>
                    </li>
                    <li className={style.details_item}>
                        <span className={style.details_item_title}>رایحه :</span>
                        <span className={style.details_item_text}>آجیلی و گلی</span>
                    </li>
                    <li className={style.details_item}>
                        <span className={style.details_item_title}>درجه برشته کاری :</span>
                        <span className={style.details_item_text}>مدیوم</span>
                    </li>
                    <li className={style.details_item}>
                        <span className={style.details_item_title}>میزان تلخی :</span>
                        <span className={style.details_item_text}>کم</span>
                    </li>
                    <li className={style.details_item}>
                        <span className={style.details_item_title}>ابعاد بسته بندی :</span>
                        <span className={style.details_item_text}>5*12*8 سانتی متر</span>
                    </li>
                    <li className={style.details_item}>
                        <span className={style.details_item_title}>ساخت :</span>
                        <span className={style.details_item_text}>ایران</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Details