import React from "react";
import style from "./CareersForm.module.css";

function CareersForm() {
  return (
    <section className={style.careersForm}>
      <form action="#" className={style.careersForm_form}>
        <h6 className={style.careersForm_form_title}>مشخصات فردی</h6>

        <div className={style.careersForm_wrapper}>
          <div className={style.careersForm_box}>
            <label className={style.careersForm_box_label}>
              نام و نام خانوادگی
            </label>
            <input type="text" className={style.careersForm_box_input} />
          </div>
          <div className={style.careersForm_box}>
            <label className={style.careersForm_box_label}>
             ایمیل
            </label>
            <input type="text" className={style.careersForm_box_input} />
          </div>
        </div>
        <div className={style.careersForm_wrapper}>
          <div className={style.careersForm_box}>
            <label className={style.careersForm_box_label}>
                شماره همراه
            </label>
            <input type="text" className={style.careersForm_box_input} />
          </div>
          <div className={style.careersForm_box}>
            <label className={style.careersForm_box_label}>
                تاریخ تولد
            </label>
            <input type="text" className={style.careersForm_box_input} />
          </div>
        </div>
        <div className={style.careersForm_box}>
            <label className={style.careersForm_box_label}>
                وضعیت تاهل
            </label>
            <select name="" id="" className={style.careersForm_select}>
            <option value="">مجرد</option>
            <option value="">متاهل</option>
          </select>
          </div>
         
          <div className={style.careersForm_box}>
            <label className={style.careersForm_box_label}>
                آدرس
            </label>
            <textarea type="text" className={style.careersForm_box_text} />
          </div>

          <h6 className={style.careersForm_form_title}>مشخصات فردی</h6>
          <div className={style.careersForm_wrapper}>
          <div className={style.careersForm_box}>
            <label className={style.careersForm_box_label}>
              نام و نام خانوادگی
            </label>
            <select name="" id="" className={style.careersForm_select}>
            <option value="">دیپلم</option>
            <option value="">کاردانی</option>
            <option value="">کارشناسی</option>
            <option value="">کارشناسی ارشد</option>
            <option value="">سایر</option>
          </select>
          </div>
          <div className={style.careersForm_box}>
            <label className={style.careersForm_box_label}>
             رشته تحصیلی
            </label>
            <input type="text" className={style.careersForm_box_input} />
          </div>
        </div>
        <div className={style.careersForm_box}>
            <label className={style.careersForm_box_label}>
                نام آموزشگاه
            </label>
            <input type="text" className={style.careersForm_box_input} />
          </div>

          <h6 className={style.careersForm_form_title}>آخرین سوابق شغلی</h6> 
          <div className={style.careersForm_wrapper}>
          <div className={style.careersForm_box}>
            <label className={style.careersForm_box_label}>
             نام سازمان
            </label>
            <input type="text" className={style.careersForm_box_input} />
          </div>
          <div className={style.careersForm_box}>
            <label className={style.careersForm_box_label}>
          اخرین سازمان
            </label>
            <input type="text" className={style.careersForm_box_input} />
          </div>
        </div>
        <div className={style.careersForm_box}>
            <label className={style.careersForm_box_label}>
                مدت همکاری
            </label>
            <input type="text" className={style.careersForm_box_input} />
          </div>
          <div className={style.careersForm_box}>
            <label className={style.careersForm_box_label}>
                علت قطع همکاری
            </label>
            <textarea type="text" className={style.careersForm_box_text} />
          </div>

          <h6 className={style.careersForm_form_title}> تسلط زبان خارجی</h6> 

          <div className={style.careersForm_wrapper}>
          <div className={style.careersForm_box}>
            <label className={style.careersForm_box_label}>
               زبان انگلیسی
            </label>
            <select name="" id="" className={style.careersForm_select}>
            <option value="">ضعیف</option>
            <option value="">متوسط</option>
            <option value="">خوب</option>
          </select>          </div>
          <div className={style.careersForm_box}>
            <label className={style.careersForm_box_label}>
               سایر زبان ها
            </label>
            <input type="text" className={style.careersForm_box_input} />
          </div>
        </div>

        <h6 className={style.careersForm_form_title}>سایر مهارت ها و تخصص ها</h6> 
        <div className={style.careersForm_box}>
            <label className={style.careersForm_box_label}>
            در صورتی که به نرم‌افزاری تسلط دارید و یا دوره تخصصی شرکت کرده‌اید در این قسمت وارد کنید
            *
            </label>
            <textarea type="text" className={style.careersForm_box_text} />
          </div>


          <h6 className={style.careersForm_form_title}>همکاری با بن‌مانو</h6> 
          <div className={style.careersForm_wrapper}>
          <div className={style.careersForm_box}>
            <label className={style.careersForm_box_label}>
            در کدام زمینه، مایل به همکاری با بن‌مانو هستید؟
            </label>
            <select name="" id="" className={style.careersForm_select}>
            <option value="">حسابداری</option>
            <option value="">کارشناس فروش</option>
            <option value="">کارشناس توسعه و تحقیق</option>
            <option value="">تولید محتوا</option>
            <option value="">مهندس صنایع</option>
            <option value="">گرافیست</option>
            <option value="">خدمات</option>
            <option value="">انباردار</option>
            <option value="">پیک</option>
            <option value="">تکنسین برق</option>
            <option value="">راننده</option>
            <option value="">کارگرخط</option>
          </select>          </div>
          <div className={style.careersForm_box}>
            <label className={style.careersForm_box_label}>
            حقوق درخواستی به تومان
            *
            </label>
            <input type="text" className={style.careersForm_box_input} />
          </div>
        </div>
        <div className={style.careersForm_wrapper}>
          <div className={style.careersForm_box}>
            <label className={style.careersForm_box_label}>
              نام و نام خانوادگی
            </label>
            <input type="text" className={style.careersForm_box_input} />
          </div>
          <div className={style.careersForm_box}>
            <label className={style.careersForm_box_label}>
                تلفن تماس
            </label>
            <input type="text" className={style.careersForm_box_input} />
          </div>
        </div>
        <div className={style.careersForm_box}>
            <label className={style.careersForm_box_label}>
            متن پیام
            </label>
            <textarea type="text" className={style.careersForm_box_text} />
          </div>
          <button className={style.careersForm_submit}>ارسال</button>
      </form>
    </section>
  );
}

export default CareersForm;
