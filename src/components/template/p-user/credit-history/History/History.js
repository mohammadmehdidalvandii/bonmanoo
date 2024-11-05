import React from 'react';
import style from './History.module.css'

function History() {
  return (
    <section className={style.history}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="boxPanel">
                    <table className={style.history_table}>
            <thead>
              <tr>
                <th>شماره سفارش</th>
                <th>نام محصول</th>
                <th>تاریخ سفارش</th>
                <th>مجموع مبلغ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1001</td>
                <td>قهوه کپسولی time</td>
                <td>1402/01/15</td>
                <td>500,000 تومان</td>
              </tr>
              {/* می‌توانید ردیف‌های بیشتری اضافه کنید */}
            </tbody>
          </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default History