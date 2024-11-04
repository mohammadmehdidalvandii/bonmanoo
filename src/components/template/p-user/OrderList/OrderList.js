import React from 'react';
import style from './OrderList.module.css';

function OrderList() {
  return (
    <section className={style.orderList}>
      <div className="container">
        <h6 className="user-title">لیست سفارشات</h6>
        <div className="boxPanel">
          <table className={style.orderList_table}>
            <thead>
              <tr>
                <th>شماره سفارش</th>
                <th>نام مشتری</th>
                <th>تاریخ سفارش</th>
                <th>مجموع مبلغ</th>
                <th>وضعیت</th>
                <th>عملیات</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1001</td>
                <td>علی رضایی</td>
                <td>1402/01/15</td>
                <td>500,000 تومان</td>
                <td>در حال پردازش</td>
                <td><button>جزئیات</button></td>
              </tr>
              <tr>
                <td>1002</td>
                <td>مریم محمدی</td>
                <td>1402/01/16</td>
                <td>300,000 تومان</td>
                <td>تحویل داده شده</td>
                <td><button>جزئیات</button></td>
              </tr>
              <tr>
                <td>1003</td>
                <td>سعید احمدی</td>
                <td>1402/01/17</td>
                <td>150,000 تومان</td>
                <td>لغو شده</td>
                <td><button>جزئیات</button></td>
              </tr>
              {/* می‌توانید ردیف‌های بیشتری اضافه کنید */}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default OrderList;