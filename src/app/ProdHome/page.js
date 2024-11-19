import Breadcrumb from '@/components/modules/Breadcrumb/Breadcrumb';
import Footer from '@/components/modules/Footer/Footer';
import Navbar from '@/components/modules/Navbar/Navbar';
import PageHeader from '@/components/modules/PageHeader/PageHeader';
import Shop from '@/components/template/product/Shop/Shop';
import { authUser } from '@/utils/serverHelpers';
import React from 'react';

export const metadata = {
  title:"بن مانو | محصولات خانگی ",
}

async function page() {
  const user = await authUser()
  return (
    <>
    <Navbar isLogin={user? true :false}/>
    <Breadcrumb name="محصولات خانگی"/>
    <PageHeader title="محصولات خانگی"/>
    <Shop/>
    <Footer/>
    </>
  )
}

export default page