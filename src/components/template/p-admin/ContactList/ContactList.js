import React from 'react';
import style from './ContactList.module.css'

function ContactList() {
  return (
    <section className={style.contactList}>
    <div className="container">
      <h6 className="user-title">لیست پیام ها</h6>
      <div className="boxPanel">
        <table className={style.contactList_table}>
          <thead>
            <tr>
              <th>شماره ID</th>
              <th>نام </th>
              <th>تاریخ پیام</th>
              <th>ایمیل</th>
              <th>شماره</th>
              <th>عملیات</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1001</td>
              <td>علی رضایی</td>
              <td>1402/01/15</td>
              <td>ali@gmail.com</td>
              <td>0912000000</td>
              <td>
                <button>مشاهده پیام</button>
                <button>حذف</button>
                </td>
            </tr>
            {/* می‌توانید ردیف‌های بیشتری اضافه کنید */}
          </tbody>
        </table>
      </div>
    </div>
  </section>
  )
}

export default ContactList