import React from 'react';
import style from './TopBar.module.css';
import { FaUser } from 'react-icons/fa';

function TopBar() {
  return (
   <section className={style.topBar}>
        <div className={style.topBar_container}>
            <div className={style.topBar_wrapper}>
                <div className={style.topBar_right}>
                    <div className={style.topBar_account}>
                        <span className={style.topBar_account_icon}>
                            <FaUser/>
                        </span>
                        <span className={style.topBar_account_name}>
                            محمدمهدی دالوندی
                        </span>
                        <span className={style.topBar_account_side}></span>
                        <span className={style.topBar_account_role}>مشتری</span>
                    </div>
                </div>
                <div className={style.topBar_left}>
                    <div className={style.topBar_date}>
                        <span className={style.topBar_date_text}>13 آبان 1403</span>
                    </div>
                </div>
            </div>
        </div>
   </section>
  )
}

export default TopBar