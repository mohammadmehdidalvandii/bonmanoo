"use client"
import React, { useEffect, useState } from 'react';
import style from './Login.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { showSwal } from '@/utils/helpers';
import { validationEmail, validationPassword } from '@/utils/auth';
import swal from 'sweetalert';


function Login() {
    const router = useRouter();
    const [email , setEmail] = useState();
    const [password , setPassword] = useState();

    const handlerLogin = async (e)=>{
        e.preventDefault();

        if(!email.trim()){
            return showSwal("مقدار ایمیل را وارد کنید","error","تلاش مجدد")
        }
        const isValidEmail = validationEmail(email);
        if(!isValidEmail){
            return showSwal("مقدار وارد شد ایمیل معتبر نیست","error","تلاش مجدد")
        }
        if(!password.trim()){
            return showSwal("مقدار رمزعبور وارد کنید","error","تلاش مجدد")
        }
        const isValidPassword = validationPassword(password);
        if(!isValidPassword){
            return showSwal("مقدار رمزعبور معتبر نیست","error","تلاش مجدد")
        }

        const user = {email , password};

        const res = await fetch('/api/auth/signin',{
            method :"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(user),
        });

        if(res.status === 200){
            return swal({
                title:"با موفقیت لاگین شدید",
                icon:"success",
                buttons:"متوجه شدم"
            }).then(()=>{
                router.replace("/")
            })
        }else if(res.status === 422 || res.status ===401){
            return showSwal("کاربری با این اطلاعات وجود ندارد","error","تلاش مجدد")
        }else if(res.status === 419){
            return showSwal("ایمیل یا رمزعبور صحیح نیست","error","تلاش مجدد")
        }

    }   

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
                    <input
                     type="text"
                     value={email}
                     onChange={(e)=>{setEmail(e.target.value)}}
                     className="formBox_input"
                     placeholder='example@gmail.com'/>
                </div>
                <div className="formBox">
                    <label  className="formBox_label">رمزعبور</label>
                    <input
                     type="password"
                     value={password}
                     onChange={(e)=>{setPassword(e.target.value)}}
                     className="formBox_input" 
                     placeholder='example@gmail.com'/>
                </div>
                <div className="formRemember">
                    <input type="checkbox" name="" id="" className='formRemember_input'/>
                    <span className="formRemember_text">مرا به خاطر بسپار</span>
                </div>
                <Link href="/ForgetPassword" className="formForgetPassword">رمز عبور خود را فراموش کردی؟</Link>
                <button className="formSubmit" type='submit' onClick={handlerLogin}>ورود</button>
            </form>
        </div>
    </section>
  )
}

export default Login