import React from 'react';
import style from './Reports.module.css';

function Reports() {
  return (
    <section className={style.reports}>
        <div className="container">
            <div className="row">
                <h6 className="admin-title">دریافت گزارش ها</h6>
                <div className="col-12">
                <div className="boxPanel">
        <table className={style.reports_table}>
          <thead>
            <tr>
              <th>شماره ID</th>
              <th>ماه</th>
              <th>تاریخ </th>
              <th>عملیات</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1001</td>
              <td>اردیبهشت</td>
              <td>1402/02/15</td>
              <td>
                <button>دریافت</button>
                </td>
            </tr>
            <tr>
              <td>1001</td>
              <td>اردیبهشت</td>
              <td>1402/02/15</td>
              <td>
                <button>دریافت</button>
                </td>
            </tr>
            <tr>
              <td>1001</td>
              <td>اردیبهشت</td>
              <td>1402/02/15</td>
              <td>
                <button>دریافت</button>
                </td>
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

export default Reports