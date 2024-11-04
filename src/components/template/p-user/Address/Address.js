import React from 'react';
import style from './Address.module.css';
import Link from 'next/link';
import { FaPlus, FaTimes } from 'react-icons/fa';

function Address() {
  return (
    <section className={style.address}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Link href='/P-user/Add-Address' className={style.address_link}>
                        <span className={style.address_link_icon}>
                            <FaPlus/>
                        </span>
                        <span className={style.address_link_text}>افزودن آدرس</span>
                    </Link>
                </div>
            </div>
            <div className="row mt-5 row-gap-4">
                <h6 className="user-title">لیست آدرس ها</h6>
                <div className="col-lg-3 col-md-4 col-sm-6 col-md-12">
                    <div className="boxPanel">
                        <div className={style.address_item}>
                            <span className={style.address_item_exit}>
                                <FaTimes/>
                            </span>
                            <div className={style.address_item_content}>
                                <span className={style.address_item_title}>بروجرد</span>
                                <p className={style.address_item_paraph}>لرستان بروجرد خیابان فاطمی ار سمت شهدا بعداز پل ساختمان 5 طبقه پلاک 71و73 زنگ 6 </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-md-12">
                    <div className="boxPanel">
                        <div className={style.address_item}>
                            <span className={style.address_item_exit}>
                                <FaTimes/>
                            </span>
                            <div className={style.address_item_content}>
                                <span className={style.address_item_title}>بروجرد</span>
                                <p className={style.address_item_paraph}>لرستان بروجرد خیابان فاطمی ار سمت شهدا بعداز پل ساختمان 5 طبقه پلاک 71و73 زنگ 6 </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-md-12">
                    <div className="boxPanel">
                        <div className={style.address_item}>
                            <span className={style.address_item_exit}>
                                <FaTimes/>
                            </span>
                            <div className={style.address_item_content}>
                                <span className={style.address_item_title}>بروجرد</span>
                                <p className={style.address_item_paraph}>لرستان بروجرد خیابان فاطمی ار سمت شهدا بعداز پل ساختمان 5 طبقه پلاک 71و73 زنگ 6 </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-md-12">
                    <div className="boxPanel">
                        <div className={style.address_item}>
                            <span className={style.address_item_exit}>
                                <FaTimes/>
                            </span>
                            <div className={style.address_item_content}>
                                <span className={style.address_item_title}>بروجرد</span>
                                <p className={style.address_item_paraph}>لرستان بروجرد خیابان فاطمی ار سمت شهدا بعداز پل ساختمان 5 طبقه پلاک 71و73 زنگ 6 </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-md-12">
                    <div className="boxPanel">
                        <div className={style.address_item}>
                            <span className={style.address_item_exit}>
                                <FaTimes/>
                            </span>
                            <div className={style.address_item_content}>
                                <span className={style.address_item_title}>بروجرد</span>
                                <p className={style.address_item_paraph}>لرستان بروجرد خیابان فاطمی ار سمت شهدا بعداز پل ساختمان 5 طبقه پلاک 71و73 زنگ 6 </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Address