import React from "react";
import style from "./ProductAdd.module.css";

function ProductAdd({cateProducts}) {
  return (
    <section className={style.productAdd}>
      <div className="container">
        <div className="row">
          <h6 className="admin-title">افزودن محصول</h6>
          <div className="col-12">
            <div className="boxPanel">
              <form action="#" className={style.productAdd_form}>
                <div className={style.productAdd_wrapper}>
                  <div className={style.productAdd_formBox}>
                    <label
                      htmlFor="#"
                      className={style.productAdd_formBox_label}
                    >
                      عنوان فرعی (انگلیسی)
                    </label>
                    <input
                      type="text"
                      className={style.productAdd_formBox_input}
                    />
                  </div>
                  <div className={style.productAdd_formBox}>
                    <label
                      htmlFor="#"
                      className={style.productAdd_formBox_label}
                    >
                      نام محصول
                    </label>
                    <input
                      type="text"
                      className={style.productAdd_formBox_input}
                    />
                  </div>
                  <div className={style.productAdd_formBox}>
                    <label
                      htmlFor="#"
                      className={style.productAdd_formBox_label}
                    >
                      دسته بندی
                    </label>
                    <select
                      name="#"
                      id="#"
                      className={style.productAdd_formBox_select}
                    >
                      <option value="">دسته بندی</option>
                      {cateProducts.map(cateProduct=>(
                        <option value={cateProduct.name} key={cateProduct._id}>{cateProduct.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className={style.productAdd_formBox}>
                  <label htmlFor="#" className={style.productAdd_formBox_label}>
                    توضیحات
                  </label>
                  <textarea
                    type="text"
                    className={style.productAdd_formBox_text}
                  />
                </div>
                <div className={style.productAdd_wrapper}>
                  <div className={style.productAdd_formBox}>
                    <label
                      htmlFor="#"
                      className={style.productAdd_formBox_label}
                    >نام محصول :</label>
                    <input
                      type="text"
                      className={style.productAdd_formBox_input}
                    />
                  </div>
                  <div className={style.productAdd_formBox}>
                    <label
                      htmlFor="#"
                      className={style.productAdd_formBox_label}
                    >گونه :</label>
                    <input
                      type="text"
                      className={style.productAdd_formBox_input}
                    />
                  </div>
                  <div className={style.productAdd_formBox}>
                    <label
                      htmlFor="#"
                      className={style.productAdd_formBox_label}
                    >روش فرآوری :</label>
                    <input
                      type="text"
                      className={style.productAdd_formBox_input}
                    />
                  </div>
                  <div className={style.productAdd_formBox}>
                    <label
                      htmlFor="#"
                      className={style.productAdd_formBox_label}
                    >منطقه رشد :</label>
                    <input
                      type="text"
                      className={style.productAdd_formBox_input}
                    />
                  </div>
                  <div className={style.productAdd_formBox}>
                    <label
                      htmlFor="#"
                      className={style.productAdd_formBox_label}
                    >طعم یاد :</label>
                    <input
                      type="text"
                      className={style.productAdd_formBox_input}
                    />
                  </div>
                </div>
                <div className={style.productAdd_wrapper}>
                  <div className={style.productAdd_formBox}>
                    <label
                      htmlFor="#"
                      className={style.productAdd_formBox_label}
                    >شیرینی :</label>
                    <input
                      type="text"
                      className={style.productAdd_formBox_input}
                    />
                  </div>
                  <div className={style.productAdd_formBox}>
                    <label
                      htmlFor="#"
                      className={style.productAdd_formBox_label}
                    >جان مایه بادی :</label>
                    <input
                      type="text"
                      className={style.productAdd_formBox_input}
                    />
                  </div>
                  <div className={style.productAdd_formBox}>
                    <label
                      htmlFor="#"
                      className={style.productAdd_formBox_label}
                    >اسیدیته :</label>
                    <input
                      type="text"
                      className={style.productAdd_formBox_input}
                    />
                  </div>
                  <div className={style.productAdd_formBox}>
                    <label
                      htmlFor="#"
                      className={style.productAdd_formBox_label}
                    >دم افزار پیشنهادی :</label>
                    <input
                      type="text"
                      className={style.productAdd_formBox_input}
                    />
                  </div>
                  <div className={style.productAdd_formBox}>
                    <label
                      htmlFor="#"
                      className={style.productAdd_formBox_label}
                    >نوع بسته بندی</label>
                    <input
                      type="text"
                      className={style.productAdd_formBox_input}
                    />
                  </div>
                </div>
                <div className={style.productAdd_wrapper}>
                  <div className={style.productAdd_formBox}>
                    <label
                      htmlFor="#"
                      className={style.productAdd_formBox_label}
                    >زیرگونه :</label>
                    <input
                      type="text"
                      className={style.productAdd_formBox_input}
                    />
                  </div>
                  <div className={style.productAdd_formBox}>
                    <label
                      htmlFor="#"
                      className={style.productAdd_formBox_label}
                    >مواد تشکیل دهنده :</label>
                    <input
                      type="text"
                      className={style.productAdd_formBox_input}
                    />
                  </div>
                  <div className={style.productAdd_formBox}>
                    <label
                      htmlFor="#"
                      className={style.productAdd_formBox_label}
                    >ارتفاع :</label>
                    <input
                      type="text"
                      className={style.productAdd_formBox_input}
                    />
                  </div>
                  <div className={style.productAdd_formBox}>
                    <label
                      htmlFor="#"
                      className={style.productAdd_formBox_label}
                    >میزان کافئین :</label>
                    <input
                      type="text"
                      className={style.productAdd_formBox_input}
                    />
                  </div>
                  <div className={style.productAdd_formBox}>
                    <label
                      htmlFor="#"
                      className={style.productAdd_formBox_label}
                    >پس طعم :</label>
                    <input
                      type="text"
                      className={style.productAdd_formBox_input}
                    />
                  </div>
                </div>
                <div className={style.productAdd_wrapper}>
                  <div className={style.productAdd_formBox}>
                    <label
                      htmlFor="#"
                      className={style.productAdd_formBox_label}
                    >رایحه :</label>
                    <input
                      type="text"
                      className={style.productAdd_formBox_input}
                    />
                  </div>
                  <div className={style.productAdd_formBox}>
                    <label
                      htmlFor="#"
                      className={style.productAdd_formBox_label}
                    >درجه برشته کاری :</label>
                    <input
                      type="text"
                      className={style.productAdd_formBox_input}
                    />
                  </div>
                  <div className={style.productAdd_formBox}>
                    <label
                      htmlFor="#"
                      className={style.productAdd_formBox_label}
                    >میزان تلخی :</label>
                    <input
                      type="text"
                      className={style.productAdd_formBox_input}
                    />
                  </div>
                  <div className={style.productAdd_formBox}>
                    <label
                      htmlFor="#"
                      className={style.productAdd_formBox_label}
                    >ابعادبسته بندی :</label>
                    <input
                      type="text"
                      className={style.productAdd_formBox_input}
                    />
                  </div>
                  <div className={style.productAdd_formBox}>
                    <label
                      htmlFor="#"
                      className={style.productAdd_formBox_label}
                    >ساخت :</label>
                    <input
                      type="text"
                      className={style.productAdd_formBox_input}
                    />
                  </div>
                </div>
                <div className={style.productAdd_formBox}>
                    <label
                      htmlFor="#"
                      className={style.productAdd_formBox_label}
                    >
                      تگ ها (فاصله بین تگ ها  , استفاده شود)
                    </label>
                    <input
                      type="text"
                      className={style.productAdd_formBox_input}
                    />
                  </div>
                <div className={style.productAdd_formBox}>
                    <label
                      htmlFor="#"
                      className={style.productAdd_formBox_label}
                    >
                     عکس ها
                    </label>
                    <input
                      type="file"
                      className={style.productAdd_formBox_input}
                    />
                  </div>
                  <button className={`${"showMore"} ${style.productAdd_formBox_submit}`}>ثبت</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductAdd;
