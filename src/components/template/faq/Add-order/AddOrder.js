import React from "react";

function AddOrder() {
  return (
    <>
      <div className="question_box">
        <h5 className="question_title">چگونه سفارشم را در وب‌سایت ثبت کنم؟</h5>
        <p className="question_paraph">
          وارد حساب کاربری خود شوید، محصول مورد نظر را انتخاب و روی گزینه ”
          افزودن به سبد خرید” کلیک و مراحل ثبت سفارش را طی کنید.
        </p>
      </div>
      <div className="question_box">
        <h5 className="question_title">برای خرید از بن‌مانو، حتما باید در وب‌سایت عضو باشم؟</h5>
        <p className="question_paraph">
        بله، امکان اضافه کردن کالا به سبد خرید بدون وارد شدن به حساب کاربری وجود دارد؛ اما برای انجام مراحل بعدی خرید و ثبت سفارش باید وارد حساب کاربری خود شوید.
        </p>
      </div>
      <div className="question_box">
        <h5 className="question_title">آیا می‌توانم سفارشم را تلفنی ثبت کنم؟</h5>
        <p className="question_paraph">خیر، امکان ثبت سفارش به صورت تلفنی امکان‌پذیر نیست.</p>
      </div>
      <div className="question_box">
        <h5 className="question_title">آیا می‌توانم سفارشم را از طریق اینستاگرام ثبت کنم؟</h5>
        <p className="question_paraph">خیر، ثبت سفارش‌ به صورت آنلاین فقط از طریق وب‌سایت بن‌مانو www.bonmano.com امکان‌پذیر است.</p>
      </div>
      <div className="question_box">
        <h5 className="question_title">
        چگونه می‌توانم از قیمت محصولات مطلع شوم؟</h5>
        <p className="question_paraph">
        برای مشاهده قیمت تمامی محصولات بن‌مانو، به صفحه فروشگاه مراجعه کنید.
        </p>
      </div>
    </>
  );
}

export default AddOrder;
