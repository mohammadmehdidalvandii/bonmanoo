import React from "react";
import style from "./Dashboard.module.css";

function Dashboard() {
  return (
    <section className={style.dashboard}>
      <div className="containers">
        <div className="row">
          <div className="col-lg-5 col-md-3 col-sm-12">
            <h6 className={style.dashboard_title}>اطلاعات سفارش ها</h6>
            <div className="boxPanel">
              <ul className={style.dashboard_order_items}>
                <li className={style.dashboard_order_item}>
                  <span className={style.dashboard_order_title}>
                    تعداد کل سفارش :
                  </span>
                  <span className={style.dashboard_order_text}>0 عدد</span>
                </li>
                <li className={style.dashboard_order_item}>
                  <span className={style.dashboard_order_title}>
                    جمع کل سفارش ها :
                  </span>
                  <span className={style.dashboard_order_text}>0 تومان</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-7 col-md-9 col-sm-12">
          <h6 className={style.dashboard_title}>جزئیات سفارش ها</h6>
            <div className={style.dashboard_wrapper}>
              <ul className={style.dashboard_items}>
                <div className="boxPanel">
                  <li className={style.dashboard_item}>
                    <span className={style.dashboard_item_title}>
                      تکمیل شده
                    </span>
                    <span className={style.dashboard_item_text}>0</span>
                  </li>
                </div>
                <div className="boxPanel">
                  <li className={style.dashboard_item}>
                    <span className={style.dashboard_item_title}>
                      در انتظار بررسی
                    </span>
                    <span className={style.dashboard_item_text}>0</span>
                  </li>
                </div>
                <div className="boxPanel">
                  <li className={style.dashboard_item}>
                    <span className={style.dashboard_item_title}>لغو شده</span>
                    <span className={style.dashboard_item_text}>0</span>
                  </li>
                </div>
              </ul>
              <ul className={style.dashboard_items}>
                <div className="boxPanel">
                  <li className={style.dashboard_item}>
                    <span className={style.dashboard_item_title}>
                      منتظر پرداخت
                    </span>
                    <span className={style.dashboard_item_text}>0</span>
                  </li>
                </div>
                <div className="boxPanel">
                  <li className={style.dashboard_item}>
                    <span className={style.dashboard_item_title}>
                      در حال انجام
                    </span>
                    <span className={style.dashboard_item_text}>0</span>
                  </li>
                </div>
                <div className="boxPanel">
                  <li className={style.dashboard_item}>
                    <span className={style.dashboard_item_title}>
                      مرجوع شده
                    </span>
                    <span className={style.dashboard_item_text}>0</span>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div className="row mt-5">
            <div className="col-lg-6 col-md-6 col-sm-12">
            <h6 className={style.dashboard_title}>نظرات شما </h6>
                <div className="boxPanel">
                    <ul className={style.dashboard_comment_items}>
                        <li className={style.dashboard_comment_item}>
                            <span className={style.dashboard_comment_title}>تعداد کل نظرات :</span>
                            <span className={style.dashboard_comment_text}>0 عدد</span>
                        </li>
                        <li className={style.dashboard_comment_item}>
                            <span className={style.dashboard_comment_title}>نظر در انتظار تایید :</span>
                            <span className={style.dashboard_comment_text}>0 عدد</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
