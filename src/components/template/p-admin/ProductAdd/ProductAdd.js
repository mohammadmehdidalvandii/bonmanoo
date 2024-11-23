"use client"
import React, { useEffect, useState } from "react";
import style from "./ProductAdd.module.css";
import swal from "sweetalert";

function ProductAdd() {
  const [categoryProducts , setCategoryProducts] = useState([]);
  const [productsType , setProductsType] = useState([])
  const [productsSub , setProductsSub] = useState([])
  const [categoryProductsID , setCategoryProductsID] = useState(-1)
  const [typeProductID , setTypeProductsID] = useState(-1);
  const [subProductsID , setProductsID] = useState(-1)

 const [titleEn ,  setTitleEn] = useState("");
 const [name , setName] = useState("");
 const [category , setCategory] = useState("");
 const [typeProduct , setTypeProduct] = useState("");
 const [subProduct , setSubProduct] = useState("");
 const [description , setDescription] = useState("");
 const [model , setModel] = useState("");
 const [method ,  setMethod] = useState("");
 const [growRegion , setGrowRegion] = useState("");
 const [taste , setTaste] = useState("");
 const [sweet , setSweet] = useState("");
 const [liquid , setLiquid] = useState("");
 const [acidity ,setAcidity] = useState("");
 const [software , setSoftware] = useState("");
 const [packaging , setPackaging] = useState("");
 const [subModel , setSubModel] = useState("");
 const [materials , setMaterials] = useState("");
 const [height , setHeight] = useState("");
 const [caffeine , setCaffeine] = useState("");
 const [beforeTaste , setBeforeTaste] = useState("");
 const [scent , setScent] = useState("");
 const [roastCurry , setRoastCurry] = useState("");
 const [bitterness ,  setBitterness] = useState("");
 const [dimensionsPack , setDimensionPack] = useState("");
 const [create , setCreate] = useState("");
 const [tags ,setTags] = useState("");
 const [price ,setPrice] = useState("");
 const [img , setImg] = useState("");


//  Handler Add Product

  const handlerAddProduct = async (e)=>{
    e.preventDefault();

    // Validations ; 

    const formData = new FormData();

    formData.append("titleEn", titleEn);
    formData.append("name", name);
    formData.append("category", categoryProductsID);
    formData.append("typeProduct", typeProductID);
    formData.append("subProductsID", subProductsID === "-1" ?"تعریف نشد":subProductsID);
    formData.append("description", description);
    formData.append("model", model);
    formData.append("method", method);
    formData.append("growRegion", growRegion);
    formData.append("taste", taste);
    formData.append("sweet", sweet);
    formData.append("liquid", liquid);
    formData.append("acidity", acidity);
    formData.append("software", software);
    formData.append("packaging", packaging);
    formData.append("subModel", subModel);
    formData.append("materials", materials);
    formData.append("height", height);
    formData.append("caffeine", caffeine);
    formData.append("beforeTaste", beforeTaste);
    formData.append("scent", scent);
    formData.append("roastCurry", roastCurry);
    formData.append("bitterness", bitterness);
    formData.append("dimensionsPack", dimensionsPack);
    formData.append("create", create);
    formData.append("tags", tags.split(","));
    formData.append("price", price);
    formData.append("img", img);
    img.forEach((file)=>{
      formData.append("img[]" , file)
    });

    const res = await fetch('/api/products',{
      method: "POST",
      body: formData,
    });

    if(res.status === 201 ){
      swal({
        title:"محصول با موفقیت اضافه شد",
        icon:"success",
        buttons:"متوجه شدم"
      }).then(()=>{
        location.reload()
      })
    } else if(res.status === 422 || res.status === 419){
      swal({
        title:"اطلاعات به درستی وارد نشد است",
        icon:"error",
        buttons:"تلاش مجدد"
      })
    }

  }

  const handlerChangeImg =  (e)=>{
    const files = e.target.files;
    console.log("files=>" ,files)
    setImg(Array.from(files));
  }

  // get CategoryProducts

  useEffect(()=>{
    const getCategoryProducts = async ()=>{
      const res = await fetch('/api/cate-prod');
      const data = await res.json();
      setCategoryProducts([...data])
    };
    getCategoryProducts()
  },[])

    // Get TypeProducts ID
    useEffect(()=>{
      const getTypeProducts = async ()=>{
        if(categoryProductsID !== -1){
        const res = await fetch(`/api/cate-prod/type-products/${categoryProductsID}`);
        if(res.status === 200){
          const data = await res.json();
          setProductsType([...data.typeProducts])
        }
      }
      }
  
      getTypeProducts()
    },[categoryProductsID])

    // Get SubProducts ID
    useEffect(()=>{
        const getSubProducts = async ()=>{
          if(typeProductID !== -1){
          const res = await fetch(`/api/cate-prod/type-products/sub-products/${typeProductID}`);
          if(res.status === 200){
              const data = await res.json();
              setProductsSub([...data.subProducts])
            }
          }
        };
        getSubProducts();
    },[typeProductID])


  return (
    <section className={style.productAdd}>
      <div className="container">
        <div className="row">
          <h6 className="admin-title">افزودن محصول</h6>
          <div className="col-12">
            <div className="boxPanel">
              <form action="#" className={style.productAdd_form}>
                <div className={style.productAdd_wrapper}>
                  <div className={style.productAdd_formBox}>
                    <label
                      htmlFor="#"
                      className={style.productAdd_formBox_label}
                    >
                      عنوان فرعی (انگلیسی)
                    </label>
                    <input
                      type="text"
                      value={titleEn}
                      onChange={(e)=>setTitleEn(e.target.value)}
                      className={style.productAdd_formBox_input}
                    />
                  </div>
                  <div className={style.productAdd_formBox}>
                    <label
                      htmlFor="#"
                      className={style.productAdd_formBox_label}
                    >
                      نام محصول
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e)=>setName(e.target.value)}
                      className={style.productAdd_formBox_input}
                    />
                  </div>
                  <div className={style.productAdd_formBox}>
                    <label
                      htmlFor="#"
                      className={style.productAdd_formBox_label}
                    >
                      دسته بندی
                    </label>
                    <select
                      name="#"
                      id="#"
                      onChange={(e)=>setCategoryProductsID(e.target.value)}
                      className={style.productAdd_formBox_select}
                    >
                      <option value={-1}>انتخاب کنید</option>
                      {categoryProducts.map(cateProduct=>(
                        <option value={cateProduct._id} key={cateProduct._id}>{cateProduct.name}</option>
                      ))}
                    </select>
                  </div>
                </div>


                <div className={style.productAdd_wrapper}>
               
                  <div className={style.productAdd_formBox}>
                    <label
                      htmlFor="#"
                      className={style.productAdd_formBox_label}
                    >
                       تایپ محصول
                    </label>
                    <select
                      name="#"
                      id="#"
                      onChange={(e)=>setTypeProductsID(e.target.value)}
                      className={style.productAdd_formBox_select}
                    >
                      <option value={-1}>انتخاب کنید</option>
                      {productsType.map(product=>(
                         <option value={product._id} key={product._id}>{product.name}</option>
                      ))}
                    </select>
                  </div>
                  {productsSub.length > 0 && (
                  <div className={style.productAdd_formBox}>
                    <label
                      htmlFor="#"
                      className={style.productAdd_formBox_label}
                    >
                       زیرمجموعه محصول
                    </label>
                    <select
                      name="#"
                      id="#"
                      onChange={(e)=>setProductsID(e.target.value)}
                      className={style.productAdd_formBox_select}
                    >
                      <option value={-1}>انتخاب کنید</option>
                      {productsSub.map(subProduct=>(
                         <option value={subProduct._id} key={subProduct._id}>{subProduct.name}</option>
                      ))}
                    </select>
                  </div>
                  )}
                </div>
                <div className={style.productAdd_formBox}>
                  <label htmlFor="#" className={style.productAdd_formBox_label}>
                    توضیحات
                  </label>
                  <textarea
                    type="text"
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                    className={style.productAdd_formBox_text}
                  />
                </div>
                <div className={style.productAdd_wrapper}>
                  <div className={style.productAdd_formBox}>
                    <label
                      htmlFor="#"
                      className={style.productAdd_formBox_label}
                    >نام محصول :</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e)=>setName(e.target.value)}
                      className={style.productAdd_formBox_input}
                    />
                  </div>
                  <div className={style.productAdd_formBox}>
                    <label
                      htmlFor="#"
                      className={style.productAdd_formBox_label}
                    >گونه :</label>
                    <input
                      type="text"
                      value={model}
                      onChange={(e)=>setModel(e.target.value)}
                      className={style.productAdd_formBox_input}
                    />
                  </div>
                  <div className={style.productAdd_formBox}>
                    <label
                      htmlFor="#"
                      className={style.productAdd_formBox_label}
                    >روش فرآوری :</label>
                    <input
                      type="text"
                      value={method}
                      onChange={(e)=>setMethod(e.target.value)}
                      className={style.productAdd_formBox_input}
                    />
                  </div>
                  <div className={style.productAdd_formBox}>
                    <label
                      htmlFor="#"
                      className={style.productAdd_formBox_label}
                    >منطقه رشد :</label>
                    <input
                      type="text"
                      value={growRegion}
                      onChange={(e)=>setGrowRegion(e.target.value)}
                      className={style.productAdd_formBox_input}
                    />
                  </div>
                  <div className={style.productAdd_formBox}>
                    <label
                      htmlFor="#"
                      className={style.productAdd_formBox_label}
                    >طعم یاد :</label>
                    <input
                      type="text"
                      value={taste}
                      onChange={(e)=>setTaste(e.target.value)}
                      className={style.productAdd_formBox_input}
                    />
                  </div>
                </div>
                <div className={style.productAdd_wrapper}>
                  <div className={style.productAdd_formBox}>
                    <label
                      htmlFor="#"
                      className={style.productAdd_formBox_label}
                    >شیرینی :</label>
                    <input
                      type="text"
                      value={sweet}
                      onChange={(e)=>setSweet(e.target.value)}
                      className={style.productAdd_formBox_input}
                    />
                  </div>
                  <div className={style.productAdd_formBox}>
                    <label
                      htmlFor="#"
                      className={style.productAdd_formBox_label}
                    >جان مایه بادی :</label>
                    <input
                      type="text"
                      value={liquid}
                      onChange={(e)=>setLiquid(e.target.value)}
                      className={style.productAdd_formBox_input}
                    />
                  </div>
                  <div className={style.productAdd_formBox}>
                    <label
                      htmlFor="#"
                      className={style.productAdd_formBox_label}
                    >اسیدیته :</label>
                    <input
                      type="text"
                      value={acidity}
                      onChange={(e)=>setAcidity(e.target.value)}
                      className={style.productAdd_formBox_input}
                    />
                  </div>
                  <div className={style.productAdd_formBox}>
                    <label
                      htmlFor="#"
                      className={style.productAdd_formBox_label}
                    >دم افزار پیشنهادی :</label>
                    <input
                      type="text"
                      value={software}
                      onChange={(e)=>setSoftware(e.target.value)}
                      className={style.productAdd_formBox_input}
                    />
                  </div>
                  <div className={style.productAdd_formBox}>
                    <label
                      htmlFor="#"
                      className={style.productAdd_formBox_label}
                    >نوع بسته بندی</label>
                    <input
                      type="text"
                      value={packaging}
                      onChange={(e)=>setPackaging(e.target.value)}
                      className={style.productAdd_formBox_input}
                    />
                  </div>
                </div>
                <div className={style.productAdd_wrapper}>
                  <div className={style.productAdd_formBox}>
                    <label
                      htmlFor="#"
                      className={style.productAdd_formBox_label}
                    >زیرگونه :</label>
                    <input
                      type="text"
                      value={subModel}
                      onChange={(e)=>setSubModel(e.target.value)}
                      className={style.productAdd_formBox_input}
                    />
                  </div>
                  <div className={style.productAdd_formBox}>
                    <label
                      htmlFor="#"
                      className={style.productAdd_formBox_label}
                    >مواد تشکیل دهنده :</label>
                    <input
                      type="text"
                      value={materials}
                      onChange={(e)=>setMaterials(e.target.value)}
                      className={style.productAdd_formBox_input}
                    />
                  </div>
                  <div className={style.productAdd_formBox}>
                    <label
                      htmlFor="#"
                      className={style.productAdd_formBox_label}
                    >ارتفاع :</label>
                    <input
                      type="text"
                      value={height}
                      onChange={(e)=>setHeight(e.target.value)}
                      className={style.productAdd_formBox_input}
                    />
                  </div>
                  <div className={style.productAdd_formBox}>
                    <label
                      htmlFor="#"
                      className={style.productAdd_formBox_label}
                    >میزان کافئین :</label>
                    <input
                      type="text"
                      value={caffeine}
                      onChange={(e)=>setCaffeine(e.target.value)}
                      className={style.productAdd_formBox_input}
                    />
                  </div>
                  <div className={style.productAdd_formBox}>
                    <label
                      htmlFor="#"
                      className={style.productAdd_formBox_label}
                    >پس طعم :</label>
                    <input
                      type="text"
                      value={beforeTaste}
                      onChange={(e)=>setBeforeTaste(e.target.value)}
                      className={style.productAdd_formBox_input}
                    />
                  </div>
                </div>
                <div className={style.productAdd_wrapper}>
                  <div className={style.productAdd_formBox}>
                    <label
                      htmlFor="#"
                      className={style.productAdd_formBox_label}
                    >رایحه :</label>
                    <input
                      type="text"
                      value={scent}
                      onChange={(e)=>setScent(e.target.value)}
                      className={style.productAdd_formBox_input}
                    />
                  </div>
                  <div className={style.productAdd_formBox}>
                    <label
                      htmlFor="#"
                      className={style.productAdd_formBox_label}
                    >درجه برشته کاری :</label>
                    <input
                      type="text"
                      value={roastCurry}
                      onChange={(e)=>setRoastCurry(e.target.value)}
                      className={style.productAdd_formBox_input}
                    />
                  </div>
                  <div className={style.productAdd_formBox}>
                    <label
                      htmlFor="#"
                      className={style.productAdd_formBox_label}
                    >میزان تلخی :</label>
                    <input
                      type="text"
                      value={bitterness}
                      onChange={(e)=>setBitterness(e.target.value)}
                      className={style.productAdd_formBox_input}
                    />
                  </div>
                  <div className={style.productAdd_formBox}>
                    <label
                      htmlFor="#"
                      className={style.productAdd_formBox_label}
                    >ابعادبسته بندی :</label>
                    <input
                      type="text"
                      value={dimensionsPack}
                      onChange={(e)=>setDimensionPack(e.target.value)}
                      className={style.productAdd_formBox_input}
                    />
                  </div>
                  <div className={style.productAdd_formBox}>
                    <label
                      htmlFor="#"
                      className={style.productAdd_formBox_label}
                    >ساخت :</label>
                    <input
                      type="text"
                      value={create}
                      onChange={(e)=>setCreate(e.target.value)}
                      className={style.productAdd_formBox_input}
                    />
                  </div>
                </div>
                <div className={style.productAdd_formBox}>
                    <label
                      htmlFor="#"
                      className={style.productAdd_formBox_label}
                    >
                      تگ ها (فاصله بین تگ ها  , استفاده شود)
                    </label>
                    <input
                      type="text"
                      value={tags}
                      onChange={(e)=>setTags(e.target.value)}
                      className={style.productAdd_formBox_input}
                    />
                  </div>
                <div className={style.productAdd_formBox}>
                    <label
                      htmlFor="#"
                      className={style.productAdd_formBox_label}
                    >
                      قیمت محصول
                    </label>
                    <input
                      type="text"
                      value={price}
                      onChange={(e)=>setPrice(e.target.value)}
                      className={style.productAdd_formBox_input}
                    />
                  </div>
                <div className={style.productAdd_formBox}>
                    <label
                      htmlFor="#"
                      className={style.productAdd_formBox_label}
                    >
                     عکس ها
                    </label>
                    <input
                      type="file"
                      onChange={handlerChangeImg}
                      className={style.productAdd_formBox_input}
                      multiple
                    />
                  </div>
                  <button className={`${"showMore"} ${style.productAdd_formBox_submit}`}
                  type="submit"
                   onClick={handlerAddProduct}
                  >ثبت</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductAdd;
