"use client"
import React, { useState } from "react";
import style from "./Shop.module.css";
import ProdBtn from "../ProdBtn/ProdBtn";
import FilterBox from "../FilterBox/FilterBox";
import { FaFilter, FaTimes } from "react-icons/fa";

function Shop() {
    const [showMenuFilter , setShowMenuFilter] = useState(false);
    
    const handlerShowMenu = ()=>{
        setShowMenuFilter(true)
    }
    const handlerExitShowFilter = ()=>{
        setShowMenuFilter(false)
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
                    <div className={style.shop_products}>this is product</div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Shop;
