import React from 'react';
import style from './ContactList.module.css'

function ContactList({messages}) {
  console.log("messages=> ", messages)
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
              <th>ایمیل</th>
              <th>شماره</th>
              <th>عملیات</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message)=>(
            <tr key={message._id}>
              <td>{message._id}</td>
              <td>{message.username}</td>
              <td>{message.email}</td>
              <td>{message.phone}</td>
              <td>
                <button>مشاهده پیام</button>
                <button>حذف</button>
                </td>
            </tr>
            ))}
            {/* می‌توانید ردیف‌های بیشتری اضافه کنید */}
          </tbody>
        </table>
      </div>
    </div>
  </section>
  )
}

export default ContactList