import React from 'react';
import style from './Dashboard.module.css';

function Dashboard() {
  return (
    <section className={style.dashboard}>
        <div className="container">
            <div className="row">
                <h6 className="admin-title">گزارش روزانه</h6>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="boxPanel">
                        <span className={style.dashboard_item_title}>تعداد محصول فروش امروز</span>
                        <span className={style.dashboard_item_text}> 0 عدد</span>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="boxPanel">
                        <span className={style.dashboard_item_title}>مجموعه فروش امروز</span>
                        <span className={style.dashboard_item_text}>0 تومان</span>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="boxPanel">
                        <span className={style.dashboard_item_title}>تعداد کاربران امروز</span>
                        <span className={style.dashboard_item_text}>0 عدد</span>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="boxPanel">
                        <span className={style.dashboard_item_title}>پیام های جدید</span>
                        <span className={style.dashboard_item_text}>0 عدد</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Dashboard