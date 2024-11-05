import React from 'react';
import style from './Credit.module.css';

function Credit() {
  return (
    <section className={style.credit}>
        <div className="container">
            <div className="row row-gap-4">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="boxPanel">
                        <div className={style.credit_item}>
                            <h5 className={style.credit_item_title}>مجموع اعتبارها</h5>
                            <span className={style.credit_item_price}> 0 تومان</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="boxPanel">
                        <div className={style.credit_item}>
                            <h5 className={style.credit_item_title}>اعتبار استفاده شده</h5>
                            <span className={style.credit_item_price}> 0 تومان</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="boxPanel">
                        <div className={style.credit_item}>
                            <h5 className={style.credit_item_title}>اعتبار باقی مانده</h5>
                            <span className={style.credit_item_price}> 0 تومان</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Credit