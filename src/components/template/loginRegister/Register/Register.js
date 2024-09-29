import React from 'react';
import style from './Register.module.css';

function Register() {
  return (
    <section className={style.register}>
        <div className={style.register_wrapper}>
            <div className={style.register_content}>
                <h5 className={style.register_title}>ثبت نام</h5>
                <span className={style.register_desc}>اگر ثبت نام نکردی اطلاعات  زیرا وارد کن!</span>
            </div>
            <form action="#" className="form">
                <div className="formBox">
                    <label  className="formBox_label">ایمیل</label>
                    <input type="text" className="formBox_input"  placeholder='example@gmail.com'/>
                </div>
                <div className="formBox">
                    <label  className="formBox_label">شماره همراه</label>
                    <input type="text" className="formBox_input"  placeholder='example@gmail.com'/>
                </div>
                <div className="formBox">
                    <label  className="formBox_label">نام و نام خانوادگی</label>
                    <input type="text" className="formBox_input"  placeholder='example@gmail.com'/>
                </div>
                <div className="formBox">
                    <label  className="formBox_label">رمزعبور</label>
                    <input type="text" className="formBox_input"  placeholder='example@gmail.com'/>
                </div>
             
                <button className="formSubmit">ثبت نام</button>
            </form>
        </div>
    </section>
  )
}

export default Register