"use client"
import React, {useEffect, useState } from 'react';
import style from './Navbar.module.css';
import { FaBars, FaHeart, FaSearch, FaShoppingBasket, FaTimes, FaUser } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";


import Link from 'next/link';
import Image from 'next/image';



function Navbar({isLogin , userRole}) {
    const [isShowSearch , setIsShowSearch] = useState(false);
    const [isShowBasket , setIsShowBasket] = useState(false);
    const [isShowMenuMobile , setIsShowMenuMobile] = useState(false);
    const [fixToTop ,  setFixToTop] = useState(false);
    const [categoryProducts , setCategoryProducts] = useState([]);
    const [categoryProductsID , setCategoryProductsID] = useState(null);
    const [typeProducts ,  setTypeProducts] = useState([]);
    const [search , setSearch] = useState("")
    const [magazines , setMagazines] = useState([]);

    useEffect(()=>{
        const getMagazines = async ()=>{
            const res = await fetch('/api/magazines');
            const data = await res.json();
            setMagazines([...data])
        };
        getMagazines();
    },[])


    useEffect(()=>{
        const getCategoryProducts = async ()=>{
            const res = await fetch("/api/cate-prod");
            const data = await res.json();
            setCategoryProducts([...data])
        };
        getCategoryProducts()
    },[])

    useEffect(()=>{
        const getTypeProducts = async ()=>{
            const res = await fetch(`/api/cate-prod/type-products/${categoryProductsID}`);
            if(res.status === 200){
                if(categoryProductsID !== null){
                    const data = await res.json();
                    setTypeProducts([...data.typeProducts])
                }
            }
        };
        getTypeProducts()
    },[categoryProductsID])

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
    <>
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
                                    <Link href="/Products" className={style.mobile_link}>
                                        <span className={style.mobile_link_text}>محصولات خانگی</span>
                                       
                                    </Link>
                                </li>
                                <li className={style.mobile_item}>
                                    <Link href="/Products" className={style.mobile_link}>
                                        <span className={style.mobile_link_text}>محصولات هورکا</span>
                                    
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
                            <input type="text" className={style.navbar_search_inputIconBox_input} placeholder='جستجو ...'
                            value={search}
                            onChange={(e)=>setSearch(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                </div>
                <div className={style.navbar_menu_logo}>
                    {/* navbar menu right */}
                    <ul className={style.navbar_menu_items}>
                        {
                            categoryProducts.map((cateProduct)=>(
                                <li className={style.navbar_menu_item} key={cateProduct._id} >
                                <Link href='/Products' className={`${style.navbar_item_link} ${"tooltip_down"}`}
                                onMouseEnter={()=>setCategoryProductsID(cateProduct._id)}
                                >
                                    <span className={style.navbar_item_link_text}>
                                        {cateProduct.name}
                                    </span>
                                    <span className={style.navbar_item_link_icon}>
                                        <IoIosArrowDown/>
                                    </span>
                                    <ul className={`${style.navbar_items} ${"tooltip_Down_Menu"}`}>
                                        {typeProducts.map((productType)=>(
                                        <li className={style.navbar_item} key={productType._id}>
                                            <Link href='#' className={style.navbar_item_link_to}>
                                                <Image src='../../assets/images/home-1.svg' alt='icon link' width={30} height={30}/>
                                                <span className={style.navbar_item_link_toText}>
                                                    {productType.name}
                                                </span>
                                            </Link>
                                        </li>
                                        ))}
                                    </ul>
                                </Link>
                            </li>
                            )) 
                        }
                      
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
                            <Link href='/Blog' className={`${style.navbar_item_link} ${"tooltip_down"}`}>
                                <span className={style.navbar_item_link_text}>
                                    مجله بن مانو
                                </span>
                                <span className={style.navbar_item_link_icon}>
                                    <IoIosArrowDown/>
                                </span>
                                <ul className={`${style.navbar_items} ${"tooltip_Down_Menu"}`}>
                                    {magazines.map((magazine)=>(
                                          <li className={style.navbar_item} key={magazine._id}>
                                          <Link href="#" className={style.navbar_item_link_to}>{magazine.name}</Link>
                                      </li>
                                    ))}
                                </ul>
                            </Link>
                        </li>
                        <li className={style.navbar_menu_item}>
                            <Link href='/AboutUs' className={style.navbar_item_link}>
                                <span className={style.navbar_item_link_text}>
                                    درباره ما
                                </span>
                            </Link>
                        </li>
                        <li className={style.navbar_menu_item}>
                            <Link href='/ContactUs' className={style.navbar_item_link}>
                                <span className={style.navbar_item_link_text}>
                                    تماس با ما
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={style.navbar_action_links}>
                    {!isLogin ? (
                          <Link href="/LoginRegister" className={style.navbar_action_LoginRegister}>
                          <span className={style.navbar_action_LoginRegister_icon}>
                              <span className={style.navbar_action_LoginRegister_iconBox}>
                                  <FaUser/>
                              </span>
                          </span>
                  </Link>
                    ):(
                        <Link href={userRole === "ADMIN" ? '/P-admin' :'/P-user'} className={style.navbar_action_LoginRegister}>
                        <span className={style.navbar_action_LoginRegister_icon}>
                            <span className={style.navbar_action_LoginRegister_iconBox}>
                                <FaUser/>
                            </span>
                        </span>
                </Link>
                    )}
                  
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
                                <div className={style.navbar_basket_items}>
                                        <div className={style.navbar_basket_cart}>
                                            <img src="/assets/images/p1.webp" alt="" className={style.navbar_basket_cartImg} />
                                            <div className={style.navbar_basket_cartContent}>
                                                <span className={style.navbar_basket_cartName}>دانه قهوه اسپرسو جیورنو</span>
                                                <span className={style.navbar_basket_cartPrices}>1 ×
                                                195,270 تومان</span>
                                            </div>
                                            <span className={style.navbar_basket_cart_exit}>
                                                <FaTimes/>
                                            </span>
                                        </div>
                                        <div className={style.navbar_basket_cart}>
                                            <img src="/assets/images/p1.webp" alt="" className={style.navbar_basket_cartImg} />
                                            <div className={style.navbar_basket_cartContent}>
                                                <span className={style.navbar_basket_cartName}>دانه قهوه اسپرسو جیورنو</span>
                                                <span className={style.navbar_basket_cartPrices}>1 ×
                                                195,270 تومان</span>
                                            </div>
                                            <span className={style.navbar_basket_cart_exit}>
                                                <FaTimes/>
                                            </span>
                                        </div>
                                </div>
                            {/* <span className={style.navbar_basket_empty}>سبد خرید شما خالی است</span> */}

                            <Link href='/Cart' className={`${'showMore'} ${style.navbar_basket_cart_goCart}`}>رفتن به سبد خرید</Link>
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

    <section className={style.navbar_menuBar}>
        <div className="containers">
            <ul className={style.navbar_menuBar_items}>
                <li className={style.navbar_menuBar_item}>
                    <Link href="/Wishlist" className={style.navbar_menuBar_link}>
                        <FaHeart/>
                    </Link>
                </li>
                <li className={style.navbar_menuBar_item}>
                    <button className={style.navbar_menuBar_link}>
                                    <FaSearch/>
                    </button>
                </li>
                {!isLogin ? (
                <li className={style.navbar_menuBar_item}>
                    <Link href="/LoginRegister" className={style.navbar_menuBar_link}>
                    <FaUser/>
                    </Link>
                </li>
                ):(
                    <li className={style.navbar_menuBar_item}>
                    <Link href={userRole === "ADMIN" ? '/P-admin' :'/P-user'}className={style.navbar_menuBar_link}>
                    <FaUser/>
                    </Link>
                </li>
                )}
                <li className={style.navbar_menuBar_item}>
                    <Link href="/Cart" className={style.navbar_menuBar_link}>
                        <FaShoppingBasket/>
                    </Link>
                </li>
            </ul>
        </div>
    </section>
    </>
  )
}

export default Navbar