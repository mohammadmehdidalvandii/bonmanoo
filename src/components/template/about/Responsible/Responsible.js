import React from 'react';
import style from './Responsible.module.css';

function Responsible() {
  return (
    <section className={style.responsible}>
        <div className="containers">
            <div className="row">
                <div className="col-12">
                    <h4 className={style.responsible_title}>مسئولیت های اجتماعی بن مانو </h4>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-lg-3 col-md-4  col-sm-6 col-xs-12">
                <div className={style.responsible_item}>
                            <img src="/assets/images/ress.webp" alt="" className={style.responsible_img} />
                            <span className={style.responsible_text}>حمایت از موسسه خیریه کودکان اتیسم ایران</span>
                        </div>
                </div>
                <div className="col-lg-3 col-md-4  col-sm-6 col-xs-12">
                <div className={style.responsible_item}>
                            <img src="/assets/images/ress.webp" alt="" className={style.responsible_img} />
                            <span className={style.responsible_text}>حمایت از موسسه خیریه کودکان اتیسم ایران</span>
                        </div>
                </div>
                <div className="col-lg-3 col-md-4  col-sm-6 col-xs-12">
                <div className={style.responsible_item}>
                            <img src="/assets/images/ress.webp" alt="" className={style.responsible_img} />
                            <span className={style.responsible_text}>حمایت از موسسه خیریه کودکان اتیسم ایران</span>
                        </div>
                </div>
                <div className="col-lg-3 col-md-4  col-sm-6 col-xs-12">
                <div className={style.responsible_item}>
                            <img src="/assets/images/ress.webp" alt="" className={style.responsible_img} />
                            <span className={style.responsible_text}>حمایت از موسسه خیریه کودکان اتیسم ایران</span>
                        </div>
                </div>
               
            </div>
        </div>
    </section>
  )
}

export default Responsible