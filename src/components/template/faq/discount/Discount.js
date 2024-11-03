import React from "react";

function Discount() {
  return (
    <>
      <div className="question_box">
        <h5 className="question_title">چطور می‌توانم کد تخفیف دریافت کنم؟</h5>
        <p className="question_paraph">
          بن‌مانو در مناسبت‌های مختلف و با برگزاری جشنواره فروش ویژه تعدادی کد
          تخفیف از طریق پیامک، ایمیل و شبکه‌های اجتماعی در اختیار مشتریان قرار
          می‌دهد. شما می‌توانید با مراجعه منظم به وبسایت بن‌مانو از تخفیف‌ها
          مطلع شوید. تخفیف‌های زیر در وب‌سایت بن‌مانو دائمی است: خرید بالای یک
          میلیون تومان: ۳% تخفیف خرید بالای دو میلیون و پانصد هزار تومان: ۵%
          تخفیف خرید بالای پنج میلیون تومان: ۸% تخفیف توضیحات بیشتر را اینجا
          بخوانید.
            </p>
      </div>
      <div className="question_box">
        <h5 className="question_title">چگونه می‌توانم از کد تخفیفم استفاده کنم؟</h5>
        <p className="question_paraph">به حساب کاربری خود وارد شوید.</p>
        <p className="question_paraph">کالاهای مدنظر خود را به سبد خرید اضافه کنید.</p>
        <p className="question_paraph"> در مرحله چک کردن سبد خرید، کد تخفیف را وارد و دکمه ثبت را بزنید</p>
      </div>
      <div className="question_box">
        <h5 className="question_title">هنگام استفاده از کد تخفیف با پیام این کد منقضی شده است رو به رو می‌شوم باید چیکار کنم؟</h5>
        <p className="question_paraph">برخی از کدهای تخفیف زمان‌دار هستند و باید در زمان مقرر استفاده شوند. در صورت منقضی شدن کدهای تخفیف، دیگر قابل استفاده نیستند.</p>
      </div>
    </>
  );
}

export default Discount;