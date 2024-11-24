"use client"
import React, { useState } from 'react';
import style from './Register.module.css';
import { showSwal } from '@/utils/helpers';
import { validationPassword, validationPhone } from '@/utils/auth';
import swal from 'sweetalert';
import { useRouter } from 'next/navigation';

function Register() {
    const router = useRouter()
    const [username , setUsername] = useState("");
    const [email , setEmail] = useState("");
    const [phone , setPhone] = useState("");
    const [password , setPassword] = useState("");

    const handlerRegister = async (e)=>{
        e.preventDefault()
        if(!username.trim()){
            return showSwal("نام خود را وارد کنید .","error","تلاش مجدد")
        } else if(username.length < 5 ){
           return  showSwal("نام کاربری باید از 5 حروف بیشتر باشد","error","تلاش مجدد")
        }
        if(!email.trim()){
            return showSwal("مقدار ایمیل  وارد کنید","error","تلاش مجدد")
        }
        const isValidPhone = validationPhone(phone);
        if(!isValidPhone){
            return showSwal("شماره تماس وارد شد معتبر نیست .","error","تلاش مجدد")
        }
        if(!password.trim()){
            return showSwal("مقدار رمزعبور وارد کنید","error","تلاش مجدد")
        } 
        const isValidPassword = validationPassword(password);
        if(!isValidPassword){
            return showSwal("مقدار رمزعبور معتبر نیست شامل(@ % $  حروف بزرگ و کوچیک) باشد","error","تلاش مجدد")
        }

        const user = {username , email , phone , password};


        const res = await fetch("/api/auth/signup",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(user)
        });
        if(res.status === 201 ){
            swal({
                title:"ثبت نام با موفقیت انجام شد",
                icon:"success",
                buttons:"متوجه شدم"
            }).then(()=>{
                    router.refresh()
            })
        } else if(res.status === 422){
            showSwal("کاربری با این اطلاعات وجود ندارد","error","تلاش مجدد")
        }

    }

  return (
    <section className={style.register}>
        <div className={style.register_wrapper}>
            <div className={style.register_content}>
                <h5 className={style.register_title}>ثبت نام</h5>
                <span className={style.register_desc}>اگر ثبت نام نکردی اطلاعات  زیرا وارد کن!</span>
            </div>
            <form action="#" className="form">
                <div className="formBox">
                    <label  className="formBox_label">نام و نام خانوادگی </label>
                    <input
                     type="text"
                     value={username}
                     onChange={(e)=>{setUsername(e.target.value)}}
                     className="formBox_input" 
                     placeholder='مهدی برهانی'/>
                </div>
                <div className="formBox">
                    <label  className="formBox_label">شماره همراه</label>
                    <input
                     type="text"
                     value={phone}
                     onChange={(e)=>{setPhone(e.target.value)}}
                     className="formBox_input" 
                     placeholder='0939090909'/>
                </div>
                <div className="formBox">
                    <label  className="formBox_label">email</label>
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
                     placeholder='***********'/>
                </div>
             
                <button className="formSubmit" type='submit' onClick={handlerRegister}>ثبت نام</button>
            </form>
        </div>
    </section>
  )
}

export default Register