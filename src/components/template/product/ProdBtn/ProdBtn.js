import React from 'react';
import style from './ProdBtn.module.css'

function ProdBtn() {
  return (
    <button className={style.ProdBtn_btn}>
    <div className={style.ProdBtn_btn_box}>
        <span className={style.ProdBtn_btn_boxIcon}>
            <img src="/assets/images/home-1.svg" alt="icon image" className={style.ProdButtons_btn_box_img} />
        </span>
    </div>
    <span className={style.ProdBtn_btn_text}>نورسکا</span>
</button>
  )
}

export default ProdBtn