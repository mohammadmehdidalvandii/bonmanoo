import Breadcrumb from '@/components/modules/Breadcrumb/Breadcrumb';
import Footer from '@/components/modules/Footer/Footer';
import Navbar from '@/components/modules/Navbar/Navbar';
import PageHeader from '@/components/modules/PageHeader/PageHeader';
import Shop from '@/components/template/product/Shop/Shop';
import React from 'react';

export const metadata = {
  title:"بن مانو | محصولات هورکا ",
}

function page() {
  return (
    <>
    <Navbar/>
    <Breadcrumb name="محصولات هورکا"/>
    <PageHeader title="محصولات هورکا"/>
    <Shop/>
    <Footer/>
    </>
  )
}

export default page