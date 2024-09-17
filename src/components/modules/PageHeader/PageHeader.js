import React from 'react';
import style from './PageHeader.module.css';

function PageHeader({title}) {
  return (
    <section className={style.pageHeader}>
        <div className="containers">
            <div className="row">
                <div className="col-12">
                    <div className={style.pageHeader_content}>
                        <h5 className={style.pageHeader_title}>{title}</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default PageHeader