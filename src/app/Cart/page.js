import Breadcrumb from '@/components/modules/Breadcrumb/Breadcrumb';
import Footer from '@/components/modules/Footer/Footer';
import Navbar from '@/components/modules/Navbar/Navbar';
import Basket from '@/components/template/cart/Basket/Basket';
import { authUser } from '@/utils/serverHelpers';
import React from 'react';

 export const metadata = {
    title:"  بن مانو |  سبدخرید",
}

async function page() {
  const user = await authUser()
  return (
    <>
    <Navbar isLogin={user? true :false}/>
    <Breadcrumb name="سبد خرید"/>
    <Basket/>
    <Footer/>
    </>
  )
}

export default page