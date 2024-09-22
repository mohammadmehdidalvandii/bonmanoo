import React from 'react';
import style from './Tag.module.css';

function Tag() {
  return (
    <section className={style.tag}>
        <div className="row">
            <div className="col-12">
                <ul className={style.tag_items}>
                    <li className={style.tag_item}>قهوه 100% عربیکا</li>
                    <li className={style.tag_item}>قهوه 100% عربیکا</li>
                    <li className={style.tag_item}>قهوه 100% عربیکا</li>
                    <li className={style.tag_item}>قهوه 100% عربیکا</li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Tag