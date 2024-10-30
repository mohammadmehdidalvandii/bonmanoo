import Breadcrumb from '@/components/modules/Breadcrumb/Breadcrumb';
import Footer from '@/components/modules/Footer/Footer';
import Navbar from '@/components/modules/Navbar/Navbar';
import Basket from '@/components/template/cart/Basket/Basket';
import React from 'react';


export const metadata = {
    title:"  بن مانو |  سبدخرید",
}
function page() {
  return (
    <>
    <Navbar/>
    <Breadcrumb name="سبد خرید"/>
    <Basket/>
    <Footer/>
    </>
  )
}

export default page