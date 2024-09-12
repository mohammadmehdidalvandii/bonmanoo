import Image from 'next/image'
import React from 'react'
import style from './HomeBtn.module.css';

function HomeBtn() {
  return (
    <button className={style.Home_btn}>
    <span className={style.Home_btn_icon}>
        <Image src="/assets/images/home-1.svg" alt="" width={30} height={30} className={style.Home_btn_img}/>
    </span>   
</button>
  )
}

export default HomeBtn