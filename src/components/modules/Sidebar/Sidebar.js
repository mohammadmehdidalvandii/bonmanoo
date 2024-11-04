import React from "react";
import style from "./Sidebar.module.css";
import Link from "next/link";
import { LuLayoutGrid } from "react-icons/lu";
import { FaShoppingBasket } from "react-icons/fa";
import { IoLocationOutline, IoSettingsOutline ,IoHomeOutline, IoExitOutline  } from "react-icons/io5";

function Sidebar() {
  return (
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
            <ul className={style.sidebar_items}>
              <li className={style.sidebar_item}>
                <Link href="/P-user" className={style.sidebar_item_linkActive}>
                  <span className={style.sidebar_item_icon}>
                    <LuLayoutGrid />{" "}
                  </span>
                  <span className={style.sidebar_item_text}>داشبورد</span>
                </Link>
              </li>
              <li className={style.sidebar_item}>
                <Link href="/P-user/Orders" className={style.sidebar_item_link}>
                  <span className={style.sidebar_item_icon}>
                    <FaShoppingBasket />
                  </span>
                  <span className={style.sidebar_item_text}>سفارش</span>
                </Link>
              </li>
              <li className={style.sidebar_item}>
                <Link href="/P-user/Edit-Address" className={style.sidebar_item_link}>
                  <span className={style.sidebar_item_icon}>
                    <IoLocationOutline />
                  </span>
                  <span className={style.sidebar_item_text}>آدرس</span>
                </Link>
              </li>
              <li className={style.sidebar_item}>
                <Link href="/P-user" className={style.sidebar_item_link}>
                  <span className={style.sidebar_item_icon}>
                    <IoSettingsOutline />
                  </span>
                  <span className={style.sidebar_item_text}>کد معرف</span>
                </Link>
              </li>
              <li className={style.sidebar_item}>
                <Link href="/P-user" className={style.sidebar_item_link}>
                  <span className={style.sidebar_item_icon}>
                    <IoSettingsOutline />
                  </span>
                  <span className={style.sidebar_item_text}>
                    تاریخچه اعتبارها
                  </span>
                </Link>
              </li>
              <li className={style.sidebar_item}>
                <Link href="/P-user" className={style.sidebar_item_link}>
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
  );
}

export default Sidebar;
