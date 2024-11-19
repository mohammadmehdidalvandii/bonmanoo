import Breadcrumb from '@/components/modules/Breadcrumb/Breadcrumb';
import Footer from '@/components/modules/Footer/Footer';
import Navbar from '@/components/modules/Navbar/Navbar';
import Content from '@/components/template/retail-apply/Content/Content';
import { authUser } from '@/utils/serverHelpers';
import React from 'react';


export const metadata = {
  title:"بن مانو |  ثبت نمایندگی",
}
async function page() {
  const user = await authUser()
  return (
    <>
    <Navbar isLogin={user? true :false}/>
    <Breadcrumb name="ثبت درخواست نمایندگی خرده‌فروشی"/>
    <Content/>
    <Footer/>
    </>
  )
}

export default page