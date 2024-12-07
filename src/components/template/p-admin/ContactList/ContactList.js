"use client"
import React from 'react';
import style from './ContactList.module.css'
import swal from 'sweetalert';

function ContactList({messages}) {

  const handlerRemovedMessage = (messageID)=>{
    console.log("messageID" , messageID)
      swal({
        title:"آیا از حذف پیام اطمینان دارید ؟",
        icon:"error",
        buttons:["نه","آره"]
      }).then(async (result)=>{
        if(result){
          const res = await fetch(`/api/contact/${messageID}`,{
            method: "DELETE"
          });
          
          if(res.status === 200 ){
            swal({
              title:"پیام مورد نظر شما با موفقیت حذف شد",
              icon:"success",
              buttons:"متوجه شدم"
            }).then(()=>{
              location.reload()
            })
          }

        }
      })
  }

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
            
          {messages.length > 0 ?  messages.map((message)=>(
            <tr key={message._id}>
              <td>{message._id}</td>
              <td>{message.username}</td>
              <td>{message.email}</td>
              <td>{message.phone}</td>
              <td>
                <button>مشاهده پیام</button>
                <button
                  onClick={()=>handlerRemovedMessage(message._id)}
                >حذف</button>
                </td>
            </tr>
            )) : (
              <span className={style.contactList_empty}>هیج پیام وجود ندارد</span>
            )}
            {/* می‌توانید ردیف‌های بیشتری اضافه کنید */}
          </tbody>
        </table>
      </div>
    </div>
  </section>
  )
}

export default ContactList