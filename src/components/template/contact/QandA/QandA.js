import React from 'react';
import style from './QandA.module.css';
import Link from 'next/link';

function QandA() {
  return (
    <section className={style.qanda}>
        <div className="containers">
            <div className="row">
                <div className="col-12">
                    <Link href="#" className={style.qanda_link}>
                        <img src="/assets/images/quesAan.webp" alt="ask and quse" className={style.qanda_img} />
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default QandA