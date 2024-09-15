import React from 'react';
import style from './Breadcrumb.module.css';
import Link from 'next/link';

function Breadcrumb({name}) {
  return (
    <section className={style.Breadcrumb}>
        <div className="containers">
            <div className="row">
                <div className="col-12">
                    <div className={style.breadcrumb_content}>
                        <Link href="/" className={style.breadcrumb_link}>خانه</Link>
                        <span className={style.breadcrumb_pageName}>. {name}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Breadcrumb