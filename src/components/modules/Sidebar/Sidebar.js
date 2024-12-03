 "use client"
 import React, { useEffect, useState } from "react";
  import style from "./Sidebar.module.css";
  import Link from "next/link";
  import { LuLayoutGrid } from "react-icons/lu";
  import { FaBars, FaChartPie, FaShoppingBasket, FaTimes, FaUsers } from "react-icons/fa";
  import { IoLocationOutline, IoSettingsOutline ,IoHomeOutline, IoExitOutline  } from "react-icons/io5";
import { usePathname } from "next/navigation";

  function Sidebar() {
    const pathName = usePathname();
    const [sidebarMenu , setSidebarMenu ] =useState(false);
    const [activeLink ,  setActiveLink] = useState('/P-user')


    useEffect(()=>{
      const userLocation = pathName;
      setActiveLink(userLocation);
      window.scroll(0,0)
      setSidebarMenu(false)
    },[pathName])

    const handlerShowSidebar = ()=>{
      setSidebarMenu(true)
    }
    const handlerExitSidebar = ()=>{
      setSidebarMenu(false)
    }

    return (
    <>
      <section className={style.sidebar}>
      <div className={style.sidebar_container}>
            <div className={style.sidebar_wrapper}>
              <div className={style.sidebar_logo_menu}>
                <Link href="/" className={style.sidebar_logoLink}>
                  <img
                    src="/assets/images/plogo.svg"
                    alt=""
                    className={style.sidebar_logoImg}
                  />
                </Link>
                {/* sidebar p-user */}
                {/* <ul className={style.sidebar_items}>
                  <li className={style.sidebar_item}>
                    <Link href="/P-user" className={activeLink === '/P-user' ? style.sidebar_item_linkActive  :style.sidebar_item_link}>
                      <span className={style.sidebar_item_icon}>
                        <LuLayoutGrid />{" "}
                      </span>
                      <span className={style.sidebar_item_text}>داشبورد</span>
                    </Link>
                  </li>
                  <li className={style.sidebar_item}>
                    <Link href="/P-user/Orders" className={activeLink === '/P-user/Orders' ? style.sidebar_item_linkActive  :style.sidebar_item_link}>
                      <span className={style.sidebar_item_icon}>
                        <FaShoppingBasket />
                      </span>
                      <span className={style.sidebar_item_text}>سفارش</span>
                    </Link>
                  </li>
                  <li className={style.sidebar_item}>
                    <Link href="/P-user/Edit-Address" className={activeLink === '/P-user/Edit-Address' ? style.sidebar_item_linkActive  :style.sidebar_item_link}>
                      <span className={style.sidebar_item_icon}>
                        <IoLocationOutline />
                      </span>
                      <span className={style.sidebar_item_text}>آدرس</span>
                    </Link>
                  </li>
                  <li className={style.sidebar_item}>
                    <Link href="/P-user/Referral" className={activeLink === '/P-user/Referral' ? style.sidebar_item_linkActive  :style.sidebar_item_link}>
                      <span className={style.sidebar_item_icon}>
                        <IoSettingsOutline />
                      </span>
                      <span className={style.sidebar_item_text}>کد معرف</span>
                    </Link>
                  </li>
                  <li className={style.sidebar_item}>
                    <Link href="/P-user/Credit-History" className={activeLink === '/P-user/Credit-History' ? style.sidebar_item_linkActive  :style.sidebar_item_link}>
                      <span className={style.sidebar_item_icon}>
                        <IoSettingsOutline />
                      </span>
                      <span className={style.sidebar_item_text}>
                        تاریخچه اعتبارها
                      </span>
                    </Link>
                  </li>
                  <li className={style.sidebar_item}>
                    <Link href="/P-user/Edit-Account" className={activeLink === '/P-user/Edit-Account' ? style.sidebar_item_linkActive :style.sidebar_item_link}>
                      <span className={style.sidebar_item_icon}>
                        <IoSettingsOutline />
                      </span>
                      <span className={style.sidebar_item_text}>تنظیمات</span>
                    </Link>
                  </li>
                </ul> */}
                {/* sidebar p-admin */}
                <ul className={style.sidebar_items}>
                  <li className={style.sidebar_item}>
                    <Link href="/P-admin" className={activeLink === '/P-admin' ? style.sidebar_item_linkActive  :style.sidebar_item_link}>
                      <span className={style.sidebar_item_icon}>
                        <LuLayoutGrid />{" "}
                      </span>
                      <span className={style.sidebar_item_text}>داشبورد</span>
                    </Link>
                  </li>
                  <li className={style.sidebar_item}>
                    <Link href="/P-admin/Orders" className={activeLink === '/P-admin/Orders' ? style.sidebar_item_linkActive  :style.sidebar_item_link}>
                      <span className={style.sidebar_item_icon}>
                        <FaShoppingBasket />
                      </span>
                      <span className={style.sidebar_item_text}>سفارش ها</span>
                    </Link>
                  </li>
                  <li className={style.sidebar_item}>
                    <Link href="/P-admin/UserList" className={activeLink === '/P-admin/UserList' ? style.sidebar_item_linkActive  :style.sidebar_item_link}>
                      <span className={style.sidebar_item_icon}>
                        <FaUsers/>
                      </span>
                      <span className={style.sidebar_item_text}>کاربران</span>
                    </Link>
                  </li>
                  <li className={style.sidebar_item}>
                    <Link href="/P-admin/ListProducts" className={activeLink === '/P-admin/ListProducts' ? style.sidebar_item_linkActive  :style.sidebar_item_link}>
                      <span className={style.sidebar_item_icon}>
                        <IoSettingsOutline />
                      </span>
                      <span className={style.sidebar_item_text}>محصولات</span>
                    </Link>
                  </li>
                  <li className={style.sidebar_item}>
                    <Link href="/P-admin/ContactUs" className={activeLink === '/P-admin/ContactUs' ? style.sidebar_item_linkActive  :style.sidebar_item_link}>
                      <span className={style.sidebar_item_icon}>
                        <IoSettingsOutline />
                      </span>
                      <span className={style.sidebar_item_text}>
                         تماس ها
                      </span>
                    </Link>
                  </li>
                  <li className={style.sidebar_item}>
                    <Link href="/P-admin/Seller" className={activeLink === '/P-admin/Seller' ? style.sidebar_item_linkActive  :style.sidebar_item_link}>
                      <span className={style.sidebar_item_icon}>
                        <FaChartPie/>
                      </span>
                      <span className={style.sidebar_item_text}>
                          تاریخچه فروش
                      </span>
                    </Link>
                  </li>
                  <li className={style.sidebar_item}>
                    <Link href="/P-admin/Edit-Account" className={activeLink === '/P-admin/Edit-Account' ? style.sidebar_item_linkActive :style.sidebar_item_link}>
                      <span className={style.sidebar_item_icon}>
                        <IoSettingsOutline />
                      </span>
                      <span className={style.sidebar_item_text}>تنظیمات</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <ul className={style.sidebar_actionLinkBtn}>
              <li className={style.sidebar_item}>
                <Link href="/" className={style.sidebar_item_link}>
                  <span className={style.sidebar_item_icon}>
                    <IoHomeOutline  />
                  </span>
                  <span className={style.sidebar_item_text}>  صفحه اصلی</span>
                </Link>
              </li>
              <li className={style.sidebar_item}>
                <button className={style.sidebar_ExitButton}>
                    <span className={style.sidebar_exitButton_icon}>
                        <IoExitOutline/>
                    </span>
                    <span className={style.sidebar_exitButton_text}>خروج از حساب</span>
                </button>
              </li>
            </ul>
          </div>
      </section>


      {/* Responsive */}

      <span className={style.sidebar_icon}
      onClick={handlerShowSidebar}
      >
        <FaBars/>
      </span>
        <section className={sidebarMenu ?style.sidebar_res_active : style.sidebar_res}>
          <span className={style.sidebar_res_exit} onClick={handlerExitSidebar}>
            <FaTimes/>
          </span>
          <div className={style.sidebar_container}>
            <div className={style.sidebar_wrapper}>
              <div className={style.sidebar_logo_menu}>
                <Link href="/" className={style.sidebar_logoLink}>
                  <img
                    src="/assets/images/plogo.svg"
                    alt=""
                    className={style.sidebar_logoImg}
                  />
                </Link>
                   {/* sidebar p-user */}
                {/* <ul className={style.sidebar_items}>
                  <li className={style.sidebar_item}>
                    <Link href="/P-user" className={activeLink === '/P-user' ? style.sidebar_item_linkActive  :style.sidebar_item_link}>
                      <span className={style.sidebar_item_icon}>
                        <LuLayoutGrid />{" "}
                      </span>
                      <span className={style.sidebar_item_text}>داشبورد</span>
                    </Link>
                  </li>
                  <li className={style.sidebar_item}>
                    <Link href="/P-user/Orders" className={activeLink === '/P-user/Orders' ? style.sidebar_item_linkActive  :style.sidebar_item_link}>
                      <span className={style.sidebar_item_icon}>
                        <FaShoppingBasket />
                      </span>
                      <span className={style.sidebar_item_text}>سفارش</span>
                    </Link>
                  </li>
                  <li className={style.sidebar_item}>
                    <Link href="/P-user/Edit-Address" className={activeLink === '/P-user/Edit-Address' ? style.sidebar_item_linkActive  :style.sidebar_item_link}>
                      <span className={style.sidebar_item_icon}>
                        <IoLocationOutline />
                      </span>
                      <span className={style.sidebar_item_text}>آدرس</span>
                    </Link>
                  </li>
                  <li className={style.sidebar_item}>
                    <Link href="/P-user/Referral" className={activeLink === '/P-user/Referral' ? style.sidebar_item_linkActive  :style.sidebar_item_link}>
                      <span className={style.sidebar_item_icon}>
                        <IoSettingsOutline />
                      </span>
                      <span className={style.sidebar_item_text}>کد معرف</span>
                    </Link>
                  </li>
                  <li className={style.sidebar_item}>
                    <Link href="/P-user/Credit-History" className={activeLink === '/P-user/Credit-History' ? style.sidebar_item_linkActive  :style.sidebar_item_link}>
                      <span className={style.sidebar_item_icon}>
                        <IoSettingsOutline />
                      </span>
                      <span className={style.sidebar_item_text}>
                        تاریخچه اعتبارها
                      </span>
                    </Link>
                  </li>
                  <li className={style.sidebar_item}>
                    <Link href="/P-user/Edit-Account" className={activeLink === '/P-user/Edit-Account' ? style.sidebar_item_linkActive :style.sidebar_item_link}>
                      <span className={style.sidebar_item_icon}>
                        <IoSettingsOutline />
                      </span>
                      <span className={style.sidebar_item_text}>تنظیمات</span>
                    </Link>
                  </li>
                </ul> */}
                {/* sidebar p-admin */}
                <ul className={style.sidebar_items}>
                  <li className={style.sidebar_item}>
                    <Link href="/P-admin" className={activeLink === '/P-admin' ? style.sidebar_item_linkActive  :style.sidebar_item_link}>
                      <span className={style.sidebar_item_icon}>
                        <LuLayoutGrid />{" "}
                      </span>
                      <span className={style.sidebar_item_text}>داشبورد</span>
                    </Link>
                  </li>
                  <li className={style.sidebar_item}>
                    <Link href="/P-admin/Orders" className={activeLink === '/P-admin/Orders' ? style.sidebar_item_linkActive  :style.sidebar_item_link}>
                      <span className={style.sidebar_item_icon}>
                        <FaShoppingBasket />
                      </span>
                      <span className={style.sidebar_item_text}>سفارش ها</span>
                    </Link>
                  </li>
                  <li className={style.sidebar_item}>
                    <Link href="/P-admin/UserList" className={activeLink === '/P-admin/UserList' ? style.sidebar_item_linkActive  :style.sidebar_item_link}>
                      <span className={style.sidebar_item_icon}>
                        <FaUsers/>
                      </span>
                      <span className={style.sidebar_item_text}>کاربران</span>
                    </Link>
                  </li>
                  <li className={style.sidebar_item}>
                    <Link href="/P-admin/ListProducts" className={activeLink === '/P-admin/ListProducts' ? style.sidebar_item_linkActive  :style.sidebar_item_link}>
                      <span className={style.sidebar_item_icon}>
                        <IoSettingsOutline />
                      </span>
                      <span className={style.sidebar_item_text}>محصولات</span>
                    </Link>
                  </li>
                  <li className={style.sidebar_item}>
                    <Link href="/P-admin/ContactUs" className={activeLink === '/P-admin/ContactUs' ? style.sidebar_item_linkActive  :style.sidebar_item_link}>
                      <span className={style.sidebar_item_icon}>
                        <IoSettingsOutline />
                      </span>
                      <span className={style.sidebar_item_text}>
                         تماس ها
                      </span>
                    </Link>
                  </li>
                  <li className={style.sidebar_item}>
                    <Link href="/P-admin/Seller" className={activeLink === '/P-admin/Seller' ? style.sidebar_item_linkActive  :style.sidebar_item_link}>
                      <span className={style.sidebar_item_icon}>
                        <FaChartPie/>
                      </span>
                      <span className={style.sidebar_item_text}>
                          تاریخچه فروش
                      </span>
                    </Link>
                  </li>
                  <li className={style.sidebar_item}>
                    <Link href="/P-admin/Edit-Account" className={activeLink === '/P-admin/Edit-Account' ? style.sidebar_item_linkActive :style.sidebar_item_link}>
                      <span className={style.sidebar_item_icon}>
                        <IoSettingsOutline />
                      </span>
                      <span className={style.sidebar_item_text}>تنظیمات</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <ul className={style.sidebar_actionLinkBtn}>
              <li className={style.sidebar_item}>
                <Link href="/" className={style.sidebar_item_link}>
                  <span className={style.sidebar_item_icon}>
                    <IoHomeOutline  />
                  </span>
                  <span className={style.sidebar_item_text}>  صفحه اصلی</span>
                </Link>
              </li>
              <li className={style.sidebar_item}>
                <button className={style.sidebar_ExitButton}>
                    <span className={style.sidebar_exitButton_icon}>
                        <IoExitOutline/>
                    </span>
                    <span className={style.sidebar_exitButton_text}>خروج از حساب</span>
                </button>
              </li>
            </ul>
          </div>
        </section>
    </>
    );
  }

  export default Sidebar;
