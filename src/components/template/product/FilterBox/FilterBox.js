"use client"
import React, { useState } from 'react';
import style from './FilterBox.module.css';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';

function FilterBox() {
    const [filter , setFilter] = useState(false);

    const handlerShowFilter = ()=>{
        setFilter(!filter)
    }
    
  return (
    <div className={filter ? style.filterBox_active : style.filterBox}>
    <div className={filter ? style.filterBox_titleIcon_active : style.filterBox_titleIcon} onClick={handlerShowFilter}>
        <span className={style.filterBox_title}>گونه</span>
        <span className={style.filterBox_icon}>
            {filter ? (
                <MdOutlineKeyboardArrowUp/>
            ):(
            <MdOutlineKeyboardArrowDown/>
            )}
        </span>
    </div>
    {filter && (
    <div className={style.filterBox_content}>
        <div className={style.filterBox_checkBox}>
            <input type="checkbox" className={style.filterBox_checkBox_input}  />
            <span className={style.filterBox_checkBox_text}>عربیکا</span>
        </div>
        <div className={style.filterBox_checkBox}>
            <input type="checkbox" className={style.filterBox_checkBox_input}  />
            <span className={style.filterBox_checkBox_text}>عربیکا</span>
        </div>
    </div>
    )}
</div>
  )
}

export default FilterBox