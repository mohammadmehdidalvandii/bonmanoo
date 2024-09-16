import React from 'react'
import style from './Counter.module.css';

function Counter() {
  return (
    <section className={style.counter}>
        <div className="containers">
                    <div className={style.counter_wrapper}>
                        <div className={style.counter_item}>
                            <h4 className={style.counter_item_number}>300</h4>
                            <span className={style.counter_item_text}>کارکنان</span>
                        </div>
                        <div className={style.counter_item}>
                            <h4 className={style.counter_item_number}>500</h4>
                            <span className={style.counter_item_text}>شرکای تجاری</span>
                        </div>
                        <div className={style.counter_item}>
                            <h4 className={style.counter_item_number}>2 M</h4>
                            <span className={style.counter_item_text}>کاربرفعال</span>
                        </div>
          </div>
        </div>
    </section>
  )
}

export default Counter