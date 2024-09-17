import React from 'react';
import Breadcrumb from '@/components/modules/Breadcrumb/Breadcrumb';
import Navbar from '@/components/modules/Navbar/Navbar';
import Footer from '@/components/modules/Footer/Footer';

function page() {
  return (
    <>
    <Navbar/>
    <Breadcrumb name="محصولات بن مانو"/>
    <Footer/>
    </>
  )
}

export default page