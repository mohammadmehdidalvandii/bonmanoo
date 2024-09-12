import React from "react";
import style from "./Titles.module.css";

function Titles({subTitle , title}) {
  return (
    <div className={style.titles}>
      <span className={style.titles_subTitle}>{subTitle}</span>
      <h5 className={style.titles_title}>{title}</h5>
    </div>
  );
}

export default Titles;
