import React from 'react';
import style from './Details.module.css';

function Details({product}) {
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
                        <span className={style.details_item_text}>{product.name}</span>
                    </li>
                    <li className={style.details_item}>
                        <span className={style.details_item_title}>گونه :</span>
                        <span className={style.details_item_text}>{product.model}</span>
                    </li>
                    <li className={style.details_item}>
                        <span className={style.details_item_title}>روش فرآوری :</span>
                        <span className={style.details_item_text}>{product.method}</span>
                    </li>
                    <li className={style.details_item}>
                        <span className={style.details_item_title}>منطقه رشد :</span>
                        <span className={style.details_item_text}>{product.growRegion}</span>
                    </li>
                    <li className={style.details_item}>
                        <span className={style.details_item_title}>طعم یاد :</span>
                        <span className={style.details_item_text}>{product.taste}</span>
                    </li>
                    <li className={style.details_item}>
                        <span className={style.details_item_title}>شیرینی :</span>
                        <span className={style.details_item_text}>{product.sweet}</span>
                    </li>
                    <li className={style.details_item}>
                        <span className={style.details_item_title}>جان مایه بادی :</span>
                        <span className={style.details_item_text}>{product.liquid}</span>
                    </li>
                    <li className={style.details_item}>
                        <span className={style.details_item_title}>اسیدیته :</span>
                        <span className={style.details_item_text}>{product.acidity}</span>
                    </li>
                    <li className={style.details_item}>
                        <span className={style.details_item_title}>دم افزار پیشنهادی :</span>
                        <span className={style.details_item_text}> های موج سوم</span>
                    </li>
                    <li className={style.details_item}>
                        <span className={style.details_item_title}>نوع بسته بندی</span>
                        <span className={style.details_item_text}> {product.software} </span>
                    </li>
                </ul>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <ul className={style.details_items}>
                    <li className={style.details_item}>
                        <span className={style.details_item_title}>زیرگونه :</span>
                        <span className={style.details_item_text}> {product.subModel}</span>
                    </li>
                    <li className={style.details_item}>
                        <span className={style.details_item_title}>مواد تشکیل دهنده :</span>
                        <span className={style.details_item_text}>{product.materials}</span>
                    </li>
                    <li className={style.details_item}>
                        <span className={style.details_item_title}>ارتفاع :</span>
                        <span className={style.details_item_text}>{product.heigh}</span>
                    </li>
                    <li className={style.details_item}>
                        <span className={style.details_item_title}>میزان کافئین :</span>
                        <span className={style.details_item_text}>{product.caffeine}</span>
                    </li>
                    <li className={style.details_item}>
                        <span className={style.details_item_title}>پس طعم :</span>
                        <span className={style.details_item_text}>{product.beforeTaste}</span>
                    </li>
                    <li className={style.details_item}>
                        <span className={style.details_item_title}>رایحه :</span>
                        <span className={style.details_item_text}>{product.scent}</span>
                    </li>
                    <li className={style.details_item}>
                        <span className={style.details_item_title}>درجه برشته کاری :</span>
                        <span className={style.details_item_text}>{product.roastCurry}</span>
                    </li>
                    <li className={style.details_item}>
                        <span className={style.details_item_title}>میزان تلخی :</span>
                        <span className={style.details_item_text}>{product.bitterness}</span>
                    </li>
                    <li className={style.details_item}>
                        <span className={style.details_item_title}>ابعاد بسته بندی :</span>
                        <span className={style.details_item_text}>{product.dimensionsPack}</span>
                    </li>
                    <li className={style.details_item}>
                        <span className={style.details_item_title}>ساخت :</span>
                        <span className={style.details_item_text}>{product.create}</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Details