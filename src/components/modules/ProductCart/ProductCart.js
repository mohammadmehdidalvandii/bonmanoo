import style from './ProductCart.module.css'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";

function ProductCart() {
  return (
    <Link href='#' className={style.productCart}>
      <div className={style.productCart_wrapper_img}>
        <img
          src="/assets/images/p1.webp"
          alt="product image"
          className={style.productCart_img}
        />
        <img
          src="/assets/images/p1-1.webp"
          alt="product image"
          className={style.productCart_img_hover}
        />
      </div>
      <div className={style.productCart_content}>
        <div className={style.productCart_weight}>
          <Image
            src="/assets/images/weight.svg"
            alt="weight"
            width={15}
            height={15}
          />
          <span className={style.productCart_weight_text}>وزن 250 گرم</span>
        </div>
        <h6 className={style.productCart_name}>دانه قهوه اسپرسو جیورنو</h6>
        <div className={style.productCart_price_addBasket}>
          <span className={style.product_price}>195,270 تومان</span>
          <button className={style.product_addBasket}>
            <HiOutlineShoppingBag />
          </button>
        </div>
      </div>
    </Link>
  );
}

export default ProductCart;
