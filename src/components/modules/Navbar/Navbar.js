"use client"
import React, {useEffect, useState } from 'react';
import style from './Navbar.module.css';
import { FaBars, FaHeart, FaSearch, FaTimes, FaUser } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";


import Link from 'next/link';
import Image from 'next/image';



function Navbar() {
    const [isShowSearch , setIsShowSearch] = useState(false);
    const [isShowBasket , setIsShowBasket] = useState(false);
    const [isShowMenuMobile , setIsShowMenuMobile] = useState(false);
    const [fixToTop ,  setFixToTop] = useState(false);



    // Handler Show Search Logic
    const handlerShowSearch = ()=>{
        setIsShowSearch(true)
    }
    const handlerExitShowSearch = ()=>{
        setIsShowSearch(false)
    }

    // Handler Show Basket
    const handlerShowBasket = ()=>{
        setIsShowBasket(true)
    }
    const handlerExitShowBasket = ()=>{
        setIsShowBasket(false)
    }

    // Handler Show Menu Mobile
    const handlerShowMenuMobile = ()=>{
        setIsShowMenuMobile(true)
    }
    const handlerShowMenuMobileExit = ()=>{
        setIsShowMenuMobile(false)
    }

    // Navbar Scroll Fixed ToTop
    useEffect(()=>{
        const fixNavbarToTop = ()=>{
            const currentScroll = window.scrollY ;
            if(currentScroll > 100){
                setFixToTop(true);
            }else{
                setFixToTop(false);
            }
        };

        window.addEventListener("scroll", fixNavbarToTop);
        return ()=> window.removeEventListener("scroll" , fixNavbarToTop)
    },[])

  return (
    <section className={fixToTop? style.navbar_fixed : style.navBar}>
        <div className="containers">
            <div className={style.navbar_wrapper}>
                <div className={style.navbar_search_menuMobile}>
                       {/* Navbar Menu Mobile */}
                   <div className={style.navbar_mobile_wrapper}>
                    <span className={style.navbar_mobile_icon} onClick={handlerShowMenuMobile}>
                        <span className={style.navbar_mobile_iconBox}>
                            <FaBars/>
                        </span>
                    </span>
                    <div className={isShowMenuMobile? style.navbar_mobile_menu_active : style.navbar_mobile_menu}>
                        <div className="bg-shadow" style={isShowMenuMobile?{display :"block"}:{display:"none"}}></div>
                        <div className={isShowMenuMobile?style.navbar_mobile_menuWrapper_active : style.navbar_mobile_menuWrapper}>
                            <div className={style.navbar_mobile_menuLogoExit}>
                                <span className={style.navbar_mobile_exit} onClick={handlerShowMenuMobileExit}>
                                    <FaTimes/>
                                </span>
                                <Image src='/assets/images/logo.svg' alt='logo menu' width={250} height={100}/>
                            </div>
                            <ul className={style.navbar_mobile_items}>
                                <li className={style.mobile_item}>
                                    <Link href="#" className={style.mobile_link}>
                                        <span className={style.mobile_link_text}>محصولات خانگی</span>
                                        <span className={style.mobile_link_icon}><IoIosArrowDown/></span>
                                    </Link>
                                </li>
                                <li className={style.mobile_item}>
                                    <Link href="#" className={style.mobile_link}>
                                        <span className={style.mobile_link_text}>محصولات هورکا</span>
                                        <span className={style.mobile_link_icon}><IoIosArrowDown/></span>
                                    </Link>
                                </li>
                                <li className={style.mobile_item}>
                                    <Link href="#" className={style.mobile_link}>
                                        <span className={style.mobile_link_text}>مجله بن مانو</span>
                                        <span className={style.mobile_link_icon}><IoIosArrowDown/></span>
                                    </Link>
                                </li>
                                <li className={style.mobile_item}>
                                    <Link href="#" className={style.mobile_link}>
                                        <span className={style.mobile_link_text}>درباره ما</span>
                                    </Link>
                                </li>
                                <li className={style.mobile_item}>
                                    <Link href="#" className={style.mobile_link}>
                                        <span className={style.mobile_link_text}>تماس با ما</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Navbar Search */}
                <div className={style.navbar_search}>
                    <div className={style.navbar_search_wrapper}  onClick={handlerShowSearch}>
                        <span className={style.navbar_search_icon}>
                            <span className={style.navbar_search_iconBox}>
                                <FaSearch/>                        
                            </span>
                        </span>
                        <span className={style.navbar_search_text}>جستجو ...</span>
                    </div>
                    <div className={ isShowSearch? style.navbar_search_box_active :style.navbar_search_box}>
                        <span className={style.navbar_search_exit} onClick={handlerExitShowSearch}>
                            <FaTimes/>
                        </span>
                        <div className={style.navbar_search_inputIconBox}>
                            <span className={style.navbar_search_inputIconBox_icon}>
                                <FaSearch/>
                            </span>
                            <input type="text" className={style.navbar_search_inputIconBox_input} placeholder='جستجو ...'/>
                        </div>
                    </div>
                </div>
                </div>
                <div className={style.navbar_menu_logo}>
                    {/* navbar menu right */}
                    <ul className={style.navbar_menu_items}>
                        <li className={style.navbar_menu_item}>
                            <Link href='#' className={`${style.navbar_item_link} ${"tooltip_down"}`}>
                                <span className={style.navbar_item_link_text}>
                                    محصولات خانگی
                                </span>
                                <span className={style.navbar_item_link_icon}>
                                    <IoIosArrowDown/>
                                </span>
                                {/* <ul className={`${style.navbar_items} ${"tooltip_Down_Menu"}`}>
                                    <li className={style.navbar_item}>
                                        <Link href='#' className={style.navbar_item_link_to}>
                                            <Image src='../../assets/images/home-1.svg' alt='icon link' width={30} height={30}/>
                                            <span className={style.navbar_item_link_toText}></span>
                                        </Link>
                                    </li>
                                    <li className={style.navbar_item}>
                                        <Link href='#' className={style.navbar_item_link_to}>
                                            <Image src='../../assets/images/home-2.svg' alt='icon link' width={30} height={30}/>
                                            <span className={style.navbar_item_link_toText}></span>
                                        </Link>
                                    </li>
                                    <li className={style.navbar_item}>
                                        <Link href='#' className={style.navbar_item_link_to}>
                                            <Image src='../../assets/images/home-3.svg' alt='icon link' width={30} height={30}/>
                                            <span className={style.navbar_item_link_toText}></span>
                                        </Link>
                                    </li>
                                    <li className={style.navbar_item}>
                                        <Link href='#' className={style.navbar_item_link_to}>
                                            <Image src='../../assets/images/home-4.svg' alt='icon link' width={30} height={30}/>
                                            <span className={style.navbar_item_link_toText}></span>
                                        </Link>
                                    </li>
                                    <li className={style.navbar_item}>
                                        <Link href='#' className={style.navbar_item_link_to}>
                                            <Image src='../../assets/images/home-5.svg' alt='icon link' width={30} height={30}/>
                                            <span className={style.navbar_item_link_toText}></span>
                                        </Link>
                                    </li>
                                    <li className={style.navbar_item}>
                                        <Link href='#' className={style.navbar_item_link_to}>
                                            <Image src='../../assets/images/home-6.svg' alt='icon link' width={30} height={30}/>
                                            <span className={style.navbar_item_link_toText}></span>
                                        </Link>
                                    </li>
                                    <li className={style.navbar_item}>
                                        <Link href='#' className={style.navbar_item_link_to}>
                                            <Image src='../../assets/images/home-7.svg' alt='icon link' width={30} height={30}/>
                                            <span className={style.navbar_item_link_toText}></span>
                                        </Link>
                                    </li>
                                    <li className={style.navbar_item}>
                                        <Link href='#' className={style.navbar_item_link_to}>
                                            <Image src='../../assets/images/home-8.svg' alt='icon link' width={30} height={30}/>
                                            <span className={style.navbar_item_link_toText}></span>
                                        </Link>
                                    </li>
                                    <li className={style.navbar_item}>
                                        <Link href='#' className={style.navbar_item_link_to}>
                                            <Image src='../../assets/images/home-9.svg' alt='icon link' width={30} height={30}/>
                                            <span className={style.navbar_item_link_toText}></span>
                                        </Link>
                                    </li>
                                    <li className={style.navbar_item}>
                                        <Link href='#' className={style.navbar_item_link_to}>
                                            <Image src='../../assets/images/home-10.svg' alt='icon link' width={30} height={30}/>
                                            <span className={style.navbar_item_link_toText}></span>
                                        </Link>
                                    </li>
                                </ul> */}
                            </Link>
                        </li>
                        <li className={style.navbar_menu_item}>
                            <Link href='#' className={`${style.navbar_item_link} ${"tooltip_down"}`}>
                                <span className={style.navbar_item_link_text}>
                                    محصولات هورکا
                                </span>
                                <span className={style.navbar_item_link_icon}>
                                    <IoIosArrowDown/>
                                </span>
                                {/* <ul className={`${style.navbar_items} ${"tooltip_Down_Menu"}`}>
                                  <li className={style.navbar_item}>menu</li>
                                </ul> */}
                            </Link>
                        </li>
                    </ul>
                    {/* navbar logos */}
                        <div className={style.navbar_logo}>
                            <Link href="/" className={style.navbar_logo_link}>
                                <Image src="../../assets/images/logo.svg" alt='logo' width={100} height={100} className={style.navbar_logo_img}/>
                            </Link>
                        </div>
                    {/* navbar menu left */}
                    <ul className={style.navbar_menu_items}>
                        <li className={style.navbar_menu_item}>
                            <Link href='#' className={`${style.navbar_item_link} ${"tooltip_down"}`}>
                                <span className={style.navbar_item_link_text}>
                                    مجله بن مانو
                                </span>
                                <span className={style.navbar_item_link_icon}>
                                    <IoIosArrowDown/>
                                </span>
                                {/* <ul className={`${style.navbar_items} ${"tooltip_Down_Menu"}`}>
                                    <li className={style.navbar_item}>menu</li>
                                </ul> */}
                            </Link>
                        </li>
                        <li className={style.navbar_menu_item}>
                            <Link href='#' className={style.navbar_item_link}>
                                <span className={style.navbar_item_link_text}>
                                    درباره ما
                                </span>
                            </Link>
                        </li>
                        <li className={style.navbar_menu_item}>
                            <Link href='#' className={style.navbar_item_link}>
                                <span className={style.navbar_item_link_text}>
                                    تماس با ما
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={style.navbar_action_links}>
                    <Link href="#" className={style.navbar_action_LoginRegister}>
                            <span className={style.navbar_action_LoginRegister_icon}>
                                <span className={style.navbar_action_LoginRegister_iconBox}>
                                    <FaUser/>
                                </span>
                            </span>
                    </Link>
                    <button className={style.navbar_action_btn} onClick={handlerShowBasket}>
                        <sub className={style.navbar_action_num}>0</sub>
                        <span className={style.navbar_action_btn_icon}>
                            <span className={style.navbar_action_btn_iconBox}>
                                <HiOutlineShoppingBag/>
                            </span>
                        </span>
                    </button>
                        <div className={isShowBasket? style.navbar_action_basket_active : style.navbar_action_basket}>
                            <div className={style.navbar_basket_title_exit}>
                                <span className={style.navbar_basket_icon} onClick={handlerExitShowBasket}>
                                    <FaTimes/>
                                </span>
                                <h4 className={style.navbar_basket_title}>سبد خرید </h4>
                            </div>
                            <span className={style.navbar_basket_empty}>سبد خرید شما خالی است</span>
                        </div>
                        <Link href="#" className={style.navbar_action_wishlist}>
                            <span className={style.navbar_action_wishlist_icon}>
                                <span className={style.navbar_action_wishlist_iconBox}>
                                    <FaHeart/>
                                </span>
                            </span>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Navbar