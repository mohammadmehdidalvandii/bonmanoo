import React from 'react';
import style from './Footer.module.css';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMailBulk, FaPhone, FaPinterest, FaTelegram, FaWhatsapp, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
   <>
    <section className={style.footer_newsDiscount}>
        <div className="containers">
            <div className="row">
                <div className="col-12">
                    <div className={style.footer_newsDiscount_wrapper}>
                        <span className={style.footer_newsDiscount_text}>از تخفیف ها و اخبار با خبر شوید</span>
                        <div className={style.footer_newsDiscount_box}>
                            <input type="text" className={style.footer_newsDiscount_input} placeholder='آدرس ایمیل شما'/>
                            <button className={style.footer_newsDiscount_btn}>ارسال</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className={style.footer}>
        <div className="containers">
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <div className={style.footer_content}>
                        <img src="/assets/images/footer.svg" alt="footer logo" className={style.footer_logo} />
                        <p className={style.footer_description}>بن‌مانو، فروشگاه اینترنتی قهوه است که خرید آنلاین قهوه در دسته‌بندی‌‌های متفاوت را برای همه افراد در سراسر کشور امکان‌پذیر کرده است.</p>
                        <div className={style.footer_media_wrapper}>
                            <Link href="#" className={style.footer_media_link}>
                                <FaInstagram/>
                            </Link>
                            <Link href="#" className={style.footer_media_link}>
                                <FaFacebook/>
                            </Link>
                            <Link href="#" className={style.footer_media_link}>
                                <FaTelegram/>
                            </Link>
                            <Link href="#" className={style.footer_media_link}>
                                <FaPinterest/>
                            </Link>
                            <Link href="#" className={style.footer_media_link}>
                                <FaLinkedin/>
                            </Link>
                            <Link href="#" className={style.footer_media_link}>
                                <FaYoutube/>
                            </Link>
                            <Link href="#" className={style.footer_media_link}>
                                <FaWhatsapp/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-6 col-xs-12">
                    <div className={style.footer_menu_wrapper}>
                            <ul className={style.footer_items}>
                                <h5 className={style.footer_item_title}>تماس با ما</h5>
                                <li className={style.footer_contact}>
                                        <span className={style.footer_contact_icon}>
                                            <FaLocationArrow/>
                                        </span>
                                        <span className={style.footer_contact_text}>
                                            
تهران، بلوار میرداماد، خیابان البرز، کوچه قبادیان شرقی، پلاک ۳۳
                                        </span>
                                </li>
                                <li className={style.footer_contact}>
                                        <span className={style.footer_contact_icon}>
                                            <FaPhone/>
                                        </span>
                                        <span className={style.footer_contact_text}>
                                            021 77 77 888
                                        </span>
                                </li>
                                <li className={style.footer_contact}>
                                        <span className={style.footer_contact_icon}>
                                            <FaPhone/>
                                        </span>
                                        <span className={style.footer_contact_text}>
                                            021 77 77 889
                                        </span>
                                </li>
                                <li className={style.footer_contact}>
                                        <span className={style.footer_contact_icon}>
                                            <FaMailBulk/>
                                        </span>
                                        <span className={style.footer_contact_text}>
                                        info@bonmano.com
                                        </span>
                                </li>
                                
                            </ul>
                            <ul className={style.footer_items}>
                                <h5 className={style.footer_item_title}>خدمات مشتریان</h5>
                                <li className={style.footer_item}>
                                    <Link href="/Faq" className={style.footer_item_link}>سوالات متداول</Link>
                                </li>
                                <li className={style.footer_item}>
                                    <Link href="/Terms-Conditions" className={style.footer_item_link}>قوانین و مقررات</Link>
                                </li>
                                <li className={style.footer_item}>
                                    <Link href="/Order-guide" className={style.footer_item_link}>چگونه در بن مانو سفارش خود را ثبت کنیم ؟</Link>
                                </li>
                            </ul>
                            <ul className={style.footer_items}>
                                <h5 className={style.footer_item_title}>با بن مانو</h5>
                                <li className={style.footer_item}>
                                    <Link href="/AboutUs" className={style.footer_item_link}>درباره ما</Link>
                                </li>
                                <li className={style.footer_item}>
                                    <Link href="/Blog" className={style.footer_item_link}>مجله بن مانو</Link>
                                </li>
                                <li className={style.footer_item}>
                                    <Link href="/Careers" className={style.footer_item_link}>فرصت های شغلی</Link>
                                </li>
                                <li className={style.footer_item}>
                                    <Link href="/Retail-Apply" className={style.footer_item_link}>ثبت درخواست نمایندگی خرده فروش</Link>
                                </li>
                            </ul>
                            <ul className={style.footer_items}>
                                <h5 className={style.footer_item_title}>محصولات</h5>
                                <li className={style.footer_item}>
                                    <Link href="#" className={style.footer_item_link}>نورسکا</Link>
                                </li>
                                <li className={style.footer_item}>
                                    <Link href="#" className={style.footer_item_link}>کپسول اسپرسو</Link>
                                </li>
                                <li className={style.footer_item}>
                                    <Link href="#" className={style.footer_item_link}>اسپرسو</Link>
                                </li>
                                <li className={style.footer_item}>
                                    <Link href="#" className={style.footer_item_link}>قهوه فوری</Link>
                                </li>
                                <li className={style.footer_item}>
                                    <Link href="#" className={style.footer_item_link}>پودرهای ترکیبی</Link>
                                </li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
   </>
  )
}

export default Footer