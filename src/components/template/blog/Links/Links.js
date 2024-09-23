import React from 'react';
import style from './Links.module.css';
import Link from 'next/link';

function Links() {
  return (
   <section className={style.links}>
        <div className="row">
            <div className="col-12">
                <div className={style.links_wrapper}>
                    <ul className={style.link_items}>
                        <li className={style.link_item}>
                            <Link href="/" className={style.link_item_link}>
                                <img src='/assets/images/link1.svg' alt='link images' className={style.link_item_icon}/>
                                <span className={style.link_item_text}>محصولات خانگی</span>
                            </Link>
                        </li>
                        <li className={style.link_item}>
                            <Link href="/" className={style.link_item_link}>
                                <img src='/assets/images/link2.svg' alt='link images' className={style.link_item_icon}/>
                                <span className={style.link_item_text}>محصولات هورکا</span>
                            </Link>
                        </li>
                        <li className={style.link_item}>
                            <Link href="/" className={style.link_item_link}>
                                <img src='/assets/images/link3.svg' alt='link images' className={style.link_item_icon}/>
                                <span className={style.link_item_text}>درباره ما</span>
                            </Link>
                        </li>
                        <li className={style.link_item}>
                            <Link href="/" className={style.link_item_link}>
                                <img src='/assets/images/link4.svg' alt='link images' className={style.link_item_icon}/>
                                <span className={style.link_item_text}>تماس با ما</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
   </section>
  )
}

export default Links