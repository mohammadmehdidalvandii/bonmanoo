import React from 'react';
import style from './Login.module.css';
import Link from 'next/link';

function Login() {
  return (
    <section className={style.login}>
        <div className={style.login_wrapper}>
            <div className={style.login_content}>
                <h5 className={style.login_title}>ورود</h5>
                <span className={style.login_desc}>اگر ثبت نام کردی اطلاعات  زیرا وارد کن!</span>
            </div>
            <form action="#" className="form">
                <div className="formBox">
                    <label  className="formBox_label">ایمیل</label>
                    <input type="text" className="formBox_input"  placeholder='example@gmail.com'/>
                </div>
                <div className="formBox">
                    <label  className="formBox_label">رمزعبور</label>
                    <input type="text" className="formBox_input"  placeholder='example@gmail.com'/>
                </div>
                <div className="formRemember">
                    <input type="checkbox" name="" id="" className='formRemember_input'/>
                    <span className="formRemember_text">مرا به خاطر بسپار</span>
                </div>
                <Link href="/ForgetPassword" className="formForgetPassword">رمز عبور خود را فراموش کردی؟</Link>
                <button className="formSubmit">ورود</button>
            </form>
        </div>
    </section>
  )
}

export default Login