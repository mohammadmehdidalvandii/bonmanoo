import React from "react";
import style from "./CategoryContent.module.css";

function CategoryContent() {
  return (
    <section className={style.categoryContent}>
      <div className={style.categoryContent_wrapper}>
        <div className={style.categoryContent_details}>
          <h4 className={style.categoryContent_details_title}>
            تاثیر قهوه بر استرس و اظطراب چیست ؟
          </h4>
          <div className={style.categoryContent_details_wrapper}>
            <div className={style.categoryContent_details_item}>
              <span className={style.categoryContent_details_item_title}>
                دسته بندی :
              </span>
              <span className={style.categoryContent_details_item_text}>
                سلامتی
              </span>
            </div>
            <div className={style.categoryContent_details_items}>
              <div className={style.categoryContent_details_item}>
                <span className={style.categoryContent_details_item_title}>
                  ارسال توسط :
                </span>
                <span className={style.categoryContent_details_item_text}>
                  تیم بن مانو
                </span>
              </div>
              <div className={style.categoryContent_details_item}>
                <span className={style.categoryContent_details_item_title}>
                  تاریخ انتشار :
                </span>
                <span className={style.categoryContent_details_item_text}>
                  23 مرداد 1403
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={style.categoryContent_content}>
          <img src="/assets/images/cdd.webp" alt="" className={style.categoryContent_content_img} />
          <p className={style.categoryContent_content_desc}>
            چرا بعد از خوردن قهوه مضطرب میشوم؟ موقعیت‌هایی در زندگی پیش می‌آید
            که یک اتفاق باعث اضطراب ما می‌شود و ما برای فرار از واقعیت و انکار
            احساس‌مان به آن موضوع سعی می‌کنیم تقصیر را گردن عامل دیگری مثل
            خوراکی یا نوشیدنی دیگری بیاندازیم. گاهی اوقات هم فرد دچار اختلال
            اضطراب شده است و این سوال برایش پیش می‌آید که شاید فنجان قهوه‌ای که
            صبح نوشیده است باعث تشدید این حس اضطراب شده است. واقعا چه دیواری
            کوتاه‌تر از قهوه‌ای که صبح نوشیده‌ایم؟ گاهی بی‌دلیل تمام تقصیرهای
            استرس و اضطراب ما گردن یک یا دو فنجان قهوه‌ای که صبح نوشیده‌ایم
            می‌افتد.
          </p>
          <h4 className={style.categoryContent_content_title}>
            آیا قهوه روی اضطراب تاثیر دارد؟
          </h4>
          <p className={style.categoryContent_content_desc}>
            چرا بعد از خوردن قهوه مضطرب میشوم؟ موقعیت‌هایی در زندگی پیش می‌آید
            که یک اتفاق باعث اضطراب ما می‌شود و ما برای فرار از واقعیت و انکار
            احساس‌مان به آن موضوع سعی می‌کنیم تقصیر را گردن عامل دیگری مثل
            خوراکی یا نوشیدنی دیگری بیاندازیم. گاهی اوقات هم فرد دچار اختلال
            اضطراب شده است و این سوال برایش پیش می‌آید که شاید فنجان قهوه‌ای که
            صبح نوشیده است باعث تشدید این حس اضطراب شده است. واقعا چه دیواری
            کوتاه‌تر از قهوه‌ای که صبح نوشیده‌ایم؟ گاهی بی‌دلیل تمام تقصیرهای
            استرس و اضطراب ما گردن یک یا دو فنجان قهوه‌ای که صبح نوشیده‌ایم
            می‌افتد.
          </p>
          <h4 className={style.categoryContent_content_title}>
            آیا قهوه روی اضطراب تاثیر دارد؟
          </h4>
          <p className={style.categoryContent_content_desc}>
            چرا بعد از خوردن قهوه مضطرب میشوم؟ موقعیت‌هایی در زندگی پیش می‌آید
            که یک اتفاق باعث اضطراب ما می‌شود و ما برای فرار از واقعیت و انکار
            احساس‌مان به آن موضوع سعی می‌کنیم تقصیر را گردن عامل دیگری مثل
            خوراکی یا نوشیدنی دیگری بیاندازیم. گاهی اوقات هم فرد دچار اختلال
            اضطراب شده است و این سوال برایش پیش می‌آید که شاید فنجان قهوه‌ای که
            صبح نوشیده است باعث تشدید این حس اضطراب شده است. واقعا چه دیواری
            کوتاه‌تر از قهوه‌ای که صبح نوشیده‌ایم؟ گاهی بی‌دلیل تمام تقصیرهای
            استرس و اضطراب ما گردن یک یا دو فنجان قهوه‌ای که صبح نوشیده‌ایم
            می‌افتد.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CategoryContent;
