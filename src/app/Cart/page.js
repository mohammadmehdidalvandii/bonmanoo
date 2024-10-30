import Breadcrumb from '@/components/modules/Breadcrumb/Breadcrumb';
import Footer from '@/components/modules/Footer/Footer';
import Navbar from '@/components/modules/Navbar/Navbar';
import React from 'react';


export const metadata = {
    title:" سبد خرید | درباره ما",
}
function page() {
  return (
    <>
    <Navbar/>
    <Breadcrumb name="سبد خرید"/>
    <Footer/>
    </>
  )
}

export default page