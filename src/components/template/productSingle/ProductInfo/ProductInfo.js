import React from "react";
import style from "./ProductInfo.module.css";

function ProductInfo() {
  return (
    <section className={style.productInfo}>
      <div className={style.productInfo_wrapper}>
        <div className="row row-gap-3">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img
              src="/assets/images/p1.webp"
              alt="productImage"
              className={style.productInfo_img}
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className={style.productInfo_content}>
              <h4 className={style.productInfo_title}>مشخصات محصول</h4>
              <p className={style.productInfo_desc}>
                قهوه هویلا کلمبیا یکی از انواع قهوه‌های تک‌خاستگاه است که به
                خاطر طعم و کیفیت برجسته‌اش محبوبیت زیادی دارد. قهوه‌نوشان
                حرفه‌ای به خاطر پروفایل طعمی متنوع و پیچیده آن، از این قهوه لذت
                می‌برند. با خرید این قهوه، شما نه تنها از طعم فوق‌العاده‌ای
                بهره‌مند می‌شوید، بلکه از تجربه‌ای خاص در دنیای قهوه نیز لذت
                خواهید برد. تک‌خاستگاه کلمبیا هویلا یکی از محبوب‌ترین انتخاب‌ها
                برای عاشقان قهوه است. این قهوه از منطقه هویلا در کلمبیا می‌آید و
                به خاطر طعم منحصر به فرد و ویژگی‌های خاص آن منطقه شناخته می‌شود.
                ویژگی‌های بارز این قهوه شامل طعم میوه‌ای ملایم، اسیدیته متعادل و
                رایحه دلپذیر است. این قهوه به دلیل کیفیت بالای دانه‌ها و فرایند
                دقیق تولید، جزو قهوه‌های تک‌خاستگاه محبوب در دنیا به حساب
                می‌آید.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductInfo;
