import React from 'react';
import style from './Articles.module.css';
import ArticleCart from '@/components/modules/ArticleCart/ArticleCart';

function Articles() {
  return (
    <section className={style.articles}>
            <div className="row">
                <div className="col-12">
                    <h5 className={style.articles_title}>مطالب وبلاگ</h5>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-12">
                    <div className={style.articles_categories}>
                        {/* .articles_btn_active => active */}
                        <button className={style.articles_btn}>آخرین مطالب</button>
                        <button className={style.articles_btn}>محبوب ترین مطالب</button>
                    </div>
                </div>
            </div>
            <div className="row mt-5 row-gap-3">
                <div className="col-lg-6 col-md-6 col-sm-12 ">
                    <ArticleCart/>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 ">
                    <ArticleCart/>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 ">
                    <ArticleCart/>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 ">
                    <ArticleCart/>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 ">
                    <ArticleCart/>
                </div>
            </div>
    </section>
  )
}

export default Articles