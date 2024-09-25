import Breadcrumb from '@/components/modules/Breadcrumb/Breadcrumb';
import Footer from '@/components/modules/Footer/Footer';
import Navbar from '@/components/modules/Navbar/Navbar';
import PageHeader from '@/components/modules/PageHeader/PageHeader';
import Categories from '@/components/template/category/Categories/Categories';
import React from 'react';

function page() {
  return (
    <>
    <Navbar/>
    <Breadcrumb name="دانش نامه"/>
    <PageHeader title="دانشنامه"/>
    <Categories/>
    <Footer/>
    </>
  )
}

export default page