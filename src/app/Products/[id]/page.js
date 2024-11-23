import Breadcrumb from "@/components/modules/Breadcrumb/Breadcrumb";
import Footer from "@/components/modules/Footer/Footer";
import Navbar from "@/components/modules/Navbar/Navbar";
import Cart from "@/components/template/productSingle/Cart/Cart";
import Details from "@/components/template/productSingle/Details/Details";
import Gallery from "@/components/template/productSingle/Gallery/Gallery";
import Info from "@/components/template/productSingle/Info/Info";
import ProdArticles from "@/components/template/productSingle/ProdArticles/ProdArticles";
import ProdComment from "@/components/template/productSingle/ProdComment/ProdComment";
import ProdQuestion from "@/components/template/productSingle/ProdQuestion/ProdQuestion";
import ProductInfo from "@/components/template/productSingle/ProductInfo/ProductInfo";
import ProductSuggest from "@/components/template/productSingle/ProductSuggest/ProductSuggest";
import QandA from "@/components/template/productSingle/QandA/QandA";
import Tag from "@/components/template/productSingle/Tag/Tag";
import connectToDB from "@/config/db";
import { authUser } from "@/utils/serverHelpers";
import React from "react";
import ProductModel from '@/models/Products'

async function ProductSingle({params}) {
  const user = await authUser()
  await connectToDB();
  const productID = params.id
  const product = await ProductModel.findOne({_id:productID})
  return (
    <>
      <Navbar isLogin={user? true :false}/>
      <Breadcrumb name="جزئیات محصول" />
      <div className="containers">
        <div className="row">
          <div className="col-lg-9 col-md-8 col-sm-12 col-xs-12">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <Gallery products={product.img}/>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <Info product={product}/>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-12">
                <ProductInfo  product={product}/>
                <Details product={product} />
                <ProdQuestion />
                <Tag tags={product}/>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12">
            <Cart />
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12">
          <ProductSuggest />
          <ProdArticles/>
          <ProdComment/>
          <QandA/>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductSingle;
