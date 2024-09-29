import React from 'react';
import style from './Favorite.module.css';
import Link from 'next/link';
import ProductCart from '@/components/modules/ProductCart/ProductCart';

function Favorite() {
  return (
    <section className={style.favorite}>
        <div className="containers">
            {/* <div className="row">
            <div className="col-12">
                <div className={style.favorite_empty}>
                    <h5 className={style.favorite_empty_title}>هیج مورد علاقه ای وجود ندارد</h5>
                    <span className={style.favorite_empty_text}>مطمن شوید وارد سایت شدید</span>
                    <Link href="/Products" className={style.favorite_empty_link}>رفتن به فروشگاه</Link>
                </div>
            </div>
            </div> */}

            <div className="row row-gap-4">
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <div className={style.favoriteCart}>
                        <ProductCart/>
                        <button className={style.favorite_delete}>حذف</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Favorite