import React from 'react';
import style from './ProductsList.module.css'
import Link from 'next/link';

function ProductsList() {
  return (
    <section className={style.productList}>
        <div className="container">
            <div className="row">
                <h6 className="admin-title">افزودن محصول</h6>
                <div className="col-12">
                    <Link href="/P-admin/AddProduct" className={style.productList_addProduct}>اضافه کردن محصول</Link>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-12">
                    <div className="boxPanel">
                    <div className={style.productList_search}>
                        <input type="text" className={style.productList_search_input}  placeholder='جستجو محصول'/>
                        <button className={`${"showMore"} ${style.productList_search_btn}`}>جستجو</button>
                    </div>
                    </div>
                </div>
            </div>
            <div className="row mt-4 row-gap-3">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="boxPanel">
                    <div className={style.productList_item}>
                        <img src="/assets/images/p1.webp" alt="" className={style.productList_item_img} />
                        <span className={style.productList_item_name}>دانه قهوه اسپرسو جونیور</span>
                        <div className={style.productList_item_wrapper}>
                            <button className={`${"showMore"} ${style.productList_item_btn}`}>جزئیات</button> 
                            <button className={`${"showMore"} ${style.productList_item_btn}`}>ویرایش</button> 
                            <button className={`${"showMore"} ${style.productList_item_btn}`}>حذف</button> 
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="boxPanel">
                    <div className={style.productList_item}>
                        <img src="/assets/images/p1.webp" alt="" className={style.productList_item_img} />
                        <span className={style.productList_item_name}>دانه قهوه اسپرسو جونیور</span>
                        <div className={style.productList_item_wrapper}>
                            <button className={`${"showMore"} ${style.productList_item_btn}`}>جزئیات</button> 
                            <button className={`${"showMore"} ${style.productList_item_btn}`}>ویرایش</button> 
                            <button className={`${"showMore"} ${style.productList_item_btn}`}>حذف</button> 
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="boxPanel">
                    <div className={style.productList_item}>
                        <img src="/assets/images/p1.webp" alt="" className={style.productList_item_img} />
                        <span className={style.productList_item_name}>دانه قهوه اسپرسو جونیور</span>
                        <div className={style.productList_item_wrapper}>
                            <button className={`${"showMore"} ${style.productList_item_btn}`}>جزئیات</button> 
                            <button className={`${"showMore"} ${style.productList_item_btn}`}>ویرایش</button> 
                            <button className={`${"showMore"} ${style.productList_item_btn}`}>حذف</button> 
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="boxPanel">
                    <div className={style.productList_item}>
                        <img src="/assets/images/p1.webp" alt="" className={style.productList_item_img} />
                        <span className={style.productList_item_name}>دانه قهوه اسپرسو جونیور</span>
                        <div className={style.productList_item_wrapper}>
                            <button className={`${"showMore"} ${style.productList_item_btn}`}>جزئیات</button> 
                            <button className={`${"showMore"} ${style.productList_item_btn}`}>ویرایش</button> 
                            <button className={`${"showMore"} ${style.productList_item_btn}`}>حذف</button> 
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="boxPanel">
                    <div className={style.productList_item}>
                        <img src="/assets/images/p1.webp" alt="" className={style.productList_item_img} />
                        <span className={style.productList_item_name}>دانه قهوه اسپرسو جونیور</span>
                        <div className={style.productList_item_wrapper}>
                            <button className={`${"showMore"} ${style.productList_item_btn}`}>جزئیات</button> 
                            <button className={`${"showMore"} ${style.productList_item_btn}`}>ویرایش</button> 
                            <button className={`${"showMore"} ${style.productList_item_btn}`}>حذف</button> 
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductsList