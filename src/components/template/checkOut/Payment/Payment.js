"use client";
import React, { useState } from "react";
import style from "./Payment.module.css";

export const metadata = {
  title: "  بن مانو |  پرداخت",
};

function Payment() {
  const [showDiscount, setShowDiscount] = useState(false);
  const [isGenuine , setIsGenuine] = useState (true)
  const [isLegal , setIsLegal] = useState (false)

  const handlerChangeCheckBox = (e)=>{
    if(isGenuine === true){
        setIsLegal(true);
        setIsGenuine(false)
    } else if(isLegal === true){
        setIsLegal(false);
        setIsGenuine(true)
    }
  }
  const handlerShowDiscount = () => {
    setShowDiscount(!showDiscount);
  };
  return (
    <section className={style.payment}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={style.payment_addDiscount}>
              <span className={style.payment_addDiscount_text}>
                کد تخفیف دارید؟
              </span>
              <button
                className={style.payment_addDiscount_btn}
                onClick={handlerShowDiscount}
              >
                برای نوشتن کد اینجا کلیک کنید
              </button>
            </div>
            {showDiscount && (
              <div className={style.payment_addDiscount_box}>
                <span className={style.payment_addDiscount_box_text}>
                  اگر کد تخفیف دارید، لطفا در زیر بنویسید.
                </span>
                <div className={style.payment_addDiscount_box_wrapper}>
                  <input
                    type="text"
                    className={style.payment_addDiscount_box_input}
                  />
                  <button className={style.payment_addDiscount_box_btn}>
                    ثبت کد
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="row mt-5">
          <div className="row row-gap-4">
            <div className="col-lg-8 col-md-7 col-sm-12">
              <div className={style.payment_boxTitle}>
                <h6 className={style.payment_title}>اطلاعات تحویل گیرنده</h6>
              </div>
              <div className={style.payment_checkBoxes}>
                <span className={style.payment_checkBoxes_title}>
                  نوع خریدار
                </span>
                <div className={style.payment_checkBoxes_wrappers}>
                  <div className={style.payment_checkBoxes_wrapper}>
                    <input
                      type="checkbox"
                      checked={isGenuine}
                      onChange={handlerChangeCheckBox}
                      name=""
                      id="genuine"
                      className={style.payment_checkBoxes_input}
                    />
                    <label
                      htmlFor="genuine"
                      className={style.payment_checkBoxes_text}
                    >
                      حقیقی
                    </label>
                  </div>
                  <div className={style.payment_checkBoxes_wrapper}>
                    <input
                      type="checkbox"
                      checked={isLegal}
                      onChange={handlerChangeCheckBox}
                      name=""
                      id="legal"
                      className={style.payment_checkBoxes_input}
                    />
                    <label
                      htmlFor="legal"
                      className={style.payment_checkBoxes_text}
                    >
                      حقوقی
                    </label>
                  </div>
                </div>
              </div>
              <form action="#" className={style.payment_form}>
                <div className={style.payment_formWrapper}>
                  <div className={style.payment_formBox}>
                    <label htmlFor="#" className={style.payment_formBox_text}>
                      نام
                    </label>
                    <input
                      type="text"
                      className={style.payment_formBox_input}
                    />
                  </div>
                  <div className={style.payment_formBox}>
                    <label htmlFor="#" className={style.payment_formBox_text}>
                      نام خانوادگی
                    </label>
                    <input
                      type="text"
                      className={style.payment_formBox_input}
                    />
                  </div>
                  <div className={style.payment_formBox}>
                    <label htmlFor="#" className={style.payment_formBox_text}>
                      شماره موبایل
                    </label>
                    <input
                      type="text"
                      className={style.payment_formBox_input}
                    />
                  </div>
                </div>
                {/* حقیقی */}
                {isLegal === true && (
                <div className={style.payment_formWrapper}>
                  <div className={style.payment_formBox}>
                    <label htmlFor="#" className={style.payment_formBox_text}>
                        نام شرکت
                    </label>
                    <input
                      type="text"
                      className={style.payment_formBox_input}
                    />
                  </div>
                  <div className={style.payment_formBox}>
                    <label htmlFor="#" className={style.payment_formBox_text}>
                    شماره ثبت 
                    </label>
                    <input
                      type="text"
                      className={style.payment_formBox_input}
                    />
                  </div>
                  <div className={style.payment_formBox}>
                    <label htmlFor="#" className={style.payment_formBox_text}>
                    کد اقتصادی
                    </label>
                    <input
                      type="text"
                      className={style.payment_formBox_input}
                    />
                  </div>
                </div>
                )}

                <div className={style.payment_formWrapper}>
                  <div className={style.payment_formBox}>
                    <label htmlFor="#" className={style.payment_formBox_text}>
                      کد ملی
                    </label>
                    <input
                      type="text"
                      className={style.payment_formBox_input}
                    />
                  </div>
                  <div className={style.payment_formBox}>
                    <label htmlFor="#" className={style.payment_formBox_text}>
                      آدرس ایمیل (اختیاری)
                    </label>
                    <input
                      type="text"
                      className={style.payment_formBox_input}
                    />
                  </div>
                </div>
                <div className={style.payment_formWrapper}>
                  <div className={style.payment_formBox}>
                    <label htmlFor="#" className={style.payment_formBox_text}>
                      استان
                    </label>
                    <select
                      name=""
                      id=""
                      className={style.payment_formBox_select}
                    >
                      <option value="" className={style.payment_formBox_option}>
                        انتخاب استان
                      </option>
                    </select>
                  </div>
                  <div className={style.payment_formBox}>
                    <label htmlFor="#" className={style.payment_formBox_text}>
                      شهرستان
                    </label>
                    <select
                      name=""
                      id=""
                      className={style.payment_formBox_select}
                    >
                      <option value="" className={style.payment_formBox_option}>
                        {" "}
                        انتخاب یک شهرستان
                      </option>
                    </select>
                  </div>

                  <div className={style.payment_formBox}>
                    <label htmlFor="#" className={style.payment_formBox_text}>
                      کدپستی
                    </label>
                    <input
                      type="text"
                      className={style.payment_formBox_input}
                    />
                  </div>
                </div>
                <div className={style.payment_formBox}>
                  <label htmlFor="#" className={style.payment_formBox_text}>
                    آدرس
                  </label>
                  <input type="text" className={style.payment_formBox_input} />
                </div>
              </form>
            </div>
            <div className="col-lg-4 col-md-5 col-sm-12">
                <div className={style.payment_pay}>
                    <ul className={style.payment_pay_items}>
                        <li className={style.payment_pay_item}>مبلغ کل خرید</li>
                        <li className={style.payment_pay_item}>195,270 تومان</li>
                    </ul>
                    <ul className={style.payment_pay_items}>
                        <li className={style.payment_pay_item}>حمل و نقل</li>
                        <li className={style.payment_pay_item}>65,000 تومان</li>
                    </ul>
                    <ul className={style.payment_pay_items}>
                        <li className={style.payment_pay_item}>قابل پرداخت</li>
                        <li className={style.payment_pay_item}>243,000 تومان</li>
                    </ul>
                </div>
                <button className={style.payment_pay_btn}>ثبت سفارش و پرداخت</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Payment;
