import React from 'react'
import style from './Users.module.css';

function Users({users}) {

  return (
    <section className={style.users}>
    <div className="container">
      <h6 className="user-title">لیست سفارشات</h6>
      <div className="boxPanel">
        <table className={style.users_table}>
          <thead>
            <tr>
              <th>شماره ID</th>
              <th>نام و نام خانوادگی</th>
              <th>ایمیل</th>
              <th>شماره همراه</th>
              <th>سمت</th>
              <th>عملیات</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user)=>(
               <tr key={user._id}>
               <td>{user._id}</td>
               <td>{user.username}</td>
               <td>{user.email}</td>
               <td>{user.phone}</td>
               <td>{user.role}</td>
               <td>
                 <button>حذف</button>
                 <button>بن</button>
                 <button>ادمین</button>
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

export default Users