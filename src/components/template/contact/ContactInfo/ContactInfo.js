import React from "react";
import style from "./ContactInfo.module.css";
import Link from "next/link";
import { FaMailBulk, FaPhone, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";

function ContactInfo() {

  return (
    <section className={style.contactInfo}>
      <div className="containers">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className={style.contactInfo_content}>
              <h6 className={style.contactInfo_title}>
                اطلاعات تماس دفتر مرکزی بن‌مانو
              </h6>
              <ul className={style.contactInfo_items}>
                <li className={style.contactInfo_item}>
                  <span className={style.contactInfo_icon}>
                    <FaPhone />
                  </span>
                  <div className={style.contactInfo_content_wrapper}>
                    <span className={style.contactInfo_text}>02174881</span>
                  </div>
                </li>
                <li className={style.contactInfo_item}>
                  <span className={style.contactInfo_icon}>
                    <FaPhoneAlt />
                  </span>
                  <div className={style.contactInfo_content_wrapper}>
                    <span className={style.contactInfo_text}>02174882101 </span>
                  </div>
                </li>
                <li className={style.contactInfo_item}>
                  <span className={style.contactInfo_icon}>
                    <FaMailBulk />
                  </span>
                  <div className={style.contactInfo_content_wrapper}>
                    <Link href="#" className={style.contactInfo_link}>
                      info@bonmano.com
                    </Link>
                  </div>
                </li>
                <li className={style.contactInfo_item}>
                  <span className={style.contactInfo_icon}>
                    <FaLocationDot />
                  </span>
                  <div className={style.contactInfo_content_wrapper}>
                    <span className={style.contactInfo_text}>
                      تهران، بلوار میرداماد،
                    </span>
                    <span className={style.contactInfo_text}>
                      خیابان البرز، کوچه قبادیان شرقی، پلاک ۳۳
                    </span>
                  </div>
                </li>
                <li className={style.contactInfo_item}>
                  <span className={style.contactInfo_icon}>
                    <MdAccessTime />
                  </span>
                  <div className={style.contactInfo_content_wrapper}>
                    <span className={style.contactInfo_text}>
                      شنبه تا چهارشنبه از ساعت 8:00 - 16:30
                    </span>
                    <span className={style.contactInfo_text}>
                      پنج‌شنبه از ساعت 8:00 - 12:30
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-12">
              <iframe src="https://map.ir/lat/35.760763/lng/51.425029/z/17" frameborder="2" className={style.contactInfo_map}></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
