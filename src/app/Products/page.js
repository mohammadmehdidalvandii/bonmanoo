import React from 'react';
import Breadcrumb from '@/components/modules/Breadcrumb/Breadcrumb';
import Navbar from '@/components/modules/Navbar/Navbar';
import Footer from '@/components/modules/Footer/Footer';
import PageHeader from '@/components/modules/PageHeader/PageHeader';
import ProdButtons from '@/components/template/product/ProdButtons/ProdButtons';

function page() {
  return (
    <>
    <Navbar/>
    <Breadcrumb name="محصولات بن مانو"/>
    <PageHeader title="محصولات بن مانو"/>
    <ProdButtons/>
    <Footer/>
    </>
  )
}

export default page