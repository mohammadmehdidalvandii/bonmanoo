import React from "react";
import style from "./AddAddress.module.css";

function AddAddress() {
  return (
    <section className={style.addAddress}>
      <div className="containers">
        <div className="row">
          <div className="col-12">
            <h6 className="user-title">افزودن آدرس</h6>
            <div className="boxPanel">
              <form action="#" className={style.addAddress_form}>
                <div className={style.addAddress_form_wrapper}>
                  <div className={style.addAddress_formBox}>
                    <label
                      htmlFor=""
                      className={style.addAddress_formBox_label}
                    >
                      عنوان آدرس
                    </label>
                    <input
                      type="text"
                      className={style.addAddress_formBox_input}
                    />
                  </div>
                  <div className={style.addAddress_formBox}>
                    <label
                      htmlFor=""
                      className={style.addAddress_formBox_label}
                    >
                     استان
                    </label>
                    <select name="#" id="" className={style.addAddress_select}>
                      <option value="" className={style.addAddress_option}>
                        انتخاب آدرس
                      </option>
                    </select>
                  </div>
                </div>
                <div className={style.addAddress_form_wrapper}>
                <div className={style.addAddress_formBox}>
                    <label
                      htmlFor=""
                      className={style.addAddress_formBox_label}
                    >
                     شهر
                    </label>
                    <select name="#" id="" className={style.addAddress_select}>
                      <option value="" className={style.addAddress_option}>
                        انتخاب آدرس
                      </option>
                    </select>
                  </div>
                  <div className={style.addAddress_formBox}>
                    <label
                      htmlFor=""
                      className={style.addAddress_formBox_label}
                    >
                       کد پستی
                    </label>
                    <input
                      type="text"
                      className={style.addAddress_formBox_input}
                    />
                  </div>
                </div>
                <div className={style.addAddress_formBox}>
                    <label
                      htmlFor=""
                      className={style.addAddress_formBox_label}
                    >
                      آدرس تحویل سفارش
                    </label>
                    <input
                      type="text"
                      className={style.addAddress_formBox_input}
                    />
                  </div>

                  <button className={`${"showMore"} ${style.address_formBox_btn}`}>ثبت</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AddAddress;
