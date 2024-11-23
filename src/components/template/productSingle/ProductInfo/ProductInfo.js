import React from "react";
import style from "./ProductInfo.module.css";

function ProductInfo({product}) {
  return (
    <section className={style.productInfo}>
      <div className={style.productInfo_wrapper}>
        <div className="row row-gap-3">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img
              src={product.img[0]}
              alt="productImage"
              className={style.productInfo_img}
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className={style.productInfo_content}>
              <h4 className={style.productInfo_title}>مشخصات محصول</h4>
              <p className={style.productInfo_desc}>
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductInfo;
