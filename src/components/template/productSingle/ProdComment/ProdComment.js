import React from 'react';
import style from './ProdComment.module.css';
import { FaUser } from 'react-icons/fa';

function ProdComment() {
  return (
    <section className={style.prodComment}>
        <div className="containers">
            <div className="row">
                <div className="col-12">
                    <h5 className={style.prodComment_title}>نظرات کاربران</h5>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-12">
                    <span className={style.prodComment_warning}>فقط مشتریانی که این محصول را خریداری کرده‌اند می‌توانند برای این محصول نظر ارسال کنند.</span>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-12">
                    <div className={style.prodComment_cart}>
                        <div className={style.prodComment_cart_userNameDate}>
                            <div className={style.prodComment_cart_username}>
                                <span className={style.prodComment_cart_username_icon}>
                                    <FaUser/>
                                </span>
                                <span className={style.prodComment_cart_username_text}>
                                    جواد اشراقی
                                </span>
                            </div>
                            <span className={style.prodComment_cart_date}>19 شهریور 1403</span>
                        </div>
                        <p className={style.prodComment_cart_desc}>عالی طعم بینظیر</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProdComment