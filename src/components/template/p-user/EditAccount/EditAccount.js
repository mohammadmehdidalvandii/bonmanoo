import React from 'react';
import style from './EditAccount.module.css';

function EditAccount() {
  return (
   <section className={style.editAccount}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="boxPanel">
                            <img src="" alt="your Image" className={style.editAccount_img} />
                        <form action="" className={style.editAccount_form}>
                            <div className={style.editAccount_formBox}>
                                <label htmlFor="" className={style.editAccount_formBox_label}>عکس</label>
                                <input type="file" className={style.editAccount_formBox_input}  placeholder=''/>
                            </div>
                            <div className={style.editAccount_formBox}>
                                <label htmlFor="" className={style.editAccount_formBox_label}>نام</label>
                                <input type="text" className={style.editAccount_formBox_input}  placeholder='محمدمهدی'/>
                            </div>
                            <div className={style.editAccount_formBox}>
                                <label htmlFor="" className={style.editAccount_formBox_label}>نام خانوادگی</label>
                                <input type="text" className={style.editAccount_formBox_input}  placeholder='دالوندی'/>
                            </div>
                            <div className={style.editAccount_formBox}>
                                <label htmlFor="" className={style.editAccount_formBox_label}>نام نمایشی</label>
                                <input type="text" className={style.editAccount_formBox_input}  placeholder='محمدمهدی دالوندی'/>
                            </div>
                            <div className={style.editAccount_formBox}>
                                <label htmlFor="" className={style.editAccount_formBox_label}>ایمیل</label>
                                <input type="text" className={style.editAccount_formBox_input}  placeholder='mhmdmehdidalvnadi@gmail.com'/>
                            </div>
                            <button className={`${'showMore'} ${style.editAccount_form_submit}`}>ثبت</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
   </section>
  )
}

export default EditAccount