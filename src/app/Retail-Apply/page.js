import Breadcrumb from '@/components/modules/Breadcrumb/Breadcrumb';
import Footer from '@/components/modules/Footer/Footer';
import Navbar from '@/components/modules/Navbar/Navbar';
import Content from '@/components/template/retail-apply/Content/Content';
import React from 'react';

function page() {
  return (
    <>
    <Navbar/>
    <Breadcrumb name="ثبت درخواست نمایندگی خرده‌فروشی"/>
    <Content/>
    <Footer/>
    </>
  )
}

export default page