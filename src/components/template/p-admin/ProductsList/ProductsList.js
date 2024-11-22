"use client"
import React, { useEffect, useState } from 'react';
import style from './ProductsList.module.css'
import Link from 'next/link';
import { FaTimes } from 'react-icons/fa';


function ProductsList() {
    const [products ,  setProducts] = useState([]);
    const [selectProduct ,  setSelectProduct] = useState(null);

    // handler Show Exit
    const handlerShowExit = () => {
        setSelectProduct(null)
    }
    useEffect(()=>{

        const handlerKeyDown = (e)=>{
            if(e.key === "Escape"){
                setSelectProduct(null)
            }
        }

        window.addEventListener("keydown" , handlerKeyDown);

        return ()=> window.removeEventListener("keydown" , handlerKeyDown);
    },[])

    // HandlerShowDetails
    const handlerShowDetails = (product)=>{
         setSelectProduct(product)
    }

    // Get Products 
    useEffect(()=>{
        const getProducts = async()=>{
            const res = await fetch('/api/products');
            const data = await res.json();
            setProducts([...data]);
        };
        getProducts()
    },[])

  return (
    <section className={style.productList}>
        <div className="container">
            <div className="row">
                <h6 className="admin-title">افزودن محصول</h6>
                <div className="col-12">
                    <Link href="/P-admin/AddProduct" className={style.productList_addProduct}>اضافه کردن محصول</Link>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-12">
                    <div className="boxPanel">
                    <div className={style.productList_search}>
                        <input type="text" className={style.productList_search_input}  placeholder='جستجو محصول'/>
                        <button className={`${"showMore"} ${style.productList_search_btn}`}>جستجو</button>
                    </div>
                    </div>
                </div>
            </div>
            <div className="row mt-4 row-gap-3">
                {products.map((product)=>(     
                <div className="col-lg-3 col-md-6 col-sm-12" key={product._id}>
                    <div className="boxPanel">
                    <div className={style.productList_item}>
                        <img src={product.img[0]} alt={product.name}className={style.productList_item_img} />
                        <span className={style.productList_item_name}>{product.name}</span>
                        <div className={style.productList_item_wrapper}>
                            <button className={`${"showMore"} ${style.productList_item_btn}`}
                            onClick={()=>handlerShowDetails(product)}
                            >جزئیات</button> 
                            <button className={`${"showMore"} ${style.productList_item_btn}`}>ویرایش</button> 
                            <button className={`${"showMore"} ${style.productList_item_btn}`}>حذف</button> 
                        </div>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            {selectProduct && (
                <div className={style.shadow}>
                    <span className={style.shadowExit}
                    onClick={handlerShowExit}
                    >
                        <FaTimes/>
                    </span>
                    <section className={style.details}>
                        <h5 className={style.details_title}>جزئیات محصول : {selectProduct.name}</h5>
                        <div className={style.details_images}>
                            {selectProduct.img.map((img , index)=>(
                                 <img src={img} alt="" key={index} className={style.details_img} />
                            ))}
                        </div>
                        <p className={style.details_description}>
                            <span className={style.details_description_span}>توضیحات :</span>
                            {selectProduct.description}
                            </p>
                            <div className={style.details_wrapper}>
                                <ul className={style.details_items}>
                                    <li className={style.details_item}>
                                        <span className={style.details_item_title}> گونه :</span>
                                        <span className={style.details_item_text}>{selectProduct.model}</span>
                                    </li>
                                    <li className={style.details_item}>
                                        <span className={style.details_item_title}>روش فرآوری :</span>
                                        <span className={style.details_item_text}>{selectProduct.method}</span>
                                    </li>
                                    <li className={style.details_item}>
                                        <span className={style.details_item_title}>منطقه رشد :</span>
                                        <span className={style.details_item_text}>{selectProduct.growRegion}</span>
                                    </li>
                                    <li className={style.details_item}>
                                        <span className={style.details_item_title}>طعم یاد :</span>
                                        <span className={style.details_item_text}>{selectProduct.taste}</span>
                                    </li>
                                    <li className={style.details_item}>
                                        <span className={style.details_item_title}>شیرینی :</span>
                                        <span className={style.details_item_text}>{selectProduct.sweet}</span>
                                    </li>
                                    <li className={style.details_item}>
                                        <span className={style.details_item_title}>جان مایع بادی :</span>
                                        <span className={style.details_item_text}>{selectProduct.liquid}</span>
                                    </li>
                                    <li className={style.details_item}>
                                        <span className={style.details_item_title}>اسیدیته :</span>
                                        <span className={style.details_item_text}>{selectProduct.acidity}</span>
                                    </li>
                                    <li className={style.details_item}>
                                        <span className={style.details_item_title}>دم افزار پیشنهادی :</span>
                                        <span className={style.details_item_text}>{selectProduct.software}</span>
                                    </li>
                                    <li className={style.details_item}>
                                        <span className={style.details_item_title}>نوع بستبندی :</span>
                                        <span className={style.details_item_text}>{selectProduct.packaging}</span>
                                    </li>
                                    <li className={style.details_item}>
                                        <span className={style.details_item_title}>زیرگونه :</span>
                                        <span className={style.details_item_text}>{selectProduct.subModel}</span>
                                    </li>
                                    <li className={style.details_item}>
                                        <span className={style.details_item_title}>مواد تشکیل دهند :</span>
                                        <span className={style.details_item_text}>{selectProduct.materials}</span>
                                    </li>
                                </ul>
                                <ul className={style.details_items}>
                                    <li className={style.details_item}>
                                        <span className={style.details_item_title}>ارتفاع :</span>
                                        <span className={style.details_item_text}>{selectProduct.height}</span>
                                    </li>
                                    <li className={style.details_item}>
                                        <span className={style.details_item_title}>میزان کافئین</span>
                                        <span className={style.details_item_text}>{selectProduct.caffeine}</span>
                                    </li>
                                    <li className={style.details_item}>
                                        <span className={style.details_item_title}>پس طعم :</span>
                                        <span className={style.details_item_text}>{selectProduct.beforeTaste}</span>
                                    </li>
                                    <li className={style.details_item}>
                                        <span className={style.details_item_title}>رایحه :</span>
                                        <span className={style.details_item_text}>{selectProduct.scent}</span>
                                    </li>
                                    <li className={style.details_item}>
                                        <span className={style.details_item_title}>برشته کاری :</span>
                                        <span className={style.details_item_text}>{selectProduct.roastCurry}</span>
                                    </li>
                                    <li className={style.details_item}>
                                        <span className={style.details_item_title}>میزان تلخی :</span>
                                        <span className={style.details_item_text}>{selectProduct.bitterness}</span>
                                    </li>
                                    <li className={style.details_item}>
                                        <span className={style.details_item_title}>ابعاد بسته بندی :</span>
                                        <span className={style.details_item_text}>{selectProduct.dimensionsPack}</span>
                                    </li>
                                    <li className={style.details_item}>
                                        <span className={style.details_item_title}>ساخت :</span>
                                        <span className={style.details_item_text}>{selectProduct.create}</span>
                                    </li>
                                    <li className={style.details_item}>
                                        <span className={style.details_item_title}>برچسپ :</span>
                                        <span className={style.details_item_text}>{selectProduct.tags}</span>
                                    </li>
                                </ul>
                            </div>
                    </section>
                </div>
            )}

        </div>
    </section>
  )
}

export default ProductsList