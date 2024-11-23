import React from 'react';
import Breadcrumb from '@/components/modules/Breadcrumb/Breadcrumb';
import Navbar from '@/components/modules/Navbar/Navbar';
import Footer from '@/components/modules/Footer/Footer';
import PageHeader from '@/components/modules/PageHeader/PageHeader';
import Shop from '@/components/template/product/Shop/Shop';
import { authUser } from '@/utils/serverHelpers';
import connectToDB from '@/config/db';
import ProductsModel from '@/models/Products'


export const metadata = {
  title:"بن مانو | فروشگاه",
}
async function page() {
  const user  = await  authUser();
  await connectToDB();
  const products = await ProductsModel.find({})

  return (
    <>
    <Navbar isLogin={user? true :false}/>
    <Breadcrumb name="محصولات بن مانو"/>
    <PageHeader title="محصولات بن مانو"/>
    <Shop products={products}/>
    <Footer/>
    </>
  )
}

export default page