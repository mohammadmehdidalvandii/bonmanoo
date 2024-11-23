"use client"
import React, { useState } from "react";
import style from "./Shop.module.css";
import ProdBtn from "../ProdBtn/ProdBtn";
import FilterBox from "../FilterBox/FilterBox";
import { FaFilter, FaTimes } from "react-icons/fa";
import ProductCart from "@/components/modules/ProductCart/ProductCart";

function Shop({products}) {
    const [showMenuFilter , setShowMenuFilter] = useState(false);
    const [productExist , setProductExist] = useState(false)
    
    // Handler ShowMenu Filter
    const handlerShowMenu = ()=>{
        setShowMenuFilter(true)
    }
    const handlerExitShowFilter = ()=>{
        setShowMenuFilter(false)
    }

    // Handler Product Exist 
    const handlerProductExist = ()=>{
        setProductExist(!productExist)
    }

  return (
    <section className={style.shop}>
      <div className="containers">
        <div className="row">
          <div className="col-12">
            <div className={style.shop_buttons}>
              <ProdBtn />
              <ProdBtn />
              <ProdBtn />
              <ProdBtn />
              <ProdBtn />
              <ProdBtn />
              <ProdBtn />
              <ProdBtn />
              <ProdBtn />
              <ProdBtn />
            </div>
          </div>
        </div>
        <div className="row mt-5">
            <div className="col-12">
                <div className={style.shop_wrapper}>
                    <div className={style.shop_filter}>
                       <FilterBox/>
                       <FilterBox/>
                       <FilterBox/>
                    </div>
                    <div className={style.shop_filter_res}>
                        <span className={style.shop_filter_icon} onClick={handlerShowMenu}>
                            <FaFilter/>
                        </span>

                        <div className={showMenuFilter? style.shop_filter_menu_active : style.shop_filter_menu}>
                                <div className={style.filter_menu_titleIcon_exit}>
                                    <div className={style.filter_menu_titleIcon}>
                                        <span className={style.filter_menu_icon}>
                                            <FaFilter/>
                                        </span>
                                        <h6 className={style.filter_menu_text}>
                                            فیلتر محصول
                                        </h6>
                                    </div>
                                    <span className={style.filter_menu_exit} onClick={handlerExitShowFilter}>
                                        <FaTimes/>  
                                    </span>
                                </div>
                                <FilterBox/>
                                <FilterBox/>
                              <FilterBox/>
                        </div>
                        {showMenuFilter && (
                            <div className="bg-shadow"></div>
                        )}
                    </div>
                    <div className={style.shop_products}>
                        <div className="row">
                            <div className="col-12">
                                <div className={style.shop_products_wrapper}>
                                    <select name="" id="" className={style.shop_products_sort}>
                                        <option value="">مرتب سازی براساس اخرین</option>
                                        <option value="">مرتب سازی براساس پرفروش ترین</option>
                                        <option value="">مرتب سازی بر اساس ارزان ترین</option>
                                        <option value="">مرتب سازی بر اساس گران ترین</option>
                                        <option value="">مرتب سازی بر اساس امتیاز</option>
                                    </select>
                                    <div className={style.shop_products_exist}>
                                        <span className={style.shop_products_text}>فقط کالا های موجود</span>
                                        <div className={productExist ? style.shop_products_buttons_active :style.shop_products_buttons}
                                        onClick={handlerProductExist}
                                        >
                                            <span className={style.shop_products_btn}></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4 row-gap-4">
                            {products.map((product)=>(
                            <div className="col-lg-3 col-md-6 col-sm-12" key={product._id}>
                                <ProductCart
                                id={product._id}
                                name={product.name}
                                img={product.img[0]}
                                imgHover={product.img[1]}
                                price={product.price}
                                />
                            </div>
                            ))}
                        </div>
                        <div className="row mt-4">
                            <div className="col-12">
                                <div className={style.shop_products_pagination}>
                                    <button className={style.shop_products_pagination_btn}>1</button>
                                    <button className={style.shop_products_pagination_btn}>2</button>
                                    <button className={style.shop_products_pagination_btn}>2</button>
                                    <button className={style.shop_products_pagination_btn}>4</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Shop;
