import React from 'react';
import style from './ProdBtn.module.css'

function ProdBtn({handlerChangeProduct , name}) {
  return (
    <button className={style.ProdBtn_btn} onClick={handlerChangeProduct}>
    <div className={style.ProdBtn_btn_box}>
        <span className={style.ProdBtn_btn_boxIcon}>
            <img src="/assets/images/home-1.svg" alt="icon image" className={style.ProdButtons_btn_box_img} />
        </span>
    </div>
    <span className={style.ProdBtn_btn_text}>{name}</span>
</button>
  )
}

export default ProdBtn