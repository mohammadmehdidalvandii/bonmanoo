import Breadcrumb from '@/components/modules/Breadcrumb/Breadcrumb';
import Footer from '@/components/modules/Footer/Footer';
import Navbar from '@/components/modules/Navbar/Navbar';
import PageHeader from '@/components/modules/PageHeader/PageHeader';
import Categories from '@/components/template/category/Categories/Categories';
import { authUser } from '@/utils/serverHelpers';
import React from 'react';
export const metadata = {
  title:"بن مانو | دسته بندی  مقاله  ",
}
async function page() {
  const user = await authUser()
  return (
    <>
    <Navbar isLogin={user? true :false}/>
    <Breadcrumb name="دانش نامه"/>
    <PageHeader title="دانشنامه"/>
    <Categories/>
    <Footer/>
    </>
  )
}

export default page